# Neighbourhood Design Interface

A web-based tool for designing positive-energy district neighbourhoods by selecting parameters and visualizing compatible neighbourhood configurations across multiple urban layers.

## Project Overview

This project supports the **Simplistic Modular Holistic approach** for early-stage design of positive-energy district neighborhoods, integrating cross-sectoral systems including:
- Microgrid coordination
- Renewable-powered district heating (geothermal and PV/T)
- Landscape-integrated photovoltaics (LPV)
- Wind and waste-to-energy
- Thermal storage
- Electric mobility integration with EV/V2G functionality
- Green Infrastructure and Urban Agriculture

## Architecture & Layers

The interface is structured into interactive layers that sequentially build up a neighbourhood profile:

### Layer 1: Neighbourhood Selection
- **Selection Parameters**: Function, Context, Density, Layout
- **Output**: Matching neighbourhoods displaying 3D layouts, basic properties, and building compositions.

### Layer 2: Energy
- **Selection Parameters**: Energy Consumption (Thermal, Electric) and Generation (Solar, Wind, Geothermal, etc.)
- **Output**: Results with the added energy footprint. 
- **Breakdowns**: 
  - Energy Demand Treemap
  - PV Generation Profile
  - Land-PV (LPV) Profile

### Layer 3: Mobility
- **Selection Parameters**: Transportation (EV, Public Transport, Charging points, V2G) and Mobility (Bicycle Infrastructure, Pedestrian-oriented design).
- **Output**: Visual confirmation of mobility profiles, structured cleanly in the sidebar.
- **Breakdown**: EV Breakdown Profile.

### Layer 4: Green Infrastructure
- **Selection Parameters**: Infrastructure (Green Roofs, etc.), Urban Agriculture (Food Gardens, etc.), and Energy-Integrated GI.
- **Output**: Completion of the holistic urban design with all parameters aggregated in the dynamic sidebar.

## Project Structure

```text
Interface/
├── layer1_NUs_selection.html            - Layer 1: Neighbourhood Selection
├── layer1_output.html                   - Layer 1: Selection Results
├── layer2_energy_selection.html         - Layer 2: Energy Selection
├── layer2_output_energy.html            - Layer 2: Energy Results
├── layer2_energy_breakdown.html         - Layer 2: Energy Demand Treemap
├── layer2_pv_breakdown.html             - Layer 2: PV Profile
├── layer2_lpv_breakdown.html            - Layer 2: Land-PV Profile
├── layer3_mobility_selection.html       - Layer 3: Mobility Selection
├── layer3_output_mobility.html          - Layer 3: Mobility Results
├── layer3_ev_breakdown.html             - Layer 3: EV Breakdown
├── layer4_green_selection.html          - Layer 4: Green Selection
├── layer4_output_selection.html         - Layer 4: Green Results
├── css/
│   └── styles.css                       - Core shared styling
├── js/
│   ├── data.js                          - Neighbourhood & metrics data store
│   ├── app.js                           - Layer 0 logic
│   ├── sidebar.js                       - Dynamic multi-layer sidebar construction
│   ├── energy-selection.js              - Layer 1 selection logic
│   ├── output_energy.js                 - Layer 1 output logic
│   ├── mobility-selection.js            - Layer 2 selection logic
│   ├── output_mobility.js               - Layer 2 output logic
│   ├── green-selection.js               - Layer 3 selection logic
│   ├── output_green.js                  - Layer 3 output logic
│   ├── energy.js                        - Treemap rendering logic
│   ├── pv.js                            - PV logic
│   └── lpv.js                           - Land-PV logic
├── Templates/
│   ├── Content_Layer3_Transportation/   - EV calculation reference scripts
│   ├── NUS_EV.csv                       - EV scenario data
│   └── (Other CSV parameter templates)
├── Content/
│   ├── Images_Concept/                  - Concept visuals
│   ├── Images_Neighbourhoods/           - 3D neighbourhood graphics
│   ├── Images_Buildings/                - Building typologies
│   ├── Images_Layer2_EnergyConsumption/ - Energy consumption icons
│   ├── Images_Layer2_EnergyGeneration/  - Energy generation icons
│   ├── Images_Layer3_Mobility/          - Mobility icons
│   ├── Images_Layer3_Transportation/    - Transportation icons
│   ├── Images_Layer4_Infrastructure/    - Green infrastructure icons
│   └── (Other specific layer assets)
├── Mockup/                              - Mockup concepts for future layers
└── docs/                                - Implementation plans and references
```

## Getting Started

1. Clone the repository
2. Open `layer1_NUs_selection.html` in a web browser
3. Select baseline parameters to discover matching neighbourhoods
4. Click through the "Proceed" buttons or results tables to navigate through all layers (Energy -> Mobility -> Green Infrastructure)
5. Explore interactive breakdown pages by clicking on the items from the sidebar or output tables.

## License

This project is part of ongoing research. Contact the research group for licensing information.
