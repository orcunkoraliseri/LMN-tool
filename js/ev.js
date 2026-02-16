/**
 * EV Profile Page
 * Handles the EV profile visualization and toggle button interactions
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
 * Setup toggle button interactions for EV parameters
 */
function setupEVToggleButtons() {
    const buttons = document.querySelectorAll('.ev-toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            // Deselect all other buttons in this category
            buttons.forEach(btn => {
                if (btn.dataset.category === category && btn !== button) {
                    btn.classList.remove('active');
                }
            });

            // Toggle this button (or ensure it stays active for single selection)
            if (!button.classList.contains('active')) {
                button.classList.add('active');
            }
        });
    });
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
        titleElement.textContent = `Layer 3: Mobility of ${neighbourhoodCode}`;

        // Set back button href based on 'from' parameter or default to LPV
        if (backStepBtn) {
            const params = new URLSearchParams(window.location.search);
            const from = params.get('from');

            if (from === 'consumption') {
                backStepBtn.href = `energy.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
                backStepBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Energy Analysis
                `;
            } else {
                // Default to generation/lpv
                backStepBtn.href = `lpv.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
                backStepBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Land-PV Generation
                `;
            }
        }

        // Set next step button href (now "Back to Layer 2: Energy Output")
        if (nextStepBtn) {
            nextStepBtn.href = `output_energy.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }
    } else {
        titleElement.textContent = 'EV Profile';
    }

    // Setup toggle buttons
    setupEVToggleButtons();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initEVPage);
