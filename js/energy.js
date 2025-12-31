/**
 * Energy Treemap Visualization
 * Renders a treemap showing energy breakdown by end-use category
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
 * Calculate percentage of each energy category
 * @param {Array} breakdown - Array of energy breakdown items
 * @param {number} total - Total energy value
 * @returns {Array} Breakdown with percentages added
 */
function calculatePercentages(breakdown, total) {
    return breakdown
        .filter(item => item.value > 0)
        .map(item => ({
            ...item,
            percentage: ((item.value / total) * 100).toFixed(1)
        }))
        .sort((a, b) => b.value - a.value);
}

/**
 * Squarified treemap algorithm
 * @param {Array} data - Array of items with value property
 * @param {number} x - Starting x position
 * @param {number} y - Starting y position
 * @param {number} width - Available width
 * @param {number} height - Available height
 * @returns {Array} Items with x, y, width, height properties
 */
function squarify(data, x, y, width, height) {
    if (data.length === 0) return [];
    if (data.length === 1) {
        return [{
            ...data[0],
            x: x,
            y: y,
            width: width,
            height: height
        }];
    }

    const total = data.reduce((sum, item) => sum + item.value, 0);
    const sortedData = [...data].sort((a, b) => b.value - a.value);

    // Determine if we should split horizontally or vertically
    const isVertical = height > width;

    // Find the best split point
    let row = [];
    let rowTotal = 0;
    let remaining = [...sortedData];

    for (let i = 0; i < sortedData.length; i++) {
        const item = sortedData[i];
        const testRow = [...row, item];
        const testRowTotal = rowTotal + item.value;

        // Calculate aspect ratios
        const currentWorst = row.length > 0 ? worstAspectRatio(row, rowTotal, total, width, height, isVertical) : Infinity;
        const newWorst = worstAspectRatio(testRow, testRowTotal, total, width, height, isVertical);

        if (newWorst < currentWorst || row.length === 0) {
            row.push(item);
            rowTotal += item.value;
            remaining = sortedData.slice(i + 1);
        } else {
            break;
        }
    }

    // Layout the row
    const rowRatio = rowTotal / total;
    const results = [];

    if (isVertical) {
        const rowHeight = height * rowRatio;
        let currentX = x;

        row.forEach(item => {
            const itemWidth = width * (item.value / rowTotal);
            results.push({
                ...item,
                x: currentX,
                y: y,
                width: itemWidth,
                height: rowHeight
            });
            currentX += itemWidth;
        });

        // Recursively layout remaining items
        if (remaining.length > 0) {
            const remainingResults = squarify(remaining, x, y + rowHeight, width, height - rowHeight);
            results.push(...remainingResults);
        }
    } else {
        const rowWidth = width * rowRatio;
        let currentY = y;

        row.forEach(item => {
            const itemHeight = height * (item.value / rowTotal);
            results.push({
                ...item,
                x: x,
                y: currentY,
                width: rowWidth,
                height: itemHeight
            });
            currentY += itemHeight;
        });

        // Recursively layout remaining items
        if (remaining.length > 0) {
            const remainingResults = squarify(remaining, x + rowWidth, y, width - rowWidth, height);
            results.push(...remainingResults);
        }
    }

    return results;
}

/**
 * Calculate worst aspect ratio in a row
 */
function worstAspectRatio(row, rowTotal, total, width, height, isVertical) {
    if (row.length === 0) return Infinity;

    const rowRatio = rowTotal / total;
    const size = isVertical ? height * rowRatio : width * rowRatio;
    const otherSize = isVertical ? width : height;

    let worst = 0;
    row.forEach(item => {
        const itemSize = otherSize * (item.value / rowTotal);
        const aspect = Math.max(size / itemSize, itemSize / size);
        worst = Math.max(worst, aspect);
    });

    return worst;
}

/**
 * Render the treemap
 * @param {string} neighbourhoodCode - The neighbourhood code
 */
function renderTreemap(neighbourhoodCode) {
    const container = document.getElementById('treemap-container');
    const titleElement = document.getElementById('neighbourhood-title');
    const euiElement = document.getElementById('total-eui');
    const legendContainer = document.getElementById('legend');

    // Get energy data
    const energyData = ENERGY_DATA[neighbourhoodCode];

    if (!energyData) {
        container.innerHTML = '<p class="error-message">Energy data not found for this neighbourhood.</p>';
        titleElement.textContent = 'Energy Breakdown';
        euiElement.textContent = 'Neighbourhood not found';
        return;
    }

    // Update header
    titleElement.textContent = `${neighbourhoodCode} - Energy Breakdown`;
    euiElement.textContent = `Total: ${energyData.total.toFixed(1)} kWh/m²·yr`;

    // Calculate percentages and filter zero values
    const breakdown = calculatePercentages(energyData.breakdown, energyData.total);

    // Get container dimensions
    const containerWidth = container.clientWidth || 1000;
    const containerHeight = 450;
    container.style.height = `${containerHeight}px`;

    // Calculate squarified layout
    const layout = squarify(breakdown, 0, 0, containerWidth, containerHeight);

    // Clear container
    container.innerHTML = '';

    // Create treemap items
    layout.forEach(item => {
        const div = document.createElement('div');
        div.className = 'treemap-item';
        div.style.left = `${item.x}px`;
        div.style.top = `${item.y}px`;
        div.style.width = `${item.width}px`;
        div.style.height = `${item.height}px`;
        div.style.backgroundColor = ENERGY_COLORS[item.name] || '#6b7280';

        // Always show content, adjust font size based on available space
        const minDimension = Math.min(item.width, item.height);
        const showFull = item.width > 100 && item.height > 80;
        const showMedium = item.width > 60 && item.height > 50;

        if (showFull) {
            div.innerHTML = `
                <span class="treemap-name">${item.name}</span>
                <span class="treemap-value">${item.value.toFixed(1)} kWh/m²·yr</span>
                <span class="treemap-percent">${item.percentage}%</span>
            `;
        } else if (showMedium) {
            div.innerHTML = `
                <span class="treemap-name" style="font-size: 0.7rem">${item.name}</span>
                <span class="treemap-percent" style="font-size: 0.85rem">${item.percentage}%</span>
            `;
        } else if (minDimension > 30) {
            div.innerHTML = `<span class="treemap-percent" style="font-size: 0.75rem">${item.percentage}%</span>`;
        }

        // Tooltip on hover
        div.title = `${item.name}: ${item.value.toFixed(1)} kWh/m²·yr (${item.percentage}%)`;

        container.appendChild(div);
    });

    // Generate legend
    renderLegend(breakdown, legendContainer);
}

/**
 * Render the legend
 * @param {Array} breakdown - Energy breakdown data
 * @param {HTMLElement} container - Legend container
 */
function renderLegend(breakdown, container) {
    container.innerHTML = '';

    breakdown.forEach(item => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        legendItem.innerHTML = `
            <span class="legend-color" style="background-color: ${ENERGY_COLORS[item.name] || '#6b7280'}"></span>
            <span class="legend-name">${item.name}</span>
            <span class="legend-value">${item.value.toFixed(1)} (${item.percentage}%)</span>
        `;
        container.appendChild(legendItem);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const neighbourhoodCode = getNeighbourhoodFromURL();

    if (neighbourhoodCode) {
        renderTreemap(neighbourhoodCode);

        // Re-render on window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                renderTreemap(neighbourhoodCode);
            }, 100);
        });
    } else {
        document.getElementById('treemap-container').innerHTML =
            '<p class="error-message">No neighbourhood specified. Please select a neighbourhood from the results page.</p>';
    }
});
