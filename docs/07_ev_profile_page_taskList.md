# Detailed Task List: Layer 3 EV & V2G Energy Breakdown

## Phase 1 — Data Layer

### Task 1.1 — Add `EV_V2G_DATA` constant to `js/data.js`
- Add a new top-level constant `EV_V2G_DATA` structured as nested objects: one key per neighbourhood (`RC1`, `RC2`, …, `RC6`), each containing two sub-objects: `EV1` and `EV2`.
- Each sub-object holds the following fields derived directly from `NUS_EV.csv`:
  - **Configurations** (global, same for all — but stored per scenario for convenience):
    - `evPenetrationRate` → e.g. `"1.5 EVs / household"` (EV1 only; EV2 uses `"-"`)
    - `dailyEnergyDemand` → e.g. `"15 kWh / EV"` (EV1 only)
    - `chargingEfficiency` → e.g. `"90%"` (EV1 only)
    - `v2gParticipationRate` → e.g. `"50%"` (EV2 only)
    - `batteryEfficiency` → e.g. `"90%"` (EV2 only)
    - `dischargeCapacity` → e.g. `"10 kW / day"` (EV2 only)
  - **Parameters** (neighbourhood-specific):
    - `numHouseholds` → e.g. `24`
    - `totalFloorArea` → e.g. `5280`
  - **Results**:
    - `totalEvEnergyDemand` → kWh/day
    - `storageLoss` → kWh/day
    - `v2gPowerAvailable` → kWh/day (or `null` for EV1)
    - `netEnergyBalance_kWh` → kWh/day
    - `netEnergyBalance_kWh_m2` → kWh/m²-day
    - `systemStatusIndicator` → e.g. `"Grid Stressed - Deficit"`

---

## Phase 2 — HTML Structure

### Task 2.1 — Update `layer3_ev_breakdown.html` header
- Change `<h1>` text to `"Layer 3: EV & V2G Energy Breakdown"`.
- Update `<meta name="description">` to reflect EV & V2G content.
- Add a subtitle `<p>` that dynamically shows scenario mode: *"Showing: EV1 (Charging-Only)"* or *"EV2 (V2G-Enabled)"* based on selections.

### Task 2.2 — Add system status indicator in the header
- Replicate the `energy-indicators-row` pattern from `layer2_energy_breakdown.html`.
- Create a `<div id="ev-status-container" class="energy-status-header">` in the `<header>` that will be populated by JS with the correct status image from `Content/Images_Layer3_Transportation/`.

### Task 2.3 — Replace the current placeholder `<div>` with a 3-column table
- Inside `#visual-content`, replace the existing mockup image placeholder with a proper `<table id="ev-v2g-table">`.
- Table structure matching the provided mockup:
  - **Header row**: Three `<th>` cells — `Configurations (Global Values)`, `Parameters (Neighbourhood-Specific)`, `Results (EV Performance)`.
  - **Body rows**: One `<tr>` per metric row, each with three `<td>` cells populating the specific metrics defined in the mockup.
- Rows marked with `*` in documentation are EV2-only; they should be **hidden** when EV1 is selected.
- Each value `<td>` cell will have a unique `id` for JS to populate.

### Task 2.4 — Update back/next navigation links
- Back button → `layer3_output_mobility.html?neighbourhood=<code>` (preserve neighbourhood in URL).

### Task 2.5 — Link the new JS file
- Add `<script src="js/ev-v2g-breakdown.js"></script>` at the bottom of the body.

---

## Phase 3 — JavaScript Logic

### Task 3.1 — Create `js/ev-v2g-breakdown.js`
- **`getNeighbourhoodFromURL()`**: Reads the `neighbourhood` query param.
- **`getScenarioFromSession()`**: Reads `mobilitySelections` from `sessionStorage` to determine "EV1" or "EV2".
- **`getStatusImage(statusLabel)`**: Maps the status string to the image path.
- **`populateTable(neighbourhoodCode, scenario)`**: Populates the table with data from `js/data.js`.
- **`toggleEV2OnlyRows(scenario)`**: Manages visibility of V2G-specific rows.
- **`renderStatusIndicator(statusLabel)`**: Displays the status indicator image in the header.
- **`initEvV2gBreakdownPage()`**: Main initialization function.

---

## Phase 4 — Styling

### Task 4.1 — Add table styles to `css/styles.css`
- Style `#ev-v2g-table` to match the existing design system.
- Ensure the status indicator image in the header is correctly sized and positioned.

---

## Phase 5 — Verification

### Task 5.1 — Manual test: EV1 scenario
- Confirm the breakdown page shows EV1 data with V2G-only rows hidden.

### Task 5.2 — Manual test: EV2 scenario
- Confirm EV2 data is shown with V2G rows visible.

### Task 5.3 — Multi-neighbourhood spot check
- Confirm parameters and results change between different neighbourhood codes.

### Task 5.4 — Status indicator image check
- Verify the correct status image renders based on the data.
