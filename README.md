# LMN Tool — Neighbourhood Design Interface

A web-based decision-support tool for early-stage design of **positive-energy district (PED) neighbourhoods**. Stakeholders configure urban parameters layer by layer — from spatial layout to energy, mobility, and green infrastructure — progressively building a holistic neighbourhood profile.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Design Philosophy](#design-philosophy)
- [User Flow](#user-flow)
- [Layer Descriptions](#layer-descriptions)
  - [Layer 0 — Entry Point](#layer-0--entry-point)
  - [Layer 1 — Neighbourhood Selection](#layer-1--neighbourhood-selection)
  - [Layer 2 — Energy](#layer-2--energy)
  - [Layer 3 — Mobility](#layer-3--mobility)
  - [Layer 4 — Green Infrastructure](#layer-4--green-infrastructure)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [License](#license)

---

## Project Overview

The LMN Tool supports the **Simplistic Modular Holistic (SMH)** methodology for positive-energy district design. Rather than requiring detailed simulation inputs upfront, it allows architects, planners, and researchers to explore compatible neighbourhood configurations by filtering across four thematic layers.

Each layer adds a new set of systems on top of the previous, so the neighbourhood profile grows in complexity and completeness as the user progresses — from a blank canvas to a fully specified, energy-balanced urban unit.

Cross-sectoral systems covered across the layers include:

| System Domain         | Technologies                                                                 |
|-----------------------|------------------------------------------------------------------------------|
| **Energy Supply**     | PV on Roof/Facade, PV-T, STC, Wind, Geothermal, Biomass                    |
| **Energy Demand**     | Heat Pump (COP 4), Ideal Loads (COP 3), Appliances & Equipment              |
| **Mobility**          | EV, EV Public Transport, EV Charging Stations, V2G, Bicycle, Pedestrian     |
| **Green Systems**     | Green Roofs, Vertical Greening, Linear Greenery, Green Spaces                |
| **Urban Agriculture** | Roof Gardens, Food Gardens                                                   |
| **Energy-Integrated GI** | PV-Green Roof Modules, Landscape PV (LPV)                               |

---

## Design Philosophy

The tool is built around three core principles:

1. **Modularity** — Each layer is self-contained. Users can revisit and revise selections without losing context from other layers.
2. **Progressive Disclosure** — Complexity is introduced gradually. Layer 0 starts with a single intent choice; Layer 4 concludes with a fully integrated urban energy profile.
3. **Persistent Sidebar** — As the user advances through layers, a persistent sidebar accumulates all previously selected parameters, giving continuous visibility into the developing neighbourhood profile without navigating back.

---

## User Flow

The tool is navigated sequentially. Each layer has a **selection screen** (where parameters are chosen) and an **output/results screen** (where matched neighbourhoods or performance results are displayed). Breakdown pages can be accessed from the output screens for deeper analysis.

```
layer0_initial.html
        │
        │  User selects "New Neighborhood" → clicks "Get Started"
        ▼
layer1_NUs_selection.html   ← Layer 1 Selection
        │
        │  User picks Land Use, Context, Density, Layout, Envelope → "View Neighbourhoods"
        ▼
layer1_output.html          ← Layer 1 Results (matched neighbourhood cards with 3D views)
        │
        │  User selects a neighbourhood → proceeds to Layer 2
        ▼
layer2_energy_selection.html   ← Layer 2 Selection
        │
        │  User picks Load, Energy Systems, Energy Generation → "View Energy Performance"
        ▼
layer2_output_energy.html      ← Layer 2 Results (energy footprint added to profile)
        │   ├─► layer2_energy_breakdown.html  (Energy Demand Treemap)
        │   └─► layer2_pv_breakdown.html      (PV Generation Profile)
        │
        │  User proceeds to Layer 3
        ▼
layer3_mobility_selection.html  ← Layer 3 Selection
        │
        │  User picks Transportation, Mobility options → "View Mobility Performance"
        ▼
layer3_ev_v2g_mobility_output.html  ← Layer 3 Results (mobility profile added to sidebar)
        │   └─► layer3_ev_breakdown.html  (EV & V2G Breakdown)
        │
        │  User proceeds to Layer 4
        ▼
layer4_green_selection.html    ← Layer 4 Selection
        │
        │  User picks Infrastructure, Urban Agriculture, Energy-Integrated GI → "View Green Performance"
        ▼
layer4_output_selection.html   ← Layer 4 Results (complete neighbourhood profile)
        │   └─► layer4_lpv_breakdown.html  (Landscape PV Profile)
        │
        ▼
   [ Complete PED Profile ]
```

> **Note:** A `3dviewer.html` is also available for viewing 3D neighbourhood models directly.

---

## Layer Descriptions

### Layer 0 — Entry Point

**File:** `layer0_initial.html` / `index.html`

The entry point of the tool. Users are presented with a single intent question:

> *"What do you have in mind?"*

**Options:**
- **Existing Neighbourhood** — (placeholder; currently routes only for "New")
- **New Neighbourhood** — Proceeds to Layer 1

Clicking **"Get Started"** after selecting "New Neighbourhood" navigates the user to the Layer 1 selection screen.

---

### Layer 1 — Neighbourhood Selection

**Files:** `layer1_NUs_selection.html` → `layer1_output.html`

The foundation layer. The user defines the **spatial and typological character** of the neighbourhood by selecting from five parameter categories:

| Parameter    | Options                                              |
|--------------|------------------------------------------------------|
| **Land Use** | Residential, Commercial, Mixed-Use, Industrial       |
| **Context**  | Urban, Suburban, Rural                               |
| **Density**  | High, Medium, Low                                    |
| **Layout**   | Grid, Curvilinear, Superblock                        |
| **Envelope** | Standard Construction, High-Performance Construction |

**How it works:**  
Selections are stored in `sessionStorage` and passed to `app.js`, which filters the neighbourhood database (`data.js`) to return only the configurations matching the chosen combination. Matched neighbourhoods are displayed as interactive cards on the output screen, each showing:
- A 3D neighbourhood image
- Key physical properties (area, number of buildings, building mix, etc.)
- A building composition breakdown

The user selects a neighbourhood from the results to carry it forward into Layer 2.

---

### Layer 2 — Energy

**Files:** `layer2_energy_selection.html` → `layer2_output_energy.html`

**Breakdown Pages:** `layer2_energy_breakdown.html`, `layer2_pv_breakdown.html`

The energy layer overlays **demand-side systems** and **generation technologies** onto the selected neighbourhood. The sidebar from this point forward persistently tracks the Layer 1 neighbourhood selection.

**Selection parameters:**

| Category             | Options                                                                           |
|----------------------|-----------------------------------------------------------------------------------|
| **Load**             | Thermal Load                                                                      |
| **Energy Systems**   | Heat Pump (COP 4), Ideal Loads (COP 3), Appliances & Equipment, Other (TBA)      |
| **Energy Generation**| PV on Roof, PV on Facade, PV-T on Roof, PV-T on Facade, STC on Roof, STC on Facade, Biomass, Wind, Geothermal, Other (TBA) |

**Output:**  
The results page displays the neighbourhood's energy footprint — combining demand and generation profiles. From the sidebar or output table, users can drill into:

- **Energy Demand Treemap** (`layer2_energy_breakdown.html`) — Visualises the breakdown of thermal, electrical, and equipment loads as an interactive treemap rendered via `energy.js`.
- **PV Generation Profile** (`layer2_pv_breakdown.html`) — Shows hourly/monthly PV output curves and generation capacity metrics, powered by `pv.js`.

---

### Layer 3 — Mobility

**Files:** `layer3_mobility_selection.html` → `layer3_ev_v2g_mobility_output.html`

**Breakdown Page:** `layer3_ev_breakdown.html`

The mobility layer adds **electric mobility infrastructure** and **active transport design** to the neighbourhood profile. The sidebar now shows both Layer 1 (spatial) and Layer 2 (energy) selections.

**Selection parameters:**

| Category           | Options                                                    |
|--------------------|------------------------------------------------------------|
| **Transportation** | EV, EV Public Transport, EV Charging Stations, V2G Stations |
| **Mobility**       | Bicycle Infrastructure, Pedestrian-Oriented Design         |

**Output:**  
Results confirm which mobility systems have been integrated. The sidebar aggregates all selections from Layers 1–3.

From the sidebar or output, users can access:

- **EV & V2G Breakdown** (`layer3_ev_breakdown.html`) — Detailed breakdown of electric vehicle demand, V2G grid interaction capacity, and charging station sizing, driven by `ev-v2g-breakdown.js` and CSV reference data from `Templates/NUS_EV.csv`.

---

### Layer 4 — Green Infrastructure

**Files:** `layer4_green_selection.html` → `layer4_output_selection.html`

**Breakdown Page:** `layer4_lpv_breakdown.html`

The final layer integrates **green systems** and **biophilic/agricultural elements** into the neighbourhood. This completes the holistic PED profile. The sidebar now reflects the full stack of selections from Layers 1 through 4.

**Selection parameters:**

| Category                  | Options                                                          |
|---------------------------|------------------------------------------------------------------|
| **Infrastructure**        | Green Roofs, Vertical Greening Systems, Linear Greenery, Green Spaces |
| **Urban Agriculture**     | Roof Gardens, Food Gardens                                       |
| **Energy-Integrated GI**  | PV-Green Roof Integrated Modules, Landscape PV (LPV)            |

**Output:**  
The final output page presents the complete neighbourhood profile with all four layers aggregated in the persistent sidebar. Users can explore:

- **Landscape PV Profile** (`layer4_lpv_breakdown.html`) — Displays the LPV (Land-integrated Photovoltaics) performance analysis — area coverage, annual yield, and integration maps — powered by `lpv.js`.

---

## Project Structure

```text
LMN-tool-main/
│
├── index.html                           ─ Alias for Layer 0 entry
├── layer0_initial.html                  ─ Layer 0: Entry Point
│
├── layer1_NUs_selection.html            ─ Layer 1: Neighbourhood Selection
├── layer1_output.html                   ─ Layer 1: Matched Neighbourhood Results
│
├── layer2_energy_selection.html         ─ Layer 2: Energy Selection
├── layer2_output_energy.html            ─ Layer 2: Energy Performance Results
├── layer2_energy_breakdown.html         ─ Layer 2: Energy Demand Treemap
├── layer2_pv_breakdown.html             ─ Layer 2: PV Generation Profile
│
├── layer3_mobility_selection.html       ─ Layer 3: Mobility Selection
├── layer3_ev_v2g_mobility_output.html   ─ Layer 3: Mobility Performance Results
├── layer3_ev_breakdown.html             ─ Layer 3: EV & V2G Breakdown
│
├── layer4_green_selection.html          ─ Layer 4: Green Infrastructure Selection
├── layer4_output_selection.html         ─ Layer 4: Full Profile Results
├── layer4_lpv_breakdown.html            ─ Layer 4: Landscape PV Profile
│
├── 3dviewer.html                        ─ Standalone 3D Neighbourhood Viewer
│
├── css/
│   └── styles.css                       ─ Shared design system and component styles
│
├── js/
│   ├── data.js                          ─ Neighbourhood database and metrics store
│   ├── app.js                           ─ Layer 1 filtering and output logic
│   ├── sidebar.js                       ─ Persistent multi-layer sidebar construction
│   ├── energy-selection.js              ─ Layer 2 selection state management
│   ├── output_energy.js                 ─ Layer 2 output rendering
│   ├── mobility-selection.js            ─ Layer 3 selection state management
│   ├── output_green.js                  ─ Layer 4 output rendering
│   ├── green-selection.js               ─ Layer 4 selection state management
│   ├── energy.js                        ─ Energy demand treemap rendering (D3)
│   ├── pv.js                            ─ PV generation profile charts
│   ├── lpv.js                           ─ Landscape PV analysis and charts
│   ├── ev.js                            ─ EV demand calculations
│   ├── ev-v2g-breakdown.js              ─ EV & V2G breakdown rendering
│   └── heatmap-data.js                  ─ Heatmap data definitions
│
├── Templates/
│   ├── Content_Layer3_Transportation/   ─ EV calculation reference scripts
│   ├── NUS_EV.csv                       ─ EV scenario parameter data
│   └── (Other CSV parameter templates)
│
├── Content/
│   ├── Images_ProjectType/              ─ Layer 0 entry icons
│   ├── Images_Usage_Parameters/         ─ Land use icons (Layer 1)
│   ├── Images_Context_Parameters/       ─ Context icons (Layer 1)
│   ├── Images_Density_Parameters/       ─ Density icons (Layer 1)
│   ├── Images_Layout_Parameters/        ─ Layout icons (Layer 1)
│   ├── Images_Envelope_Parameters/      ─ Envelope icons (Layer 1)
│   ├── Images_Neighbourhoods/           ─ 3D neighbourhood renders
│   ├── Images_Buildings/               ─ Building typology images
│   ├── Images_Layer2_ThermalLoad/       ─ Thermal load icon (Layer 2)
│   ├── Images_Layer2_EnergyDemand/      ─ Energy systems icons (Layer 2)
│   ├── Images_Layer2_EnergyGeneration/  ─ Generation technology icons (Layer 2)
│   ├── Images_Layer3_Transportation/    ─ Transportation icons (Layer 3)
│   ├── Images_Layer3_Mobility/          ─ Active mobility icons (Layer 3)
│   ├── Images_Layer4_Infrastructure/    ─ Green infrastructure icons (Layer 4)
│   ├── Images_Layer4_UrbanAgriculture/  ─ Urban agriculture icons (Layer 4)
│   └── Images_Layer4_EnergyIntegratedGI/ ─ Energy-integrated GI icons (Layer 4)
│
├── Mockup/                              ─ Design mockups for future layers
├── docs/                                ─ Research references and implementation notes
├── docs_html/                           ─ HTML documentation pages
└── docs_implementation/                 ─ Detailed implementation plans
```

---

## Getting Started

### Prerequisites

No build tools or server required. The tool runs entirely in a browser from local files.

### Running the Tool

1. **Clone the repository:**
   ```bash
   git clone https://github.com/orcunkoraliseri/LMN-tool.git
   cd LMN-tool-main
   ```

2. **Open the entry point** in any modern browser:
   ```
   layer0_initial.html
   ```
   *(or `index.html` — they are equivalent)*

3. **Select "New Neighbourhood"** and click **"Get Started"** to begin.

4. **Work through each layer** sequentially:
   - **Layer 1** → Choose Land Use, Context, Density, Layout, Envelope → View matched neighbourhoods → Select one
   - **Layer 2** → Choose Load, Energy Systems, Generation technologies → View energy performance → Explore breakdowns
   - **Layer 3** → Choose Transportation and Mobility options → View mobility performance → Explore EV/V2G breakdown
   - **Layer 4** → Choose Green Infrastructure, Urban Agriculture, Energy-Integrated GI → View final profile → Explore LPV breakdown

5. **Sidebar** — The left sidebar accumulates all your selections as you advance, giving a live summary of the neighbourhood profile being built.

---

## License

This project is part of ongoing academic research. Contact the research group for licensing information.
