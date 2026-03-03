# Energy Selection Page Documentation

## Overview
The Energy Selection Page (`energy-selection.html`) serves as an intermediate selection interface for energy analysis parameters between the neighbourhood selection and detailed energy breakdown.

**File Path**: `/Interface/energy-selection.html`  
**Related Files**: 
- JavaScript: `js/energy-selection.js`, `js/data.js`
- Styles: `css/styles.css`

---

## Purpose
Allow users to select specific energy and generation parameters for detailed analysis before viewing the comprehensive energy breakdown.

---

## Features

### Header Section
- **Title**: "Layer 2: Energy Design Interface"
- **Dynamic Neighbourhood Display**: Shows selected neighbourhood code
- **Description**: "Select energy and generation parameters for your analysis"

### Two Parameter Groups

#### 1. Energy Parameters
- **Options**: Thermal Load, Electric (2 options)
- **Selection Type**: Toggle (can select one or both)
- **Images**: `/Content/Images_Layer2_EnergyConsumption/`
  - `Thermal.png`
  - `Electric.png`
- **Purpose**: Select types of energy to analyze

#### 2. Energy Generation Parameters
- **Layout**: 4-row structure
- **Row 1**: PV on roof, PV on facade (2 columns)
- **Row 2**: PV-T on roof, PV-T on facade (2 columns)
- **Row 3**: STC on roof, STC on facade (2 columns)
- **Row 4**: Biomass, Wind, Geothermal (3 columns)
- **Selection Type**: Toggle (can select multiple)
- **Images**: `/Content/Images_Layer2_EnergyGeneration/`
  - `PV on roof.png`
  - `PV on facade.png`
  - `PV-T on roof.png`
  - `PV-T on facade.png`
  - `STC on roof.png`
  - `STC on facade.png`
  - `Biomass.png`
  - `Wind.png`
  - `Geothermal.png`
- **Purpose**: Select renewable energy generation sources to analyze

### Navigation
- **Back Button**: Returns to Output Page (Layer 1)
- **Submit Button**: "View Energy Performance" - proceeds to Energy Breakdown
- **Label**: "Back to Layer 1"

---

## Layout and Design

### Page Structure
```
+------------------------------------------+
|              Header                      |
|   "Layer 2: Energy Design Interface"    |
|         [Neighbourhood: NU001]           |
+------------------------------------------+
|  [← Back to Layer 1]                     |
|                                          |
|    Energy                                |
|    +------------------+------------------+
|    |  [Thermal Load]  |    [Electric]    |
|    |     [Image]      |     [Image]      |
|    +------------------+------------------+
|                                          |
|    Energy Generation                     |
|    +------------------------------------+
|    | [PV Roof]       | [PV Facade]     |
|    +------------------------------------+
|    | [PV-T Roof]     | [PV-T Facade]   |
|    +------------------------------------+
|    | [STC Roof]      | [STC Facade]    |
|    +------------------------------------+
|    | [Biomass] | [Wind] | [Geothermal] |
|    +------------------------------------+
|                                          |
|   [View Energy Performance Button]       |
+------------------------------------------+
```

### Visual Design
- **Card Layout**: Large image cards similar to Welcome Page
- **Selection Feedback**: Border highlight on selected cards
- **Hover Effects**: Smooth transitions
- **Two-Row Layout**: Consumption on top, Generation below
- **Centered Design**: All elements centered on page

---

## User Interaction Flow

### Step-by-Step Journey
1. **Page Load**
   - Load selected neighbourhood from `sessionStorage`
   - Display neighbourhood code in header
   - Show all energy parameter options
   - No parameters selected by default

2. **Parameter Selection**
   - User clicks on energy cards (Thermal Load/Electric)
   - User clicks on energy generation cards (Solar/Wind/Geothermal)
   - Visual feedback on selection
   - Multiple selections allowed

3. **Submit Selection**
   - User clicks "View Energy Performance" button
   - Selected parameters stored in `sessionStorage`
   - Navigate to Energy Breakdown Page

4. **Navigation Options**
   - **Back**: Return to Output Page to select different neighbourhood
   - **Forward**: View detailed energy breakdown

---

## Technical Implementation

### JavaScript Logic (`energy-selection.js`)

#### Load Neighbourhood Context
```javascript
// Retrieve selected neighbourhood from previous page
const selectedNU = sessionStorage.getItem('selectedNeighbourhood');
document.getElementById('neighbourhood-title').textContent = 
  `Layer 2: Energy Design Interface - ${selectedNU}`;
```

#### Selection Handling
```javascript
// Toggle selection for energy cards
document.querySelectorAll('.consumption-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
  });
});

// Toggle selection for generation cards
document.querySelectorAll('.generation-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
  });
});
```

#### Store and Navigate
```javascript
// Store selections and proceed
document.getElementById('view-energy-btn').addEventListener('click', () => {
  const consumption = getSelectedValues('.consumption-card');
  const generation = getSelectedValues('.generation-card');
  
  sessionStorage.setItem('energySelections', JSON.stringify({
    consumption,
    generation
  }));
  
  window.location.href = 'energy.html';
});
```

### Data Source
- **Neighbourhood Context**: From `sessionStorage` (set on Output Page)
- **Parameter Images**: `/Content/Images_Layer2_EnergyConsumption/` and `/Content/Images_Layer2_EnergyGeneration/`
- **Energy Data**: `js/data.js`

### State Management
- **Read**: `selectedNeighbourhood` from `sessionStorage`
- **Store**: `energySelections` to `sessionStorage`
- **Format**: JSON object with consumption and generation arrays
- **Persistence**: Maintained for energy breakdown analysis

---

## HTML Structure

### Energy Consumption Section
```html
<div class="parameter-group">
  <div class="parameter-label">Energy</div>
  <div class="consumption-cards">
    <button class="consumption-card" data-category="consumption" data-value="thermal">
      <img src="Content/Images_Layer2_EnergyConsumption/Thermal.png" alt="Thermal Load">
      <span>Thermal Load</span>
    </button>
    <button class="consumption-card" data-category="consumption" data-value="electric">
      <img src="Content/Images_Layer2_EnergyConsumption/Electric.png" alt="Electric">
      <span>Electric</span>
    </button>
  </div>
</div>
```

### Energy Generation Section
```html
<div class="parameter-group">
  <div class="parameter-label">Energy Generation</div>
  <div class="generation-cards">
    <button class="generation-card" data-category="generation" data-value="solar">
      <img src="Content/Images_Layer2_EnergyGeneration/Solar.png" alt="Solar">
      <span>Solar</span>
    </button>
    <button class="generation-card" data-category="generation" data-value="wind">
      <img src="Content/Images_Layer2_EnergyGeneration/Wind.png" alt="Wind">
      <span>Wind</span>
    </button>
    <button class="generation-card" data-category="generation" data-value="geothermal">
      <img src="Content/Images_Layer2_EnergyGeneration/Geothermal.png" alt="Geothermal">
      <span>Geothermal</span>
    </button>
  </div>
</div>
```

### Navigation Buttons
```html
<a id="back-btn" href="output.html" class="back-button">
  <svg><!-- Back arrow icon --></svg>
  Back to Layer 1
</a>

<button id="view-energy-btn" class="submit-btn">View Energy Performance</button>
```

---

## Image Assets

### Energy Images
- **Thermal.png**: Heating/cooling energy visualization ("Thermal Load")
- **Electric.png**: Electrical energy visualization
- **Format**: PNG
- **Style**: Consistent with interface design

### Energy Generation Images
- **Solar.png**: Solar/photovoltaic energy icon
- **Wind.png**: Wind energy icon
- **Geothermal.png**: Geothermal energy icon
- **Format**: PNG
- **Style**: Renewable energy themed

---

## CSS Styling

### Key Classes
- `.consumption-card`: Energy parameter cards
- `.generation-card`: Energy generation parameter cards
- `.consumption-cards`, `.generation-cards`: Card containers
- `.selected`: Selected state styling
- `.parameter-label`: Section headers

### Card Styling
```css
.consumption-card, .generation-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.consumption-card.selected, .generation-card.selected {
  border-color: #EC4899; /* Pink theme */
  background-color: rgba(236, 72, 153, 0.1);
}
```

---

## Validation

### Selection Requirements
- **Optional Validation**: May require at least one selection
- **User Feedback**: Button enabled/disabled based on selections
- **Error Messages**: Display if no selections made (optional)

### Data Validation
```javascript
function validateSelections() {
  const hasEnergy = document.querySelectorAll('.consumption-card.selected').length > 0;
  const hasGeneration = document.querySelectorAll('.generation-card.selected').length > 0;
  
  return hasConsumption || hasGeneration;
}
```

---

## Navigation Context

### Entry Point
- **From**: Output Page (neighbourhood selection)
- **Trigger**: Click on neighbourhood row
- **Context**: Specific neighbourhood selected

### Exit Points
- **Back**: Output Page (select different neighbourhood)
- **Forward**: Energy Breakdown Page (view treemap)
- **Context Preservation**: Neighbourhood and energy selections maintained

---

## Accessibility Features
- **Alt Text**: All images have descriptive alternatives
- **Keyboard Navigation**: Cards accessible via Tab key
- **ARIA Labels**: Buttons properly labeled
- **Focus Indicators**: Clear visual focus states
- **Semantic HTML**: Proper button and section elements

---

## Future Enhancements
- Add parameter descriptions/help text
- Include estimated analysis time
- Show preview of energy data available
- Add "Select All" options for each group
- Enable direct navigation to specific profiles (PV, LPV, EV)
- Save common energy parameter presets
