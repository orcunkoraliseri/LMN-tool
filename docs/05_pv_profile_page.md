# PV Generation Profile Page Documentation

## Overview
The PV Generation Profile Page (`layer1_pv_breakdown.html`) provides detailed analysis and visualization of solar photovoltaic generation for the selected neighbourhood, including input parameters, KPIs, and visualizations.

**File Path**: `/Interface/layer1_pv_breakdown.html`  
**Related Files**: 
- JavaScript: `js/pv.js`, `js/data.js`
- Styles: `css/styles.css`

---

## Purpose
Display photovoltaic solar generation analysis with configurable input parameters, key performance indicators, and visual representations of solar irradiation and monthly generation profiles.

---

## Features

### Header Section
- **Title**: "PV Generation Profile"
- **Energy Indicators Row**:
  - Energy Status indicator
  - PV Scale (generation capacity display)

### Two-Column Layout

#### Left Column: Inputs and KPIs
**Input Parameters** (displayed as horizontal bars with pink theme):
- **PV Surface**: Roof + Facade
- **PV Efficiency**: 18.65%
- **Tilt Angle**: 45 degree
- **Ground Coverage Ratio**: 60%

**Key Performance Indicators**:
- **Annual Generation**: MWh/year
- **Ratio of Performance (RoP)**: 18.65%

#### Right Column: Visualizations
- **Solar Irradiation 3D Model**
  - Path: `/Content/Images_PVProfile/Solar Irradiation.png`
  - Shows 3D neighborhood model with solar exposure

- **Monthly Solar Generation Chart**
  - Path: `/Content/Images_PVProfile/Monthly Solar Generation.png`
  - Line/bar chart showing monthly generation profile

### Navigation
- **Back Button**: Returns to Energy Breakdown (Layer 2)
- **Next Button**: "Layer 2: Land-PV Generation" - proceeds to LPV Profile

---

## Layout and Design

### Page Structure
```
+------------------------------------------+
|              Header                      |
|      "PV Generation Profile"             |
|  [Energy Status]  [PV Scale]             |
+------------------------------------------+
|  [← Back to Layer 2]    [Next: LPV →]    |
|                                          |
|  +------------------+------------------+ |
|  | LEFT COLUMN      | RIGHT COLUMN     | |
|  |                  |                  | |
|  | Input Parameters | Solar Irradiation| |
|  | +--------------+ | [3D Model Image] | |
|  | | PV Surface:  | |                  | |
|  | | Roof+Facade  | |                  | |
|  | +--------------+ |                  | |
|  | | Efficiency:  | | Monthly Profile  | |
|  | | 18.65%       | | [Chart Image]    | |
|  | +--------------+ |                  | |
|  |                  |                  | |
|  | KPIs             |                  | |
|  | Annual Gen:      |                  | |
|  | XXX MWh/year     |                  | |
|  |                  |                  | |
|  | RoP: 18.65%      |                  | |
|  +------------------+------------------+ |
+------------------------------------------+
```

### Visual Design
- **Two-Column Split**: 40% inputs/KPIs, 60% visualizations
- **Input Bars**: Horizontal bars with label-value format, pink theme
- **KPI Cards**: Large, prominent display of performance metrics
- **Images**: Full-width within right column
- **Responsive**: Stacks vertically on mobile

---

## Input Parameters

### PV Surface
- **Value**: Roof + Facade
- **Description**: Areas where PV panels installed
- **Options**: Roof only, Facade only, Roof + Facade
- **Display**: Pink horizontal bar format

### PV Efficiency
- **Value**: 18.65%
- **Description**: Solar panel conversion efficiency
- **Typical Range**: 15-22%
- **Display**: Percentage value

### Tilt Angle
- **Value**: 45 degree
- **Description**: Panel angle relative to horizontal
- **Typical Range**: 0-90 degrees
- **Optimal**: Depends on latitude (typically 30-45°)
- **Display**: Degree value

### Ground Coverage Ratio
- **Value**: 60%
- **Description**: Percentage of available surface covered by PV
- **Range**: 0-100%
- **Display**: Percentage value

---

## Key Performance Indicators

### Annual Generation
- **Unit**: MWh/year
- **Description**: Total solar energy generated annually
- **Calculation**: Based on surface area, efficiency, irradiation
- **Display**: Large prominent number

### Ratio of Performance (RoP)
- **Value**: 18.65%
- **Description**: Actual vs. theoretical performance ratio
- **Formula**: (Actual Generation / Theoretical Generation) × 100
- **Industry Average**: 15-20%
- **Display**: Percentage value

---

## Visualizations

### Solar Irradiation 3D Model
- **Image**: `/Content/Images_PVProfile/Solar Irradiation.png`
- **Content**: 3D neighborhood model with solar exposure mapping
- **Purpose**: Visualize solar potential across building surfaces
- **Features**:
  - Color-coded irradiation levels
  - 3D perspective view
  - Building shadows and orientations

### Monthly Solar Generation Chart
- **Image**: `/Content/Images_PVProfile/Monthly Solar Generation.png`
- **Content**: Monthly generation profile (12 months)
- **Type**: Bar or line chart
- **Purpose**: Show seasonal variation in generation
- **Features**:
  - X-axis: Months (Jan-Dec)
  - Y-axis: Generation (kWh or MWh)
  - Peak identification (summer months)

---

## User Interaction Flow

### Step-by-Step Journey
1. **Page Load**
   - Display PV input parameters
   - Show calculated KPIs
   - Load visualization images
   - Display energy status

2. **Review Parameters**
   - User reviews PV configuration
   - Examines efficiency and coverage
   - Understands system specifications

3. **Analyze Performance**
   - Review annual generation KPI
   - Check RoP against benchmarks
   - Compare to energy consumption

4. **Explore Visualizations**
   - View 3D solar irradiation model
   - Analyze monthly generation patterns
   - Identify seasonal variations

5. **Navigation**
   - **Back**: Return to Energy Breakdown
   - **Next**: Proceed to LPV Profile

---

## Technical Implementation

### JavaScript Logic (`pv.js`)

#### Load Data
```javascript
// Load PV data for selected neighbourhood
const nuCode = sessionStorage.getItem('selectedNeighbourhood');
const pvData = getPVData(nuCode);

// Display parameters
displayPVParameters(pvData.parameters);
displayKPIs(pvData.kpis);
```

#### Display Functions
```javascript
function displayPVParameters(params) {
  document.querySelector('[data-param="surface"]').textContent = params.surface;
  document.querySelector('[data-param="efficiency"]').textContent = params.efficiency;
  document.querySelector('[data-param="tilt"]').textContent = params.tiltAngle;
  document.querySelector('[data-param="coverage"]').textContent = params.coverage;
}

function displayKPIs(kpis) {
  document.querySelector('[data-kpi="annual"]').textContent = 
    `${kpis.annualGeneration} MWh/year`;
  document.querySelector('[data-kpi="rop"]').textContent = 
    `${kpis.rop}%`;
}
```

### Data Source
- **PV Parameters**: `js/data.js` (neighbourhood-specific)
- **Visualization Images**: Pre-generated, stored in `/Content/Images_PVProfile/`
- **KPI Calculations**: Based on neighbourhood characteristics

---

## HTML Structure

### Input Parameters Section
```html
<div class="pv-inputs-section">
  <div class="pv-input-bar">
    <span class="pv-input-label">PV Surface:</span>
    <span class="pv-input-value">Roof + Facade</span>
  </div>
  <div class="pv-input-bar">
    <span class="pv-input-label">PV Efficiency:</span>
    <span class="pv-input-value">18.65%</span>
  </div>
  <!-- More input bars -->
</div>
```

### KPIs Section
```html
<div class="pv-kpis-section">
  <div class="pv-kpi-item">
    <h3 class="pv-kpi-label">Annual Generation</h3>
    <div class="pv-kpi-value">MWh/year</div>
  </div>
  <div class="pv-kpi-item">
    <h3 class="pv-kpi-label">Ratio of Performance (RoP)</h3>
    <div class="pv-kpi-value">18.65%</div>
  </div>
</div>
```

### Visualization Section
```html
<div class="pv-right-column">
  <div class="pv-chart-container">
    <img src="Content/Images_PVProfile/Solar Irradiation.png" 
         alt="Solar Irradiation 3D Model" 
         class="pv-chart-image">
  </div>
  <div class="pv-chart-container">
    <img src="Content/Images_PVProfile/Monthly Solar Generation.png" 
         alt="Monthly Profile of Solar Generation" 
         class="pv-chart-image">
  </div>
</div>
```

---

## CSS Styling

### Input Bar Styling
```css
.pv-input-bar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: linear-gradient(90deg, 
    rgba(236, 72, 153, 0.1) 0%, 
    rgba(236, 72, 153, 0.05) 100%);
  border-left: 4px solid #EC4899;
  margin-bottom: 0.75rem;
  border-radius: 4px;
}

.pv-input-label {
  font-weight: 600;
  color: #374151;
}

.pv-input-value {
  font-weight: 700;
  color: #111827;
}
```

### KPI Styling
```css
.pv-kpi-item {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.pv-kpi-value {
  font-size: 2rem;
  font-weight: 700;
  color: #EC4899;
  margin-top: 0.5rem;
}
```

---

## Calculations

### Annual Generation Formula
```
Annual Generation (MWh/year) = 
  PV Surface Area (m²) × 
  Solar Irradiation (kWh/m²/year) × 
  PV Efficiency (%) × 
  Performance Ratio (%)
```

### Ratio of Performance
```
RoP (%) = 
  (Actual Annual Generation / Theoretical Generation) × 100

Where:
  Theoretical = Surface × Irradiation × Efficiency
  Actual = Measured/simulated output
```

---

## Image Assets

### Solar Irradiation Model
- **File**: `Solar Irradiation.png`
- **Type**: 3D rendered visualization
- **Content**: Neighborhood with solar heat map
- **Resolution**: High-resolution PNG
- **Purpose**: Show spatial distribution of solar potential

### Monthly Generation Chart
- **File**: `Monthly Solar Generation.png`
- **Type**: Bar/line chart
- **X-Axis**: 12 months
- **Y-Axis**: Energy generation
- **Purpose**: Temporal analysis of generation

---

## Accessibility Features
- **Alt Text**: Descriptive alternatives for all images
- **Semantic HTML**: Proper headings and sections
- **Color Contrast**: Meets WCAG standards
- **Responsive Images**: Scale appropriately on all devices

---

## Future Enhancements
- Interactive parameter adjustment
- Real-time KPI recalculation
- Comparison with other neighbourhoods
- Weather data integration
- Export report functionality
- Download charts as images
- Seasonal analysis breakdown
