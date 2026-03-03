# Energy Breakdown Page Documentation

## Overview
The Energy Breakdown Page (`energy.html`) provides an interactive treemap visualization of energy demand breakdown for the selected neighbourhood, displaying 13 different energy categories.

**File Path**: `/Interface/energy.html`  
**Related Files**: 
- JavaScript: `js/energy.js`, `js/data.js`
- Styles: `css/styles.css`
- Data: `Templates/NUs_Energy.csv`

---

## Purpose
Visualize energy breakdown using an interactive treemap, allowing users to understand the distribution of energy demand across different categories.

---

## Features

### Header Section
- **Title**: "Energy Breakdown"
- **Energy Indicators Row**:
  - **Energy Status**: Visual indicator (Positive/Neutral/Negative)
    - Images from `/Content/Images_EnergyStatus/`
  - **EUI Scale**: Energy Use Intensity scale with color gradient
    - Displays kWh/m²·year value
    - Color-coded scale (green to yellow to red)

### Treemap Visualization
- **Layout**: Rectangle-based treemap
- **Category Count**: 13 energy categories
- **Sizing**: Proportional to energy intensity (kWh/m²·yr)
- **Dynamic Filtering**: Treemap content filters based on Layer 2 "Energy" selections (Thermal Load vs. Electric).
- **Color Coding**: Each category has distinct color
- **Interactive**: Hover effects show detailed information

#### Energy Categories
1. Heating (Thermal Load)
2. Cooling (Thermal Load)
3. Interior Lighting
4. Exterior Lighting
5. Interior Equipment
6. Exterior Equipment
7. Fans
8. Pumps
9. Heat Rejection
10. Humidification
11. Heat Recovery
12. Water Systems
13. Refrigeration

### Legend
- **Position**: Below treemap
- **Content**: All 13 categories with:
  - Category name
  - Energy value (kWh/m²·year)
  - Percentage of total
  - Color indicator matching treemap

### Navigation
- **Back Button**: Returns to Energy Selection Page
- **Next Button**: "Layer 2: PV Generation" - proceeds to PV Profile

---

## Layout and Design

### Page Structure
```
+------------------------------------------+
|              Header                      |
|        "Energy Breakdown"                |
|  [Energy Status]  [EUI Scale: 120]      |
+------------------------------------------+
|  [← Back]              [Next: PV →]      |
|                                          |
|  +------------------------------------+  |
|  |        Treemap Visualization       |  |
|  |  +--------+----------+             |  |
|  |  |Heating | Cooling  |             |  |
|  |  |  40%   |   25%    | Equipment   |  |
|  |  +--------+----------+   15%       |  |
|  |  |Lighting| Fans     |             |  |
|  |  |  10%   |   5%     |             |  |
|  |  +--------+----------+-------------+  |
|  +------------------------------------+  |
|                                          |
|  Legend:                                 |
|  ◼ Heating (48 kWh/m²·year - 40%)       |
|  ◼ Cooling (30 kWh/m²·year - 25%)       |
|  ...                                     |
+------------------------------------------+
```

### Visual Design
- **Treemap Colors**: Distinct, non-conflicting colors for categories
- **Hover Effects**: Highlight and tooltip on hover
- **Responsive**: Adapts to screen size
- **Font Sizing**: Dynamic based on rectangle size

---

## User Interaction Flow

### Step-by-Step Journey
1. **Page Load**
   - Load neighbourhood energy data from `js/data.js`
   - Calculate treemap layout
   - Render rectangles proportionally
   - Display legend

2. **Explore Breakdown**
   - User views treemap visualization
    - Identifies largest energy consumers (recalculated based on current filter)
    - Reads legend for detailed values

3. **Interactive Exploration**
   - Hover over rectangles for tooltips
   - Compare category sizes visually
   - Reference legend for exact values

4. **Navigation**
   - **Back**: Return to Energy Selection
   - **Next**: Proceed to PV Generation Profile

---

## Technical Implementation

### Treemap Algorithm (`energy.js`)

#### Data Processing
```javascript
// Load energy data for selected neighbourhood
const nuData = getNeighbourhoodEnergyData(selectedNU);

// Calculate total energy
const totalEnergy = calculateTotal(nuData);

// Calculate percentages
const categoriesWithPercentages = nuData.map(cat => ({
  ...cat,
  percentage: (cat.value / totalEnergy) * 100
}));
```

#### Layout Calculation
```javascript
// Squarified treemap layout algorithm
function calculateTreemapLayout(data, width, height) {
  // Sort by value descending
  // Calculate rectangles to minimize aspect ratio
  // Return array of {x, y, width, height, category, value}
}
```

#### Rendering
```javascript
// Create treemap rectangles
function renderTreemap(layout) {
  layout.forEach(rect => {
    const div = createRectangleElement(rect);
    container.appendChild(div);
  });
}

// Rectangle element structure
function createRectangleElement(rect) {
  return `
    <div class="treemap-rect" style="
      left: ${rect.x}px;
      top: ${rect.y}px;
      width: ${rect.width}px;
      height: ${rect.height}px;
      background-color: ${rect.color};
    ">
      <span>${rect.category}</span>
      <span>${rect.percentage.toFixed(1)}%</span>
    </div>
  `;
}
```

### Data Source
- **Energy Data**: `js/data.js` (from CSV: `Templates/NUs_Energy.csv`)
- **Format**: JSON array with category names and values
- **Units**: kWh/m²·year
- **Neighbourhood Specific**: Data matched to selected NU code

### Color Scheme
```javascript
const categoryColors = {
  'Heating': '#EF4444',
  'Cooling': '#3B82F6',
  'Interior Lighting': '#F59E0B',
  'Exterior Lighting': '#FCD34D',
  'Interior Equipment': '#10B981',
  'Exterior Equipment': '#34D399',
  'Fans': '#8B5CF6',
  'Pumps': '#A78BFA',
  'Heat Rejection': '#EC4899',
  'Humidification': '#F472B6',
  'Heat Recovery': '#14B8A6',
  'Water Systems': '#06B6D4',
  'Refrigeration': '#6366F1'
};
```

---

## HTML Structure

### Treemap Container
```html
<div id="treemap-container" class="treemap-container">
  <!-- Rectangles dynamically generated by energy.js -->
</div>
```

### Legend
```html
<div id="legend" class="treemap-legend">
  <!-- Legend items dynamically generated -->
</div>
```

### Generated Rectangle Example
```html
<div class="treemap-rect" style="...">
  <div class="rect-label">
    <span class="category-name">Heating</span>
    <span class="category-value">48 kWh/m²·year</span>
    <span class="category-percentage">40%</span>
  </div>
</div>
```

---

## CSS Styling

### Treemap Styles
```css
.treemap-container {
  position: relative;
  width: 100%;
  height: 600px;
  border: 1px solid #e5e7eb;
}

.treemap-rect {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  cursor: pointer;
  transition: opacity 0.2s;
}

.treemap-rect:hover {
  opacity: 0.8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### Legend Styles
```css
.treemap-legend {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
  margin-top: 2rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}
```

---

## Energy Status Indicators

### Indicator Types
- **Positive**: Energy surplus (generation > load)
  - Icon: `/Content/Images_EnergyStatus/Positive.png`
  - Color: Green
  
- **Neutral**: Balanced energy (generation ≈ load)
  - Icon: `/Content/Images_EnergyStatus/Neutral.png`
  - Color: Yellow
  
- **Negative**: Energy deficit (generation < load)
  - Icon: `/Content/Images_EnergyStatus/Negative.png`
  - Color: Red

### EUI Scale
- **Display**: Horizontal color gradient bar
- **Range**: Typically 50-200 kWh/m²·year
- **Color Mapping**:
  - Low (50-100): Green
  - Medium (100-150): Yellow
  - High (150-200+): Red

---

## Data Format

### Energy Data Structure
```javascript
const energyData = {
  nuCode: "NU001",
  eui: 120.5, // kWh/m²·year
  energyStatus: "Positive",
  breakdown: [
    { name: "Heating", value: 48.2 },
    { name: "Cooling", value: 30.1 },
    { name: "Interior Lighting", value: 12.0 },
    // ... more categories
  ]
};
```

---

## Accessibility Features
- **Alt Text**: Energy status images have descriptive text
- **ARIA Labels**: Treemap rectangles labeled for screen readers
- **Keyboard Navigation**: Legend items accessible via Tab
- **Color Blindness**: Distinct colors chosen for accessibility
- **Text Contrast**: Ensures readability on all backgrounds

---

## Performance Considerations
- **Efficient Layout**: Optimized squarified algorithm
- **Lazy Rendering**: Only visible elements rendered
- **Responsive**: Recalculates on window resize (debounced)
- **Data Caching**: Energy data cached to avoid re-fetching

---

## Future Enhancements
- Dynamic cross-filtering between Layer 2 options and Treemap (Implemented)
- Drill-down to sub-categories
- Time-based energy breakdown (monthly/seasonal)
- Comparison with benchmark neighbourhoods
- Export visualization as image
- Animated transitions between states
- Download energy data as CSV/JSON
