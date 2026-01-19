/**
 * LPV Profile Page
 * Handles the LPV profile visualization
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
 * Initialize the LPV page
 */
function initLPVPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backStepBtn = document.getElementById('back-step-btn');
    const nextStepBtn = document.getElementById('next-step-btn');

    if (neighbourhoodCode) {
        // Update title
        titleElement.textContent = `Step 4: LPV Profile of ${neighbourhoodCode}`;

        // Set back button href to EV page with neighbourhood param
        if (backStepBtn) {
            backStepBtn.href = `ev.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }

        // Set next step button href (placeholder for Step 5 page)
        if (nextStepBtn) {
            nextStepBtn.href = `step5.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }
    } else {
        titleElement.textContent = 'LPV Profile';
        document.querySelector('.lpv-content-placeholder').innerHTML =
            '<p class="error-message">No neighbourhood specified. Please select a neighbourhood from the results page.</p>';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initLPVPage);
