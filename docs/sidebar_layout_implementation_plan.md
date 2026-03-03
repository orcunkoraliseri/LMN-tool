# Layout Update: Sidebar + Content Refactoring

## Background

The current Interface app uses a linear multi-page navigation:

```
index.html → output.html → energy-selection.html → output_energy.html → energy.html / pv.html → lpv.html → ev.html
```

The [PDF mockup](file:///Users/orcunkoraliseri/Desktop/Interface/Mockup/layout.pdf) proposes a new layout starting from **page 3** (`energy-selection.html`) onward:

````carousel
![Page 3: Left sidebar with Layer 0 features + right area for Layer 1 selection](/Users/orcunkoraliseri/.gemini/antigravity/brain/20365bcb-3056-4dad-97ff-4010804dc0c0/pdf_page_3_final_1772547771759.png)
<!-- slide -->
![Page 4: Sidebar splits into past features + new additions; right shows visuals](/Users/orcunkoraliseri/.gemini/antigravity/brain/20365bcb-3056-4dad-97ff-4010804dc0c0/pdf_page_4_final_1772547801294.png)
<!-- slide -->
![Page 5: Cumulative sidebar (Layer 0+1) + Layer 2 selection on right](/Users/orcunkoraliseri/.gemini/antigravity/brain/20365bcb-3056-4dad-97ff-4010804dc0c0/pdf_page_5_final_1772547812108.png)
<!-- slide -->
![Page 6: Cumulative sidebar + Layer 2 added features + visuals on right](/Users/orcunkoraliseri/.gemini/antigravity/brain/20365bcb-3056-4dad-97ff-4010804dc0c0/pdf_page_6_final_1772547835223.png)
````

### Key Layout Pattern

| Page Type | Left Sidebar | Right Content |
|-----------|-------------|---------------|
| **Selection page** | Cumulative past selections (single purple block) | Current layer's selection parameters |
| **Results/Visual page** | Past selections (purple) + New additions (pink) | Visuals/charts for the current layer |

## User Review Required

> [!IMPORTANT]
> **Pages 1 & 2 stay as-is** (`index.html`, `output.html`) — no changes per your instruction.

> [!IMPORTANT]
> **`output_energy.html` will no longer be a standalone page.** Its content (the table row showing Energy + Energy Generation selections) will be absorbed into the sidebar on the visuals pages. The file itself can either be deleted or kept as a redirect. Please confirm your preference.

> [!WARNING]
> **Navigation flow change:** Currently, clicking "Energy" on `output_energy.html` navigates to `energy.html`, and clicking "Energy Generation" navigates to `pv.html`. In the new layout, both visuals will appear on the **same page** (right side) when their sidebar items are clicked. This means `energy.html` and `pv.html` will each become self-contained pages with the sidebar — they will no longer be accessed from `output_energy.html`. Please confirm this interpretation matches your intent.

## Proposed Layouts

### Page 1 — `index.html` (no change)
```
┌──────────────────────────────────────────────────┐
│                    HEADER                        │
├──────────────────────────────────────────────────┤
│                                                  │
│          Layer 0 Selection Parameters            │
│       (Function, Context, Density, Layout)       │
│                                                  │
│              [ View Neighbourhoods ]             │
└──────────────────────────────────────────────────┘
```

### Page 2 — `output.html` (no change)
```
┌──────────────────────────────────────────────────┐
│                    HEADER                        │
├──────────────────────────────────────────────────┤
│  Neighbourhood 1  │  Neighbourhood  │  Buildings │
│  Neighbourhood 2  │  ...            │  ...       │
│  Neighbourhood 3  │  ...            │  ...       │
└──────────────────────────────────────────────────┘
```

### Page 3 — `energy-selection.html` (selection mode)
```
┌──────────────────────────────────────────────────┐
│                    HEADER                        │
├────────────┬─────────────────────────────────────┤
│            │                                     │
│  Selected  │                                     │
│  Neighbour │   Layer 1 Selection Parameters      │
│  Features  │   (Energy + Energy Generation)      │
│  (Layer 0) │                                     │
│            │        [ View Energy Perf. ]        │
│            │                                     │
└────────────┴─────────────────────────────────────┘
```

### Page 3b — `energy-selection.html` (after submit / results mode)
```
┌──────────────────────────────────────────────────┐
│                    HEADER                        │
├────────────┬─────────────────────────────────────┤
│  Selected  │                                     │
│  Neighbour │   ┌─────────┐  ┌─────────────────┐ │
│  Features  │   │ Energy  │  │Energy Generation│ │
│  (Layer 0) │   │ (click) │  │    (click)      │ │
│ ─ ─ ─ ─ ─ │   └─────────┘  └─────────────────┘ │
│  Layer 1   │                                     │
│  added:    │   Visuals appear here when          │
│  • Energy  │   sidebar item is clicked           │
│  • Gen.    │                                     │
└────────────┴─────────────────────────────────────┘
```

### Page 4a — `energy.html` (Energy visuals)
```
┌──────────────────────────────────────────────────┐
│                    HEADER                        │
├────────────┬─────────────────────────────────────┤
│  Layer 0   │                                     │
│  features  │         Treemap + Legend             │
│ ─ ─ ─ ─ ─ │      (energy breakdown chart)        │
│  Layer 1:  │                                     │
│ ▸ Energy ◂ │                                     │
│   Gen.     │                                     │
└────────────┴─────────────────────────────────────┘
```

### Page 4b — `pv.html` (PV Generation visuals)
```
┌──────────────────────────────────────────────────┐
│                    HEADER                        │
├────────────┬─────────────────────────────────────┤
│  Layer 0   │  Inputs/KPIs  │  Solar Irradiation │
│  features  │  • PV Surface │  Monthly Gen Chart │
│ ─ ─ ─ ─ ─ │  • Efficiency  │                    │
│  Layer 1:  │  • Tilt Angle  │                    │
│   Energy   │  • GCR         │                    │
│ ▸ Gen.   ◂ │               │                    │
└────────────┴───────────────┴────────────────────┘
```

### Page 5 — `lpv.html` (LPV selection + visuals)
```
┌──────────────────────────────────────────────────┐
│                    HEADER                        │
├────────────┬─────────────────────────────────────┤
│  Layer 0   │  Inputs/KPIs  │  Heatmap           │
│  +         │  • Location   │  Cross-Section     │
│  Layer 1   │  • Height     │  Diagram           │
│  features  │  • Transp.    │                    │
│  (purple)  │               │                    │
└────────────┴───────────────┴────────────────────┘
```

### Page 6 — `ev.html` (EV selection + visuals)
```
┌──────────────────────────────────────────────────┐
│                    HEADER                        │
├────────────┬─────────────────────────────────────┤
│  Layer 0   │  Inputs/KPIs    │  EV Impact Chart │
│  +         │  • Usage Ratio  │  State of        │
│  Layer 1   │  • Charger Type │  Charging Chart  │
│  (purple)  │  • Scenario     │                  │
│ ─ ─ ─ ─ ─ │                 │                  │
│  Layer 2   │                 │                  │
│  added     │                 │                  │
│  (pink)    │                 │                  │
└────────────┴─────────────────┴──────────────────┘
```

---

## Proposed Changes

### Shared Sidebar Component

A new reusable JavaScript module that dynamically builds the left sidebar by reading cumulative state from `sessionStorage`.

#### [NEW] [sidebar.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/sidebar.js)

- **`buildSidebar(currentLayer, mode)`** — Generates the sidebar HTML
  - `currentLayer`: `"energy-selection"` | `"energy"` | `"pv"` | `"lpv"` | `"ev"`
  - `mode`: `"selection"` (single cumulative block) | `"visuals"` (cumulative + new additions block)
- Reads from `sessionStorage`:
  - `selectedNeighbourhood` — the neighbourhood code + data from Layer 0/1
  - `energySelections` — consumption & generation choices from Layer 1 (energy-selection page)
- **Sidebar content structure:**
  - **Layer 0 section:** Concept image, neighbourhood image, properties (context, usage, layout, density), buildings
  - **Layer 1 section** (when available): Energy type + Energy Generation selections
  - **Layer 2 section** (when available): EV / LPV parameters
  - On **visuals pages**, the newly-added features appear in a separate pink/highlighted block at the bottom of the sidebar
- Each sidebar item (Energy, Energy Generation) will be **clickable** to load corresponding visuals in the right panel

---

### CSS Updates

#### [MODIFY] [styles.css](file:///Users/orcunkoraliseri/Desktop/Interface/css/styles.css)

Add a new section for the sidebar layout system:

- **`.sidebar-layout`** — Flexbox container (`display: flex; min-height: calc(100vh - header-height)`)
  - **`.sidebar`** — Fixed-width left column (~300px), scrollable, light purple background (`rgba(196, 181, 253, 0.15)`)
    - **`.sidebar-section`** — A group of related items (Layer 0, Layer 1, etc.)
    - **`.sidebar-section--new`** — Pink/highlighted variant for newly-added features
    - **`.sidebar-item`** — Individual item with thumbnail + label
    - **`.sidebar-item--clickable`** — Hover effect + cursor pointer for items that load visuals
    - **`.sidebar-item--active`** — Highlighted state showing which visual is currently displayed
  - **`.main-content`** — Flexible right column (`flex: 1`) for selection forms or visual content
- Responsive behavior: sidebar collapses to a horizontal strip on narrow screens

---

### Page-by-Page Changes

#### [MODIFY] [energy-selection.html](file:///Users/orcunkoraliseri/Desktop/Interface/energy-selection.html)

**Corresponds to PDF Page 3** — Selection page with sidebar

Current: Full-width energy/generation selection form
New: Two-column layout
- **Left sidebar:** "Selected Neighbourhood Features (Layer 0)" — shows concept, neighbourhood, properties, buildings from `output.html` data
- **Right content:** Current energy + generation selection cards (unchanged)
- **Post-submit behavior change**: Instead of navigating to `output_energy.html`, the page transitions to a "results view" where:
  - The sidebar updates to show Layer 0 features + Layer 1 additions (Energy, Energy Generation)
  - The right panel shows clickable cards that load `energy.html` or `pv.html` content inline

HTML changes:
- Wrap `<main>` content in `.sidebar-layout` div
- Add `<aside id="sidebar">` placeholder (populated by `sidebar.js`)
- Add `<div id="visual-content">` for inline visuals display

#### [MODIFY] [energy-selection.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/energy-selection.js)

- Import/use `buildSidebar()` in `initEnergySelectionPage()`
- Modify `setupSubmitButton()`: instead of navigating to `output_energy.html`, switch the page to "results mode":
  - Update sidebar to show new additions
  - Replace the selection cards with two clickable cards: "Energy" and "Energy Generation"
  - Clicking "Energy" loads the treemap visualization (from `energy.js`) in the right panel
  - Clicking "Energy Generation" loads the PV profile (from `pv.js`) in the right panel

---

#### [MODIFY] [energy.html](file:///Users/orcunkoraliseri/Desktop/Interface/energy.html)

**Corresponds to PDF Page 4** — Visuals page with split sidebar

Current: Full-width treemap with nav buttons
New: Two-column layout
- **Left sidebar:** Layer 0 features (purple) + Layer 1 additions: Energy (pink, with active highlight)
- **Right content:** Treemap visualization + legend (from current page, unchanged)
- Navigation button updated: "Next" goes to `pv.html` (or stays in the same page context)

#### [MODIFY] [pv.html](file:///Users/orcunkoraliseri/Desktop/Interface/pv.html)

Current: Full-width PV profile with left/right column layout
New: Three-column effect — sidebar + existing two-column PV layout
- **Left sidebar:** Layer 0 features + Layer 1 additions: Energy Generation (highlighted)
- **Right content:** Current PV inputs/KPIs + charts layout (unchanged)
- The header energy indicators (Energy Status + PV Scale) move into the right content area

#### [MODIFY] [lpv.html](file:///Users/orcunkoraliseri/Desktop/Interface/lpv.html)

**Corresponds to PDF Page 5/6** — For Layer 2

Current: Full-width LPV profile
New: Two-column layout
- **Left sidebar:** Cumulative Layer 0 + Layer 1 features (purple)
- **Right content:** Current LPV inputs/KPIs + charts (unchanged)

#### [MODIFY] [ev.html](file:///Users/orcunkoraliseri/Desktop/Interface/ev.html)

Current: Full-width EV profile
New: Two-column layout  
- **Left sidebar:** Cumulative Layer 0 + Layer 1 features (purple) + Layer 2 additions (EV params, pink)
- **Right content:** Current EV inputs/KPIs + charts (unchanged)

---

## Navigation Updates

#### [MODIFY] [app.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/app.js)

- In `setupLayer2Button()` and `createResultRow()`: ensure the selected neighbourhood full data object is saved to `sessionStorage` (not just the code) so the sidebar can display it
- Store `selectedNeighbourhood` object containing: code, concept, image, properties, buildings

#### [MODIFY] [output_energy.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/output_energy.js)

- This file's rendering logic will be incorporated into `sidebar.js` 
- The file may be deprecated or kept as a minimal redirect

#### [MODIFY] [pv.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/pv.js)

- Add call to `buildSidebar()` in `initPVPage()`
- Update navigation hrefs to maintain sidebar context

#### [MODIFY] [energy.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/energy.js)

- Add call to `buildSidebar()` in the DOMContentLoaded handler
- Update navigation hrefs  

#### [MODIFY] [lpv.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/lpv.js)

- Add call to `buildSidebar()` in `initLPVPage()`
- Update navigation hrefs

#### [MODIFY] [ev.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/ev.js)

- Add call to `buildSidebar()` in `initEVPage()`
- Update navigation hrefs

---

## Verification Plan

### Browser Testing

Each page will be opened in-browser and visually verified:

1. **`index.html`** → confirm no changes, still works as before
2. **`output.html`** → confirm no changes, neighbourhood data is now persisted to `sessionStorage`
3. **`energy-selection.html`** → verify:
   - Left sidebar appears with Layer 0 neighbourhood features
   - Right side shows energy/generation selection cards
   - After clicking "View Energy Performance", sidebar updates with new additions
   - Clicking "Energy" in sidebar loads treemap on right
   - Clicking "Energy Generation" loads PV profile on right
4. **`energy.html`** → verify sidebar shows Layer 0 + Energy highlighted
5. **`pv.html`** → verify sidebar shows Layer 0 + Energy Generation highlighted
6. **`lpv.html`** → verify sidebar shows cumulative Layer 0 + Layer 1
7. **`ev.html`** → verify sidebar shows cumulative + Layer 2 additions

### Manual Verification

- Navigate through the complete flow: `index.html` → `output.html` → `energy-selection.html` → energy/pv views → `lpv.html` → `ev.html`
- Verify all `sessionStorage` data persists correctly between pages
- Verify back navigation works and preserves selections
- Test with different neighbourhood selections to ensure dynamic data renders correctly
