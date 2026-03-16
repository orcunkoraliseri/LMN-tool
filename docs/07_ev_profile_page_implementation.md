# Implementation Plan for Layer 3 EV & V2G Energy Breakdown

## Goal Description
Create a new layer 3 EV and V2G energy breakdown page (or modify the existing `layer3_ev_breakdown.html`). The page will display the EV and V2G performance of the selected neighbourhood. The presented scenario will depend on the user's choices made in `layer3_mobility_selection.html`:
- If the user selected `EV`, display the **EV1 (Charging-Only)** metrics.
- If the user selected both `EV` and `V2G Stations`, display the **EV2 (V2G-Enabled)** metrics.

The UI template will feature a 3-column table:
1. **Configurations**: Global values applicable to all neighbourhoods (e.g., EV Penetration Rate, Charging Efficiency).
2. **Parameters**: Specific to each neighbourhood (e.g., Number of Households, Total floor area).
3. **Results**: EV performance results calculated using the formulas from `calculate_ev_scenarios.py` or extracted directly from `Templates/NUS_EV.csv`.

Additionally, the page will present the System Status Indicators using images from `Content/Images_Layer3_Transportation` (Energy Positive, Load Balanced, Grid Stressed).

## User Review Required
> [!IMPORTANT]
> - Should I rename `layer3_ev_breakdown.html` to `layer3_ev_v2g_breakdown.html` or keep the existing filename?
> - Rather than dynamically parsing `NUS_EV.csv` or rewriting the mathematical formulas from `calculate_ev_scenarios.py` in JavaScript, I plan to hardcode the metrics into `js/data.js` as an `EV_V2G_DATA` constant (similar to the existing `PV_GENERATION_DATA`) for simplicity and reliability, as the application seems to follow this pattern. Would you prefer this, or would you prefer a dynamic CSV fetch / Javascript calculation implementation?

## Proposed Changes

### HTML & CSS Updates
#### [MODIFY] layer3_ev_breakdown.html
- Update the page title and header to **Layer 3: EV & V2G Energy Breakdown**.
- Incorporate the dynamic indicator layout (`Energy Positive`, `Grid Stressed`, `Load Balanced`).
- Create a 3-column table container for "Configurations", "Parameters", and "Results".

### JavaScript Updates
#### [MODIFY] js/data.js
- Add a new constant `EV_V2G_DATA` mirroring the output of the Python script / CSV values, allowing easy lookup for each neighborhood's EV1 and EV2 parameters and results. The data structure will include:
  - **Configurations**: EV Penetration Rate, Daily Energy Demand, Charging Efficiency, V2G Participation Rate, Battery Efficiency, Discharge Capacity.
  - **Parameters**: # HHs, Total floor area.
  - **Results**: Total EV Energy Demand, Storage Loss, V2G Power Available, Net Energy Balance (kWh/day), Net Energy Balance (kWh/m2-day), System Status Indicator.

#### [NEW] js/ev-v2g-breakdown.js
- Retrieve user selections from `sessionStorage` (`mobilitySelections.transportation`).
- Read the chosen neighbourhood from the URL parameter.
- Determine whether to show EV1 or EV2 data.
- Dynamically render the table contents based on the selected scenario and neighbourhood.
- Load and display the system status indicator image correctly based on the V2G/EV result.

## Verification Plan
### Automated Tests
- None exist for frontend interactions currently; validation relies on manual testing.

### Manual Verification
1. Open the project in a test server (or locally in the browser).
2. Start from `layer3_mobility_selection.html`, select only `EV`, and navigate to the breakdown page. Verify the metrics match the EV1 (Charging-Only) column from the CSV.
3. Go back, select both `EV` and `V2G Stations`, and navigate to the breakdown page. Verify the metrics match the EV2 (V2G-Enabled) column from the CSV.
4. Test with different neighbourhoods (e.g., `RC1` vs `RC4`) to ensure the neighborhood parameters vary correctly.
5. Verify the correct indicator image appears on the page.
