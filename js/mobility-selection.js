/**
 * Mobility Selection Page
 * Handles parameter selection for mobility and transportation
 */

/**
 * Get neighbourhood code from URL parameter.
 * @returns {string|null} The neighbourhood code or null.
 */
function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

// Current selection state
const mobilitySelections = {
    transportation: [],
    mobility: []
};

/**
 * Setup card event listeners for multi-selection.
 */
function setupCards() {
    const transportCards = document.querySelectorAll('.transportation-card');
    transportCards.forEach(card => {
        card.addEventListener('click', () => {
            const value = card.dataset.value;
            card.classList.toggle('active');

            if (card.classList.contains('active')) {
                if (!mobilitySelections.transportation.includes(value)) {
                    mobilitySelections.transportation.push(value);
                }
            } else {
                mobilitySelections.transportation = mobilitySelections.transportation.filter(v => v !== value);
            }
        });
    });

    const mobilityCards = document.querySelectorAll('.mobility-card');
    mobilityCards.forEach(card => {
        card.addEventListener('click', () => {
            const value = card.dataset.value;
            card.classList.toggle('active');

            if (card.classList.contains('active')) {
                if (!mobilitySelections.mobility.includes(value)) {
                    mobilitySelections.mobility.push(value);
                }
            } else {
                mobilitySelections.mobility = mobilitySelections.mobility.filter(v => v !== value);
            }
        });
    });
}

/**
 * Setup submit button to navigate to output mobility page.
 */
function setupSubmitButton() {
    const submitBtn = document.getElementById('view-mobility-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const neighbourhoodCode = getNeighbourhoodFromURL();

            // Store selections in sessionStorage (for future use)
            sessionStorage.setItem('mobilitySelections', JSON.stringify(mobilitySelections));

            if (neighbourhoodCode) {
                window.location.href = `layer3_output_mobility.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
            } else {
                alert('No neighbourhood selected. Please go back and select a neighbourhood.');
            }
        });
    }
}

/**
 * Initialize the Mobility Selection page.
 */
function initMobilitySelectionPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backBtn = document.getElementById('back-btn');

    if (neighbourhoodCode) {
        titleElement.textContent = `Layer 3: Mobility Selection for ${neighbourhoodCode}`;

        if (backBtn) {
            backBtn.href = `layer2_output_energy.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }

        buildSidebar('layer3_selection', 'selection');
    }

    setupCards();
    setupSubmitButton();
}

document.addEventListener('DOMContentLoaded', initMobilitySelectionPage);
