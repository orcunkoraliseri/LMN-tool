/**
 * LPV Profile Page
 * Handles the LPV profile visualization and toggle button interactions
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
 * Setup toggle button interactions for LPV parameters
 */
function setupLPVToggleButtons() {
    const buttons = document.querySelectorAll('.lpv-toggle-btn');

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
    }

    // Setup toggle buttons
    setupLPVToggleButtons();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initLPVPage);
