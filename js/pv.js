/**
 * PV Generation Page
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
 * Initialize the PV page
 */
function initPVPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backStepBtn = document.getElementById('back-step-btn');
    const nextStepBtn = document.getElementById('next-step-btn');

    if (neighbourhoodCode) {
        // Update title
        titleElement.textContent = `Step 2: PV Generation Profile of ${neighbourhoodCode}`;

        // Set back button href to energy page with neighbourhood param
        if (backStepBtn) {
            backStepBtn.href = `energy.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }

        // Set next step button href (placeholder for now)
        if (nextStepBtn) {
            nextStepBtn.href = `ev.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }
    } else {
        titleElement.textContent = 'PV Generation Profile';
        document.querySelector('.pv-content-placeholder').innerHTML =
            '<p class="error-message">No neighbourhood specified. Please select a neighbourhood from the results page.</p>';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPVPage);
