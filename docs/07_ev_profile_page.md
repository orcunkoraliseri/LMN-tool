# EV Profile Page Documentation

## Overview
The EV Profile Page (`ev.html`) provides analysis of electric vehicle integration with V2G (Vehicle-to-Grid) functionality, showing impact on peak load and energy demand for the selected neighbourhood.

**File Path**: `/Interface/ev.html`  
**Related Files**: 
- JavaScript: `js/ev.js`, `js/data.js`
- Styles: `css/styles.css`

---

## Purpose
Display electric vehicle integration analysis with configurable parameters for EV adoption, charger types, and charging scenarios, along with peak load impact and PV-to-EV conversion metrics.

---

## Features

### Header Section
- **Title**: "EV Profile"

### Two-Column Layout

#### Left Column: Inputs and KPIs
**Input Parameters** (toggle button selection):

1. **EV Usage Ratio**
   - Options: 0%, 50%, 100%
   - Selection: Single choice toggle
   - Description: Percentage of vehicles that are electric

2. **Charger Type**
   - Options: Slow, Standard, DC Fast
   - Selection: Single choice toggle
   - Description: Type of charging infrastructure

3. **Charging Scenario**
   - Options: Slow, Standard, DC Fast
   - Selection: Single choice toggle
   - Description: Typical charging pattern/speed

**Key Performance Indicators**:
- **Added Peak Load**: +kW
- **PV to EV Conversion Rate**: %
- **Total Demand**: MWh/year

#### Right Column: Visualizations
- **EV Impact Line Plot**: Impact on peak load for different charging scenarios
  - Path: `/Content/Images_EVProfile/EV_impact_LinePlot.png`
  
- **State of Charging Bar Chart**: Charging state distribution
  - Path: `/Content/Images_EVProfile/StateOfCharging_BarChart.png`

### Navigation
- **Back Button**: Returns to LPV Profile (Layer 2)
- **Next Button**: "Layer 4: Green Infrastructure" (disabled/coming soon)

---

## Layout and Design

### Page Structure
```
+------------------------------------------+
|              Header                      |
|            "EV Profile"                  |
+------------------------------------------+
|  [← Back to Layer 2]    [Next: GI →]     |
|                          (disabled)       |
|                                          |
|  +------------------+------------------+ |
|  | LEFT COLUMN      | RIGHT COLUMN     | |
|  |                  |                  | |
|  | EV Usage Ratio   | EV Impact Plot   | |
|  | [0%][50%][100%]  | [Line Chart]     | |
|  |                  |                  | |
|  | Charger Type     |                  | |
|  | [Slow][Std][Fast]|                  | |
|  |                  |                  | |
|  | Charging Scenario| State of Charge  | |
|  | [Slow][Std][Fast]| [Bar Chart]      | |
|  |                  |                  | |
|  | KPIs             |                  | |
|  | Peak: +XXX kW    |                  | |
|  | PV→EV: XX%       |                  | |
|  | Demand: XX MWh   |                  | |
|  +------------------+------------------+ |
+------------------------------------------+
```

### Visual Design
- **Toggle Buttons**: Pill-shaped buttons for parameter selection
- **Active State**: Highlighted button shows current selection
- **KPI Cards**: Prominent display of EV impact metrics
- **Charts**: Full-width visualizations
- **Responsive**: Stacks vertically on mobile

---

## Input Parameters

### EV Usage Ratio
- **Options**: 0%, 50%, 100%
- **Description**: Percentage of neighbourhood vehicles that are electric
- **Selection Type**: Single choice
- **Default**: 0%
- **Impact**: 
  - 0%: No EV charging demand
  - 50%: Moderate EV penetration
  - 100%: Full electrification
- **Purpose**: Model different EV adoption scenarios

### Charger Type
- **Options**:
  - **Slow**: Level 1 (120V, ~1.4 kW)
  - **Standard**: Level 2 (240V, ~7.2 kW)
  - **DC Fast**: Level 3 (480V, ~50+ kW)
- **Selection Type**: Single choice
- **Default**: Slow
- **Impact**: Affects charging power and peak load
- **Trade-offs**:
  - Slow: Lower peak, longer duration
  - Standard: Balanced approach
  - DC Fast: High peak, rapid charging

### Charging Scenario
- **Options**: Slow, Standard, DC Fast
- **Description**: Typical charging behavior pattern
- **Selection Type**: Single choice
- **Default**: Slow
- **Impact**: Affects demand profile and grid integration
- **Scenarios**:
  - Slow: Overnight residential charging
  - Standard: Workplace/public charging
  - DC Fast: Quick top-up/commercial

---

## Key Performance Indicators

### Added Peak Load
- **Unit**: kW (kilowatts)
- **Description**: Increase in neighbourhood peak electrical demand due to EV charging
- **Format**: +XXX kW (positive value indicates added load)
- **Calculation**: Based on number of EVs, charger type, and simultaneity factors
- **Impact**: Grid capacity planning requirement
- **Typical Range**: 0-500 kW for neighbourhood

### PV to EV Conversion Rate
- **Unit**: % (percentage)
- **Description**: Proportion of PV generation used directly for EV charging
- **Format**: XX%
- **Calculation**: (PV energy to EVs / Total PV generation) × 100
- **Optimization Goal**: Maximize this percentage for self-consumption
- **Benefits**: Reduced grid impact, renewable energy use
- **Typical Range**: 20-60%

### Total Demand
- **Unit**: MWh/year (megawatt-hours per year)
- **Description**: Annual electrical energy required for EV charging
- **Format**: XXX MWh/year
- **Calculation**: Number of EVs × average annual consumption per EV
- **Typical EV Consumption**: 3-4 MWh/year per vehicle
- **Comparison**: Shows total energy requirement vs PV generation

---

## Visualizations

### EV Impact Line Plot
- **Image**: `/Content/Images_EVProfile/EV_impact_LinePlot.png`
- **Content**: Daily load profile with and without EV charging
- **Type**: Line chart (24-hour profile)
- **Purpose**: Visualize peak load impact of EV charging
- **Features**:
  - X-axis: Time of day (0-24 hours)
  - Y-axis: Power demand (kW)
  - Multiple lines: Baseline, Slow, Standard, Fast charging
  - Peak identification
- **Key Insights**: When EVs create peak demand, magnitude of impact

### State of Charging Bar Chart
- **Image**: `/Content/Images_EVProfile/StateOfCharging_BarChart.png`
- **Content**: Distribution of EV charging states throughout day
- **Type**: Stacked bar chart
- **Purpose**: Show charging patterns and grid utilization
- **Features**:
  - X-axis: Time of day
  - Y-axis: Number of EVs or % of fleet
  - Categories: Charging, Idle, Discharging (V2G)
  - Color-coded states
- **Key Insights**: Peak charging times, V2G potential

---

## User Interaction Flow

### Step-by-Step Journey
1. **Page Load**
   - Display default EV configuration (0% usage)
   - Show baseline KPIs
   - Load visualization images

2. **Configure EV Scenario**
   - User selects EV usage ratio
   - Chooses charger type
   - Sets charging scenario
   - Each selection updates active button state

3. **Review Impact**
   - Examine added peak load
   - Check PV-to-EV conversion rate
   - Review total annual demand
   - Compare to PV generation capacity

4. **Analyze Visualizations**
   - View daily load impact profile
   - Analyze state of charging distribution
   - Identify peak charging periods
   - Assess V2G opportunities

5. **Navigation**
   - **Back**: Return to LPV Profile
   - **Next**: Layer 4 (currently disabled)

---

## Technical Implementation

### JavaScript Logic (`ev.js`)

#### Parameter Selection
```javascript
// Toggle button selection for all three parameter groups
['usage-ratio', 'charger-type', 'charging-scenario'].forEach(category => {
  document.querySelectorAll(`[data-category="${category}"]`).forEach(btn => {
    btn.addEventListener('click', () => {
      updateSelection(category, btn);
      recalculateEVMetrics();
    });
  });
});
```

#### KPI Calculation
```javascript
function recalculateEVMetrics() {
  const usageRatio = getSelectedValue('usage-ratio');
  const chargerType = getSelectedValue('charger-type');
  const scenario = getSelectedValue('charging-scenario');
  
  // Calculate metrics
  const peakLoad = calculatePeakLoad(usageRatio, chargerType, scenario);
  const pvToEV = calculatePVtoEVRate(usageRatio, scenario);
  const totalDemand = calculateTotalDemand(usageRatio);
  
  // Update display
  updateKPIs(peakLoad, pvToEV, totalDemand);
}
```

#### Calculations
```javascript
function calculatePeakLoad(ratio, chargerType, scenario) {
  const numEVs = totalVehicles * (ratio / 100);
  const chargerPower = getChargerPower(chargerType); // kW
  const simultaneity = getSimultaneityFactor(scenario);
  
  return numEVs * chargerPower * simultaneity;
}

function calculatePVtoEVRate(ratio, scenario) {
  const evDemand = getTotalEVDemand(ratio);
  const pvGeneration = getPVGeneration();
  const alignmentFactor = getTimeAlignmentFactor(scenario);
  
  const directUse = Math.min(evDemand, pvGeneration * alignmentFactor);
  return (directUse / pvGeneration) * 100;
}
```

### Data Source
- **EV Parameters**: `js/data.js` (neighbourhood-specific)
- **Vehicle Count**: Based on neighbourhood density and type
- **PV Data**: Cross-referenced from PV profile
- **Visualization Images**: Pre-generated, stored in `/Content/Images_EVProfile/`

---

## HTML Structure

### Parameter Sections
```html
<div class="ev-parameter-group">
  <h3 class="ev-parameter-label">EV Usage Ratio</h3>
  <div class="ev-parameter-buttons">
    <button class="ev-toggle-btn active" 
            data-category="usage-ratio" 
            data-value="0">0%</button>
    <button class="ev-toggle-btn" 
            data-category="usage-ratio" 
            data-value="50">50%</button>
    <button class="ev-toggle-btn" 
            data-category="usage-ratio" 
            data-value="100">100%</button>
  </div>
</div>
```

### KPI Section
```html
<div class="ev-kpi-item">
  <h3 class="ev-kpi-label">Added Peak Load</h3>
  <div class="ev-kpi-value">+kW</div>
</div>
<div class="ev-kpi-item">
  <h3 class="ev-kpi-label">PV to EV Conversion Rate</h3>
  <div class="ev-kpi-value">%</div>
</div>
<div class="ev-kpi-item">
  <h3 class="ev-kpi-label">Total Demand</h3>
  <div class="ev-kpi-value">MWh/year</div>
</div>
```

---

## CSS Styling

### Toggle Button Styling
```css
.ev-toggle-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #E5E7EB;
  background: white;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s;
}

.ev-toggle-btn.active {
  background: #3B82F6; /* Blue theme for EV */
  color: white;
  border-color: #3B82F6;
}
```

### KPI Styling
```css
.ev-kpi-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: #3B82F6;
  margin-top: 0.5rem;
}
```

---

## V2G (Vehicle-to-Grid) Integration

### Concept
- EVs can discharge power back to grid during peak demand
- Provides grid stabilization services
- Reduces overall peak load
- Monetization opportunity for EV owners

### Implementation
- Shown in State of Charging visualization
- Factored into peak load calculations
- Requires bi-directional chargers
- Scenario-dependent behavior

---

## Calculations and Formulas

### Added Peak Load
```
Added Peak Load (kW) = 
  Number of EVs × 
  Charger Power (kW) × 
  Simultaneity Factor

Where:
  Number of EVs = Total Vehicles × (Usage Ratio / 100)
  Charger Power: Slow=1.4, Standard=7.2, Fast=50 kW
  Simultaneity: 0.3-0.7 (not all charge simultaneously)
```

### PV to EV Conversion
```
PV to EV Rate (%) = 
  (Min(EV Demand, PV × Alignment) / PV Generation) × 100

Where:
  Alignment Factor: Time overlap between PV generation and charging
  Higher for daytime charging (workplace)
  Lower for overnight charging (residential)
```

### Total Annual Demand
```
Total Demand (MWh/year) = 
  Number of EVs × 
  Average Consumption per EV (3.5 MWh/year)
```

---

## Optimization Strategies

### Maximize PV-to-EV Conversion
- Encourage daytime charging
- Smart charging algorithms
- Time-of-use charging schedules

### Minimize Peak Load Impact
- Stagger charging times
- Use slower chargers
- Implement demand response
- Leverage V2G capabilities

---

## Accessibility Features
- **Button Labels**: Clear, descriptive text
- **Keyboard Navigation**: All controls accessible
- **Active State**: Clear visual indicators
- **Alt Text**: Chart images have descriptive alternatives
- **Semantic HTML**: Proper headings and structure

---

## Future Enhancements
- Real-time parameter updates with live charts
- Interactive load profile (click to see hourly details)
- Smart charging optimization scenarios
- Battery storage integration
- Cost analysis (electricity rates, demand charges)
- Carbon impact calculation
- Comparison with fossil fuel vehicles
- Export analysis report
- V2G revenue potential calculator
