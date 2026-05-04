# Filter Energy Treemap by Consumption Selection

This feature allows for dynamic filtering of the energy breakdown treemap based on the user's initial parameter selection in the Energy Design Interface.

## Logic Overview

When navigating from the Energy Selection page, the selected consumption types are stored in `sessionStorage`. The Treemap page (`layer1_energy_breakdown.html`) reads these selections and filters the data categories accordingly.

### Filtering Rules

| User Selection | Displayed Categories |
| :--- | :--- |
| **Thermal Load** only | **Heating** and **Cooling** only. |
| **Electric** only | All categories **except** Heating and Cooling. |
| **Both** or **None** | Full breakdown (all 13 categories). |

## Implementation Details

### Data Flow
1. **Selection**: `energy-selection.js` writes the selection state to `sessionStorage` under the key `energySelections`.
2. **Persistence**: `output_energy.js` reads these to display icons in the results table but passes the context via URL and storage.
3. **Filtering**: `energy.js` retrieves `energySelections.consumption` during the `renderTreemap()` process.

### Code Integration in `energy.js`
The filtering is performed before calculating percentages to ensure the treemap layout remains proportionally accurate to the visible subset of data:

```javascript
// Define thermal categories
const THERMAL_CATEGORIES = ["Heating", "Cooling"];

// Filter breakdown based on selection from sessionStorage
let filteredBreakdown = energyData.breakdown;
if (consumption.length === 1 && consumption.includes("thermal")) {
    filteredBreakdown = energyData.breakdown.filter(item => THERMAL_CATEGORIES.includes(item.name));
} else if (consumption.length === 1 && consumption.includes("electric")) {
    filteredBreakdown = energyData.breakdown.filter(item => !THERMAL_CATEGORIES.includes(item.name));
}

// Recalculate total for correct percentage display
const filteredTotal = filteredBreakdown.reduce((sum, item) => sum + item.value, 0);
```

## Maintenance
- **Thermal Categories**: If new thermal end-uses are added to `ENERGY_DATA`, they must be added to the `THERMAL_CATEGORIES` array in `energy.js` to be included in the "Thermal Load" filter.
- **Electric Categories**: The "Electric" selection acts as a complementary filter (showing everything NOT in `THERMAL_CATEGORIES`).
