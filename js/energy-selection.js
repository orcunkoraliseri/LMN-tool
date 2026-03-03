/**
 * Energy Selection Page
 * Handles parameter selection for energy consumption and generation
 * Note: This is a demo page - selections do not affect the energy data shown
 */

/**
 * Get neighbourhood code from URL parameter.
 * @returns {string|null} The neighbourhood code or null.
 */
function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

// Current selection state (arrays for multi-select)
const energySelections = {
    consumption: [],
    generation: []
};

/**
 * Setup consumption card event listeners (multi-selection).
 */
function setupConsumptionCards() {
    const cards = document.querySelectorAll('.consumption-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const value = card.dataset.value;

            // Toggle this card (multi-select)
            card.classList.toggle('active');

            // Update selection state
            if (card.classList.contains('active')) {
                // Add to selections if not already present
                if (!energySelections.consumption.includes(value)) {
                    energySelections.consumption.push(value);
                }
            } else {
                // Remove from selections
                energySelections.consumption = energySelections.consumption.filter(v => v !== value);
            }
        });
    });
}

/**
 * Setup generation card event listeners (multi-selection).
 */
function setupGenerationCards() {
    const cards = document.querySelectorAll('.generation-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const value = card.dataset.value;

            // Toggle this card (multi-select)
            card.classList.toggle('active');

            // Update selection state
            if (card.classList.contains('active')) {
                // Add to selections if not already present
                if (!energySelections.generation.includes(value)) {
                    energySelections.generation.push(value);
                }
            } else {
                // Remove from selections
                energySelections.generation = energySelections.generation.filter(v => v !== value);
            }
        });
    });
}

/**
 * Setup submit button to navigate to energy page.
 */
function setupSubmitButton() {
    const submitBtn = document.getElementById('view-energy-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const neighbourhoodCode = getNeighbourhoodFromURL();

            if (!energySelections.consumption.length && !energySelections.generation.length) {
                alert('Please select at least one energy or generation parameter.');
                return;
            }

            // Store selections in sessionStorage (for future use)
            sessionStorage.setItem('energySelections', JSON.stringify(energySelections));

            if (neighbourhoodCode) {
                // Navigate to the output energy results page
                window.location.href = `layer1_output_energy.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
            } else {
                alert('No neighbourhood selected. Please go back and select a neighbourhood.');
            }
        });
    }
}

/**
 * Initialize the Energy Selection page.
 */
function initEnergySelectionPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backBtn = document.getElementById('back-btn');

    if (neighbourhoodCode) {
        // Update title with neighbourhood code
        titleElement.textContent = `Layer 1: Energy Design Interface for ${neighbourhoodCode}`;

        // Update back button to maintain context (go back to selection page)
        if (backBtn) {
            backBtn.href = 'layer0_output.html';
        }

        // Build the initial sidebar in selection mode
        buildSidebar('layer1_selection', 'selection');
    }

    // Setup interactive elements
    setupConsumptionCards();
    setupGenerationCards();
    setupSubmitButton();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initEnergySelectionPage);
