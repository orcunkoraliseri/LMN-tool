# Energy Treemap Visualization Page

Add a new interactive page to visualize segmented energy demand per neighbourhood using a treemap.

## User Flow

1. User views filtered neighbourhoods on `output.html`
2. User clicks on a neighbourhood's **EUI value** in the Energy column
3. User is redirected to `energy.html?neighbourhood=RC1` (or selected code)
4. Energy page displays a **treemap** showing energy breakdown by end-use category

## Proposed Changes

---

### Data Layer

#### [MODIFY] [data.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/data.js)

Add `ENERGY_DATA` constant parsed from CSV:

```javascript
const ENERGY_DATA = {
  "RC1": {
    total: 65.098,
    breakdown: [
      { name: "Heating", value: 14.653 },
      { name: "Cooling", value: 3.293 },
      { name: "Interior Lighting", value: 5.752 },
      // ... other end-uses
    ]
  },
  // ... other neighbourhoods
};
```

---

### New Energy Page

#### [NEW] [energy.html](file:///Users/orcunkoraliseri/Desktop/Interface/energy.html)

- Header with neighbourhood name and total EUI
- Back button to return to output page
- Treemap container `<div id="treemap-container">`
- Legend showing end-use categories with colors

#### [NEW] [energy.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/energy.js)

- Parse URL parameter to get neighbourhood code
- Fetch energy breakdown from `ENERGY_DATA`
- Render treemap using vanilla JavaScript (no D3 required)
- Each rectangle shows: name, value (kWh/m²-yr), percentage
- Color-coded by energy category

---

### Modified Files

#### [MODIFY] [app.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/app.js)

Make EUI cell clickable:

```javascript
euiCell.style.cursor = 'pointer';
euiCell.addEventListener('click', () => {
  window.location.href = `energy.html?neighbourhood=${neighbourhood.code}`;
});
```

#### [MODIFY] [styles.css](file:///Users/orcunkoraliseri/Desktop/Interface/css/styles.css)

Add treemap styling:

- `.treemap-container` - grid layout
- `.treemap-item` - individual rectangles with hover effects
- Category-specific colors (Heating=red, Cooling=blue, Lighting=yellow, etc.)

---

## Treemap Design

| End-Use Category | Color | Hex Code |
|------------------|-------|----------|
| Heating | Red | `#ef4444` |
| Cooling | Blue | `#3b82f6` |
| Interior Lighting | Yellow | `#eab308` |
| Electric Equipment | Purple | `#8b5cf6` |
| Exterior Lighting | Amber | `#f59e0b` |
| Equipment (Gas) | Orange | `#f97316` |
| Elevators | Indigo | `#6366f1` |
| Water Systems | Cyan | `#06b6d4` |
| Fans | Green | `#22c55e` |
| VAV Fans | Emerald | `#10b981` |
| Pump (Electric) | Teal | `#14b8a6` |
| Heat Rejection | Rose | `#f43f5e` |
| FCU Fans | Lime | `#84cc16` |

**Rectangle size** = proportional to energy value  
**Display** = Name + Value + Percentage (e.g., "Heating: 14.7 kWh/m²-yr (22.5%)")

---

## Verification Plan

### Manual Testing

1. Click on any EUI value in output table → redirects to energy page
2. Verify treemap shows correct neighbourhood name
3. Verify all energy values match CSV data
4. Verify percentages sum to 100%
5. Hover effects and color coding work correctly
6. Back button returns to output page
