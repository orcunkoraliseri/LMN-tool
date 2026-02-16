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
 * Initialize the PV page
 */
function initPVPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backStepBtn = document.getElementById('back-step-btn');
    const nextStepBtn = document.getElementById('next-step-btn');

    // Render scale with random value (0-100 range as proxy)
    renderPVScale(70.5);

    // Render Energy Status icon
    if (neighbourhoodCode) {
        renderEnergyStatus(neighbourhoodCode);
    }

    if (neighbourhoodCode) {
        // Update title
        titleElement.textContent = `Layer 2: PV Generation of ${neighbourhoodCode}`;

        // Set back button href to energy page with neighbourhood param
        if (backStepBtn) {
            backStepBtn.href = `output_energy.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }

        // Set next step button href
        if (nextStepBtn) {
            nextStepBtn.href = `lpv.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }
    } else {
        titleElement.textContent = 'PV Generation Profile';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPVPage);
