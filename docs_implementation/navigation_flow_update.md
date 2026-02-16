# Implementation Plan - Navigation Flow Update

This plan outlines the changes required to update the navigation flow from `output_energy.html` through the energy and mobility analysis pages, as requested.

## Goal Description
Redesign the navigation flow to allow direct access to specific analysis pages from `output_energy.html` and streamline the progression through Energy, PV, Land-PV, and Mobility layers.

## Proposed Changes

### Navigation Logic Updates

1.  **`output_energy.html` & `js/output_energy.js`**
    *   **Remove**: The "Proceed to Energy Analysis" button.
    *   **Clean Up**: Removing the "Back to Selection" button was not explicitly requested, but usually, headers act as navigation or there is a specific back button. The user asked to "pass to energy.html by clicking on the row". I will keep the "Back to Selection" button for safety unless asked to remove, but I'll focus on the forward navigation.
    *   **New Interaction**: Add click event listeners to the "Energy Consumption" and "Energy Generation" table cells.
        *   Clicking **"Energy Consumption"** cell -> Navigates to `energy.html`.
        *   Clicking **"Energy Generation"** cell -> Navigates to `pv.html`.
    *   **Styling**: Add CSS to indicate these cells are clickable (cursor pointer, hover effect).

2.  **`energy.html`**
    *   **Left Button**: Change text to "Back to Energy Output", link to `output_energy.html`.
    *   **Right Button**: Change text to "Layer 3: Mobility", link to `ev.html`.

3.  **`pv.html`**
    *   **Left Button**: Change text to "Back to Energy Output", link to `output_energy.html`.
    *   **Right Button**: Change text to "Layer 2: Land-PV generation", link to `lpv.html`.

4.  **`lpv.html`**
    *   **Left Button**: Change text to "Back to PV generation", link to `pv.html`.
    *   **Right Button**: Change text to "Layer 3: Mobility", link to `ev.html`.

5.  **`ev.html`**
    *   **Update**: The right-top button is now labeled "Back to Layer 2: Energy Output" and returns to `output_energy.html`.

### File Modifications

#### [MODIFY] [output_energy.html](file:///Users/orcunkoraliseri/Desktop/Interface/output_energy.html)
- Remove the "Proceed to Energy Analysis" button from the header/nav area.

#### [MODIFY] [js/output_energy.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/output_energy.js)
- Update `createResultRow` to add clickable classes/IDs to the Energy Consumption and Generation cells.
- Add event delegation or specific listeners to handle navigation with `neighbourhood` parameters preserved.

#### [MODIFY] [css/styles.css](file:///Users/orcunkoraliseri/Desktop/Interface/css/styles.css)
- Add styles for `.clickable-cell` (e.g., `cursor: pointer`, `transition`, hover effects) to indicate interactivity on the specific table cells.

#### [MODIFY] [energy.html](file:///Users/orcunkoraliseri/Desktop/Interface/energy.html)
- Update header buttons as specified.

#### [MODIFY] [pv.html](file:///Users/orcunkoraliseri/Desktop/Interface/pv.html)
- Update header buttons as specified.

#### [MODIFY] [lpv.html](file:///Users/orcunkoraliseri/Desktop/Interface/lpv.html)
- Update header buttons as specified.

#### [MODIFY] [ev.html](file:///Users/orcunkoraliseri/Desktop/Interface/ev.html) & [js/ev.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/ev.js)
- Update the right-top button to return to "Energy Output".

## Verification Plan

### Automated Browser Verification
- **Scenario**: Validate the full navigation chain.
    1.  Start at `output_energy.html` (with a neighbourhood selected).
    2.  Click **Energy Consumption** cell -> Verify URL is `energy.html` with correct params.
    3.  Click "Layer 3: Mobility" -> Verify URL is `ev.html`.
    4.  Navigate back to `output_energy.html` via the right-top button.
    5.  Click **Energy Generation** cell -> Verify URL is `pv.html`.
    6.  Click "Layer 2: Land-PV generation" -> Verify URL is `lpv.html`.
    7.  Click "Layer 3: Mobility" -> Verify URL is `ev.html`.
    8.  Check all "Back" buttons function as intended.
