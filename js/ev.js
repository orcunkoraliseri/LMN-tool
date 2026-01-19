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

        // Set back button href to LPV page with neighbourhood param
        if (backStepBtn) {
            backStepBtn.href = `lpv.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }

        // Next step button is disabled (Layer 4: Green Infrastructure - coming soon)
        // No navigation set for next button
    } else {
        titleElement.textContent = 'EV Profile';
    }

    // Setup toggle buttons
    setupEVToggleButtons();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initEVPage);
