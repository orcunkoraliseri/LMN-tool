# LPV Profile Page Documentation

## Overview
The LPV Profile Page (`lpv.html`) provides detailed analysis of Landscape-integrated Photovoltaics with urban heat island (UHI) impact assessment for the selected neighbourhood.

**File Path**: `/Interface/lpv.html`  
**Related Files**: 
- JavaScript: `js/lpv.js`, `js/data.js`
- Styles: `css/styles.css`

---

## Purpose
Display landscape-integrated PV analysis with configurable parameters for application location, structure height, and transparency, along with land use efficiency and UHI impact metrics.

---

## Features

### Header Section
- **Title**: "LPV Profile"
- **Energy Indicators Row**:
  - Energy Status indicator
  - LPV Scale (generation capacity display)

### Two-Column Layout

#### Left Column: Inputs and KPIs
**Input Parameters** (toggle button selection):

1. **Application Location**
   - Options: Parking, Walking Lanes, Bus Stops
   - Selection: Single choice toggle

2. **Height of Structure**
   - Options: Pedestrian (2.5m), Vehicle (3.0m), Service (4.5m+)
   - Selection: Single choice toggle

3. **Transparency**
   - Options: 25%, 50%, 75%
   - Selection: Single choice toggle

**Key Performance Indicators**:
- **Land Use Efficiency**: 185 kWh/m²/year
- **UHI: Surface Temperature**: -14°C (25°F)

#### Right Column: Visualizations
- **Heatmap Overlay**: Pedestrian comfort visualization
  - Path: `/Content/Images_LPVProfile/Heatmap Overlay Pedestrian Comfort.png`
  
- **Cross-Section Diagram**: LPV structure details
  - Path: `/Content/Images_LPVProfile/Cross-Section Diagram.png`

### Navigation
- **Back Button**: Returns to PV Profile (Layer 2)
- **Next Button**: "Layer 3: Mobility" - proceeds to EV Profile

---

## Layout and Design

### Page Structure
```
+------------------------------------------+
|              Header                      |
|           "LPV Profile"                  |
|  [Energy Status]  [LPV Scale]            |
+------------------------------------------+
|  [← Back to Layer 2]    [Next: EV →]     |
|                                          |
|  +------------------+------------------+ |
|  | LEFT COLUMN      | RIGHT COLUMN     | |
|  |                  |                  | |
|  | Application Loc. | Heatmap Overlay  | |
|  | [Parking][Walk]  | [Comfort Image]  | |
|  | [Bus Stops]      |                  | |
|  |                  |                  | |
|  | Height Structure |                  | |
|  | [2.5m][3.0m][4m] |                  | |
|  |                  | Cross-Section    | |
|  | Transparency     | [Diagram Image]  | |
|  | [25%][50%][75%]  |                  | |
|  |                  |                  | |
|  | KPIs             |                  | |
|  | Land Efficiency  |                  | |
|  | 185 kWh/m²/year  |                  | |
|  | UHI: -14°C       |                  | |
|  +------------------+------------------+ |
+------------------------------------------+
```

### Visual Design
- **Toggle Buttons**: Pill-shaped buttons for parameter selection
- **Active State**: Highlighted button shows current selection
- **KPI Cards**: Prominent display of efficiency and UHI metrics
- **Images**: Full-width visualizations
- **Responsive**: Stacks vertically on mobile

---

## Input Parameters

### Application Location
- **Options**:
  - **Parking**: PV canopies over parking areas
  - **Walking Lanes**: PV structures over pedestrian paths
  - **Bus Stops**: PV-integrated bus stop shelters
- **Selection Type**: Single choice (radio button behavior)
- **Default**: Parking
- **Impact**: Affects land use efficiency calculation

### Height of Structure
- **Options**:
  - **Pedestrian (2.5m)**: Standard pedestrian clearance
  - **Vehicle (3.0m)**: Standard vehicle clearance
  - **Service (4.5m+)**: Service vehicle clearance
- **Selection Type**: Single choice
- **Default**: Pedestrian (2.5m)
- **Impact**: Affects UHI impact and generation

### Transparency
- **Options**: 25%, 50%, 75%
- **Description**: Percentage of light transmission through PV structure
- **Selection Type**: Single choice
- **Default**: 25%
- **Impact**: Affects comfort, visibility, and generation
- **Trade-off**: Higher transparency = more comfort, less generation

---

## Key Performance Indicators

### Land Use Efficiency
- **Value**: 185 kWh/m²/year
- **Description**: Energy generated per unit land area
- **Unit**: kWh/m²/year
- **Calculation**: Total generation / land area covered
- **Benchmark**: Typical range 150-250 kWh/m²/year
- **Purpose**: Measure space efficiency of LPV deployment

### UHI: Surface Temperature
- **Value**: -14°C (25°F)
- **Description**: Temperature reduction compared to baseline
- **Unit**: Degrees Celsius (and Fahrenheit)
- **Impact**: Negative value indicates cooling effect
- **Benefit**: Mitigation of urban heat island effect
- **Purpose**: Quantify environmental co-benefits

---

## Visualizations

### Heatmap Overlay: Pedestrian Comfort
- **Image**: `/Content/Images_LPVProfile/Heatmap Overlay Pedestrian Comfort.png`
- **Content**: Thermal comfort map under LPV structures
- **Type**: Top-down or isometric view with heat map overlay
- **Purpose**: Visualize temperature distribution and comfort zones
- **Features**:
  - Color gradient (blue = cool, red = hot)
  - LPV structure boundaries
  - Pedestrian pathways

### Cross-Section Diagram
- **Image**: `/Content/Images_LPVProfile/Cross-Section Diagram.png`
- **Content**: Side view of LPV structure
- **Type**: Technical diagram
- **Purpose**: Show structural details and dimensions
- **Features**:
  - PV panel positioning
  - Height measurements
  - Support structure
  - Ground clearance
  - Shadow patterns

---

## User Interaction Flow

### Step-by-Step Journey
1. **Page Load**
   - Display default LPV configuration
   - Show default KPIs
   - Load visualization images

2. **Configure Parameters**
   - User selects application location
   - Adjusts structure height
   - Sets transparency level
   - Each selection updates active button state

3. **Review Performance**
   - Examine land use efficiency
   - Assess UHI impact
   - Compare to baseline/targets

4. **Explore Visualizations**
   - View pedestrian comfort heatmap
   - Analyze cross-section diagram
   - Understand spatial arrangement

5. **Navigation**
   - **Back**: Return to PV Profile
   - **Next**: Proceed to EV Profile (Mobility)

---

## Technical Implementation

### JavaScript Logic (`lpv.js`)

#### Parameter Selection
```javascript
// Toggle button selection
document.querySelectorAll('.lpv-toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    
    // Remove active from siblings
    document.querySelectorAll(`[data-category="${category}"]`)
      .forEach(b => b.classList.remove('active'));
    
    // Add active to clicked
    btn.classList.add('active');
    
    // Update KPIs based on selection
    updateLPVMetrics();
  });
});
```

#### KPI Calculation
```javascript
function updateLPVMetrics() {
  const location = getSelectedValue('application-location');
  const height = getSelectedValue('height-structure');
  const transparency = getSelectedValue('transparency');
  
  // Calculate land use efficiency
  const efficiency = calculateLandUseEfficiency(location, height, transparency);
  
  // Calculate UHI impact
  const uhiImpact = calculateUHIImpact(location, height, transparency);
  
  // Update display
  displayKPIs(efficiency, uhiImpact);
}
```

### Data Source
- **LPV Parameters**: `js/data.js` (neighbourhood-specific)
- **Visualization Images**: Pre-generated, stored in `/Content/Images_LPVProfile/`
- **Calculation Models**: Based on research parameters

---

## HTML Structure

### Parameter Section
```html
<div class="lpv-parameter-group">
  <h3 class="lpv-parameter-label">Application Location</h3>
  <div class="lpv-parameter-buttons">
    <button class="lpv-toggle-btn active" 
            data-category="application-location" 
            data-value="parking">Parking</button>
    <button class="lpv-toggle-btn" 
            data-category="application-location" 
            data-value="walking-lanes">Walking Lanes</button>
    <button class="lpv-toggle-btn" 
            data-category="application-location" 
            data-value="bus-stops">Bus Stops</button>
  </div>
</div>
```

### KPI Section
```html
<div class="lpv-kpi-item">
  <h3 class="lpv-kpi-label">Land Use Efficiency</h3>
  <div class="lpv-kpi-value">185 kWh/m²/year</div>
</div>
<div class="lpv-kpi-item">
  <h3 class="lpv-kpi-label">UHI: Surface Temperature</h3>
  <div class="lpv-kpi-value">-14°C (25°F)</div>
</div>
```

---

## CSS Styling

### Toggle Button Styling
```css
.lpv-toggle-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #E5E7EB;
  background: white;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s;
}

.lpv-toggle-btn.active {
  background: #EC4899;
  color: white;
  border-color: #EC4899;
}

.lpv-toggle-btn:hover:not(.active) {
  border-color: #EC4899;
  background: rgba(236, 72, 153, 0.1);
}
```

### KPI Styling
```css
.lpv-kpi-item {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.lpv-kpi-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: #EC4899;
  margin-top: 0.5rem;
}
```

---

## Calculations

### Land Use Efficiency
```
Land Use Efficiency (kWh/m²/year) = 
  Total LPV Generation (kWh/year) / 
  Land Area Covered (m²)

Factors:
  - PV panel area
  - Solar irradiation
  - Panel efficiency
  - Transparency (reduces generation)
  - Application type (affects area utilization)
```

### UHI Impact
```
UHI Temperature Reduction = 
  Baseline Temperature - LPV Temperature

Factors:
  - Shading effect
  - Structure height
  - Transparency level
  - Albedo change
  - Air circulation
```

---

## Environmental Benefits

### Urban Heat Island Mitigation
- Provides shade to reduce surface temperatures
- Reduces energy consumption for cooling
- Improves pedestrian comfort
- Enhances urban microclimate

### Dual-Purpose Land Use
- Generates renewable energy
- Maintains functional land use (parking, walkways)
- Maximizes space efficiency
- Integrates infrastructure

---

## Accessibility Features
- **Button Labels**: Clear, descriptive text
- **Keyboard Navigation**: All toggle buttons accessible
- **Active State**: Clear visual indicators
- **Alt Text**: Images have descriptive alternatives
- **Focus Management**: Logical tab order

---

## Future Enhancements
- Real-time parameter updates (live KPI changes)
- Interactive heatmap (click for detailed info)
- Seasonal UHI variation analysis
- Cost-benefit analysis integration
- Comparison with traditional solutions
- 3D interactive model viewer
- Export analysis report
