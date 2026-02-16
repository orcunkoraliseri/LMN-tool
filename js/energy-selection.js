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

            // Store selections in sessionStorage (for future use)
            sessionStorage.setItem('energySelections', JSON.stringify(energySelections));

            // Navigate to output energy page with neighbourhood parameter
            if (neighbourhoodCode) {
                window.location.href = `output_energy.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
            } else {
                // Fallback - try to get from sessionStorage or go to output
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
        titleElement.textContent = `Layer 2: Energy Design Interface for ${neighbourhoodCode}`;

        // Update back button to maintain context (go back to output page)
        if (backBtn) {
            backBtn.href = 'output.html';
        }
    }

    // Setup interactive elements
    setupConsumptionCards();
    setupGenerationCards();
    setupSubmitButton();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initEnergySelectionPage);
