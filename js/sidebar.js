/**
 * Shared Sidebar Component
 * Dynamically builds the left sidebar by reading cumulative state from sessionStorage.
 */

/**
 * Builds and inserts the sidebar HTML into the placeholder element.
 * 
 * @param {string} currentLayer - "energy-selection" | "energy" | "pv" | "lpv" | "ev"
 * @param {string} mode - "selection" | "visuals" 
 */
function buildSidebar(currentLayer, mode) {
    const sidebarContainer = document.getElementById('sidebar');
    if (!sidebarContainer) return;

    // Retrieve data across layers
    const energySelections = JSON.parse(sessionStorage.getItem('energySelections') || '{"consumption":[], "generation":[]}');
    const lpvSelections = JSON.parse(sessionStorage.getItem('lpvSelections') || '{}');
    const evSelections = JSON.parse(sessionStorage.getItem('evSelections') || '{}');

    // Retrieve basic neighbourhood info
    const params = new URLSearchParams(window.location.search);
    const codeFromURL = params.get('neighbourhood');

    let neighbourhood = null;
    let concept = null;

    // Attempt to get full neighbourhood data from memory (set in Layer 0/1)
    try {
        const storedNuInfo = JSON.parse(sessionStorage.getItem('selectedNeighbourhood'));
        if (storedNuInfo && storedNuInfo.code === codeFromURL) {
            neighbourhood = storedNuInfo;
            // Also need concept info if stored, else fallback
            const storedConcept = JSON.parse(sessionStorage.getItem('selectedConcept'));
            if (storedConcept) concept = storedConcept;
        }
    } catch (e) { console.error("Error parsing stored neighbourhood", e); }

    // Fallback: If not found in sessionStorage, try to fetch from NEIGHBOURHOODS data (if data.js is loaded)
    if (!neighbourhood && typeof NEIGHBOURHOODS !== 'undefined' && codeFromURL) {
        neighbourhood = NEIGHBOURHOODS.find(n => n.code === codeFromURL);
        if (neighbourhood && typeof CONCEPTS !== 'undefined') {
            concept = CONCEPTS.find(c => c.id === neighbourhood.conceptId);
        }
    }

    if (!neighbourhood) {
        // Essential data missing, render empty or fallback message
        sidebarContainer.innerHTML = `<div class="sidebar-error">Neighbourhood data not found. Please start from the beginning.</div>`;
        return;
    }

    // Determine the title of the top boundary based on layer visibility
    let topBoundaryTitle = 'Layer 0';
    if (currentLayer === 'lpv' || currentLayer === 'ev') {
        topBoundaryTitle = 'Layer 0 + Layer 1';
    }

    // Sidebar HTML assembly
    let html = ``;

    // -------------------------------------------------------------
    // TOP SECTION (Purple background)
    // Cumulative Past Selections
    // -------------------------------------------------------------
    html += `
        <div class="sidebar-section sidebar-section--purple">
            <h2 class="sidebar-title">${topBoundaryTitle}</h2>
    `;

    // --- LAYER 0 DATA ---

    const nuImage = neighbourhood.image || 'https://via.placeholder.com/200x150?text=' + encodeURIComponent(neighbourhood.code);
    const conceptImage = concept ? concept.image : '';
    const conceptName = concept ? concept.name : 'Concept';

    html += `
        <div class="sidebar-block">
            <h3 class="sidebar-subtitle">Concept</h3>
            <div class="sidebar-item">
                <img src="${conceptImage}" alt="${conceptName}" onerror="this.style.display='none'">
                <span>${conceptName}</span>
            </div>
        </div>
        
        <div class="sidebar-block">
            <h3 class="sidebar-subtitle">Neighbourhood</h3>
            <div class="sidebar-item sidebar-item--large">
                <img src="${nuImage}" alt="${neighbourhood.code}" onerror="this.src='https://via.placeholder.com/200x150?text=${encodeURIComponent(neighbourhood.code)}'">
                <span class="code">${neighbourhood.code}</span>
            </div>
            <div class="sidebar-properties">
                <p><strong>Context:</strong> ${neighbourhood.context || 'N/A'}</p>
                <p><strong>Usage:</strong> ${neighbourhood.usage || 'N/A'}</p>
                <p><strong>Layout:</strong> ${neighbourhood.layout || 'N/A'}</p>
                <p><strong>Density:</strong> ${neighbourhood.density || 'N/A'}</p>
            </div>
        </div>
        
        <div class="sidebar-block">
            <h3 class="sidebar-subtitle">Buildings</h3>
            <div class="sidebar-buildings">
    `;

    if (neighbourhood.buildings && neighbourhood.buildings.length > 0) {
        neighbourhood.buildings.forEach(bId => {
            const imgPath = (typeof BUILDING_IMAGES !== 'undefined') ? BUILDING_IMAGES[bId] : '';
            html += `
                <div class="sidebar-building-icon">
                    ${imgPath ? `<img src="${imgPath}" alt="${bId}" onerror="this.style.display='none'">` : ''}
                    <span>${bId}</span>
                </div>
            `;
        });
    } else {
        html += `<span>No buildings defined.</span>`;
    }

    html += `
            </div>
        </div>
    `;

    // --- LAYER 1 CUMULATIVE DATA (Only show here if we are on Layer 2 pages) ---
    if ((currentLayer === 'lpv' || currentLayer === 'ev') && mode === 'selection') {
        html += generateLayer1Block(energySelections, false, currentLayer, neighbourhood.code);
    }

    html += `</div>`; // End top purple section

    // -------------------------------------------------------------
    // BOTTOM SECTION (Pink background)
    // Newly Added Features (Only applies in "visuals" or subsequent step mode)
    // -------------------------------------------------------------

    if (mode === 'visuals') {
        if (currentLayer === 'energy' || currentLayer === 'pv' || currentLayer === 'energy-selection') {
            html += `
                <div class="sidebar-section sidebar-section--pink">
                    <h2 class="sidebar-title">Layer 1</h2>
                    ${generateLayer1Block(energySelections, true, currentLayer, neighbourhood.code)}
                </div>
            `;
        }
        else if (currentLayer === 'ev') {
            html += `
                <div class="sidebar-section sidebar-section--pink">
                    <h2 class="sidebar-title">Layer 2</h2>
                    ${generateLayer2Block(lpvSelections, evSelections, true, currentLayer, neighbourhood.code)}
                </div>
            `;
        }
    }

    sidebarContainer.innerHTML = html;

    // Add click listeners to clickable items
    setupSidebarInteractions();
}

/**
 * Helper to generate Layer 1 (Energy + Generation) HTML blocks
 */
function generateLayer1Block(energySelections, isClickable, currentLayer, nuCode) {
    let html = ``;

    // --- Energy Consumption ---
    html += `<div class="sidebar-block">
                <h3 class="sidebar-subtitle">Energy</h3>
                <div class="sidebar-items-grid">`;

    if (energySelections.consumption && energySelections.consumption.length > 0) {
        energySelections.consumption.forEach(val => {
            const displayVal = val.charAt(0).toUpperCase() + val.slice(1);
            const clickableClass = isClickable ? 'sidebar-item--clickable' : '';
            const activeClass = (isClickable && currentLayer === 'energy') ? 'sidebar-item--active' : '';
            const dataset = isClickable ? `data-target="layer1_energy_breakdown.html?neighbourhood=${encodeURIComponent(nuCode)}"` : '';

            html += `
                <div class="sidebar-item ${clickableClass} ${activeClass}" ${dataset}>
                    <img src="Content/Images_Layer2_EnergyConsumption/${displayVal}.png" alt="${displayVal}" onerror="this.style.display='none'">
                    <span>${displayVal}</span>
                </div>
            `;
        });
    } else {
        html += `<span>None selected</span>`;
    }
    html += `</div></div>`;

    // --- Energy Generation ---
    html += `<div class="sidebar-block">
                <h3 class="sidebar-subtitle">Energy Generation</h3>
                <div class="sidebar-items-grid">`;

    const generationLabels = {
        'pv_roof': 'PV on Roof', 'pv_facade': 'PV on Facade',
        'pvt_roof': 'PV-T on Roof', 'pvt_facade': 'PV-T on Facade',
        'stc_roof': 'STC on Roof', 'stc_facade': 'STC on Facade',
        'biomass': 'Biomass', 'wind': 'Wind', 'geothermal': 'Geothermal'
    };

    if (energySelections.generation && energySelections.generation.length > 0) {
        energySelections.generation.forEach(val => {
            const label = generationLabels[val] || val;
            const clickableClass = isClickable ? 'sidebar-item--clickable' : '';
            // Make generation active if currentLayer is 'pv' AND it's a visualization mode
            const activeClass = (isClickable && currentLayer === 'pv') ? 'sidebar-item--active' : '';
            const dataset = isClickable ? `data-target="layer1_pv_breakdown.html?neighbourhood=${encodeURIComponent(nuCode)}"` : '';

            html += `
                <div class="sidebar-item ${clickableClass} ${activeClass}" ${dataset}>
                    <img src="Content/Images_Layer2_EnergyGeneration/${label}.png" alt="${label}" onerror="this.style.display='none'">
                    <span>${label}</span>
                </div>
            `;
        });
    } else {
        html += `<span>None selected</span>`;
    }
    html += `</div></div>`;

    return html;
}

/**
 * Helper to generate Layer 2 (EV + LPV) HTML blocks
 */
function generateLayer2Block(lpvSelections, evSelections, isClickable, currentLayer, nuCode) {
    let html = ``;

    // Similar to above, but for Layer 2 properties.
    // For now, we mainly just note that they are added, as the mockup 
    // focuses visual selections.
    html += `
        <div class="sidebar-block">
            <h3 class="sidebar-subtitle">Mobility & Land-PV</h3>
            <div class="sidebar-items-grid">
                <div class="sidebar-item sidebar-item--active">
                    <span>EV Profile Applied</span>
                </div>
            </div>
        </div>
    `;

    return html;
}

/**
 * Setup interactions for sidebar items that act as navigation links
 */
function setupSidebarInteractions() {
    const clickableItems = document.querySelectorAll('.sidebar-item--clickable');
    clickableItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetUrl = item.getAttribute('data-target');
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        });
    });
}
