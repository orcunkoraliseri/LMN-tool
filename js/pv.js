/**
 * PV Profile Page
 * Handles the PV generation profile visualization
 */

/**
 * Get neighbourhood code from URL parameter
 * @returns {string|null} The neighbourhood code or null
 */
function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

/**
 * Render the PV scale bar
 * @param {number} value - The PV generation value
 */
function renderPVScale(value) {
    const container = document.getElementById('pv-scale-container');
    if (!container) return;

    // Scale range 0-100
    const MIN = 0;
    const MAX = 100;

    // Calculate position on scale (0-100%)
    const position = Math.min(100, Math.max(0, ((value - MIN) / (MAX - MIN)) * 100));

    // Calculate color based on position (Green -> Yellow -> Red)
    // Using the same logic as EUI scale for visual consistency
    let color;
    if (position <= 50) {
        // Green to Yellow
        const ratio = position / 50;
        const r = Math.round(34 + (234 - 34) * ratio);
        const g = Math.round(197 + (234 - 197) * ratio);
        const b = Math.round(94 + (8 - 94) * ratio);
        color = `rgb(${r}, ${g}, ${b})`;
    } else {
        // Yellow to Red
        const ratio = (position - 50) / 50;
        const r = Math.round(234 + (239 - 234) * ratio);
        const g = Math.round(179 + (68 - 179) * ratio);
        const b = Math.round(8 + (68 - 8) * ratio);
        color = `rgb(${r}, ${g}, ${b})`;
    }

    container.innerHTML = `
        <div class="eui-scale-display">
            <span class="eui-scale-value" style="color: ${color}">${value.toFixed(1)}</span>
            <span class="eui-scale-unit">kWh/m²·yr</span>
            <div class="eui-scale-bar">
                <div class="eui-scale-indicator" style="left: ${position}%"></div>
            </div>
            <div class="eui-scale-labels">
                <span>${MIN}</span>
                <span>${MAX}</span>
            </div>
        </div>
    `;
}

/**
 * Render the Energy Status icon
 * @param {string} neighbourhoodCode - The neighbourhood code
 */
function renderEnergyStatus(neighbourhoodCode) {
    const container = document.getElementById('energy-status-container');
    if (!container) return;

    // Find the neighbourhood to get its energy status
    const neighbourhood = NEIGHBOURHOODS.find(n => n.code === neighbourhoodCode);
    if (!neighbourhood || !neighbourhood.energyStatus) {
        container.innerHTML = '';
        return;
    }

    const status = neighbourhood.energyStatus;
    const statusImage = ENERGY_STATUS_IMAGES[status];

    if (statusImage) {
        container.innerHTML = `
            <div class="energy-status-header-display">
                <img src="${statusImage}" alt="${status}" title="${status}" class="energy-status-header-icon">
            </div>
        `;
    }
}

/**
 * Update PV profile images for specific neighbourhoods
 * @param {string} neighbourhoodCode - The neighbourhood code
 */
function updatePVImages(neighbourhoodCode) {
    const irradiationImg = document.getElementById('solar-irradiation-img');
    const generationImg = document.getElementById('monthly-generation-img');

    if (!irradiationImg || !generationImg) return;

    if (neighbourhoodCode === 'RC1') {
        irradiationImg.src = 'Content/Images_PVProfile/RC1_IncidentRadiation_Roof.png';
        generationImg.src = 'Content/Images_PVProfile/RC1_DirectSunHours_Roof.png';
    } else {
        // Fallback to default mock-up images
        irradiationImg.src = 'Content/Images_PVProfile/Solar Irradiation.png';
        generationImg.src = 'Content/Images_PVProfile/Monthly Solar Generation.png';
    }
}

/**
 * Update PV parameter values dynamically
 * @param {string} neighbourhoodCode - The neighbourhood code
 */
function updatePVParameters(neighbourhoodCode) {
    if (!PV_GENERATION_DATA || !PV_GENERATION_DATA[neighbourhoodCode]) return;

    const data = PV_GENERATION_DATA[neighbourhoodCode];

    const elements = {
        '#pv-surface-val': data.surface,
        '#pv-efficiency-val': data.efficiency,
        '#pv-mounting-val': data.mounting,
        '#pv-gcr-val': data.gcr ? (parseFloat(data.gcr) * 100).toFixed(0) + '%' : '',
        '#pv-generation-val': data.generation,
        '#pv-rop-val': data.rop
    };

    for (const [selector, value] of Object.entries(elements)) {
        const el = document.querySelector(selector);
        if (el && value !== undefined) {
            el.textContent = value;
        }
    }
}

/**
 * Initialize the PV page
 */
function initPVPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backStepBtn = document.getElementById('back-step-btn');
    const nextStepBtn = document.getElementById('next-step-btn');

    // Render scale with random value (0-100 range as proxy)
    renderPVScale(70.5);

    // Render Energy Status icon and PV Images
    if (neighbourhoodCode) {
        renderEnergyStatus(neighbourhoodCode);
        updatePVImages(neighbourhoodCode);
        updatePVParameters(neighbourhoodCode);
    }

    if (neighbourhoodCode) {
        // Update title
        titleElement.textContent = `Layer 1: PV Generation of ${neighbourhoodCode}`;

        // Build sidebar
        if (typeof buildSidebar === 'function') {
            buildSidebar('pv', 'visuals');
        }

        // Set back button href to energy-selection page
        if (backStepBtn) {
            backStepBtn.href = `layer1_energy_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }

        // Set next step button href
        if (nextStepBtn) {
            nextStepBtn.href = `layer1_lpv_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }
    } else {
        titleElement.textContent = 'PV Generation Profile';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPVPage);
