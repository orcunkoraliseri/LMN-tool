/**
 * EV Profile Page
 * Handles the EV profile visualization
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
 * Initialize the EV page
 */
function initEVPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backStepBtn = document.getElementById('back-step-btn');
    const nextStepBtn = document.getElementById('next-step-btn');

    if (neighbourhoodCode) {
        // Update title
        titleElement.textContent = `Step 3: EV Profile of ${neighbourhoodCode}`;

        // Set back button href to PV page with neighbourhood param
        if (backStepBtn) {
            backStepBtn.href = `pv.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }

        // Set next step button href (placeholder for LPV page)
        if (nextStepBtn) {
            nextStepBtn.href = `lpv.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }
    } else {
        titleElement.textContent = 'EV Profile';
        document.querySelector('.ev-content-placeholder').innerHTML =
            '<p class="error-message">No neighbourhood specified. Please select a neighbourhood from the results page.</p>';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initEVPage);
