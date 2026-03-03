/**
 * Output Mobility Page
 * Displays the selected neighbourhood along with transportation and mobility parameters in the sidebar
 */

function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

/**
 * Render the output table (Intentionally removed as layout updated to not use the table here)
 */
function renderOutputMobilityTable() {
    // Left blank intentionally, handled through sidebar layout update.
}

/**
 * Setup navigation buttons
 */
function setupNavigation() {
    const backBtn = document.getElementById('back-btn');
    const proceedBtn = document.getElementById('proceed-green-btn');
    const proceedNavBtn = document.getElementById('proceed-green-nav-btn');
    const neighbourhoodCode = getNeighbourhoodFromURL();

    if (backBtn && neighbourhoodCode) {
        backBtn.href = `layer2_mobility_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
    }

    if (proceedBtn && neighbourhoodCode) {
        proceedBtn.addEventListener('click', () => {
            window.location.href = `layer3_green_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        });
    }

    if (proceedNavBtn && neighbourhoodCode) {
        proceedNavBtn.href = `layer3_green_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
    }
}

/**
 * Initialize page
 */
function initOutputMobilityPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');

    if (neighbourhoodCode) {
        titleElement.textContent = `Layer 2: Mobility Selection Results for ${neighbourhoodCode}`;

        if (typeof buildSidebar === 'function') {
            buildSidebar('layer2_output', 'visuals');
        }
    }

    renderOutputMobilityTable();
    setupNavigation();
}

document.addEventListener('DOMContentLoaded', initOutputMobilityPage);
