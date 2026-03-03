# Neighbourhood Design Interface

A web-based tool for designing positive-energy district neighbourhoods by selecting parameters and visualizing compatible neighbourhood configurations.

## Project Overview

This project supports the **Simplistic Modular Holistic approach** for early-stage design of positive-energy district neighborhoods, integrating cross-sectoral systems including:
- Microgrid coordination
- Renewable-powered district heating (geothermal and PV/T)
- Landscape-integrated photovoltaics (LPV)
- Wind and waste-to-energy
- Thermal storage
- Electric vehicle (EV) integration with V2G functionality

## Features

### Welcome Page
Select neighbourhood parameters using toggle buttons:
- **Context**: Urban, Suburban, Rural
- **Usage**: Residential, Commercial, Mixed-use, Industrial
- **Density**: High, Medium, Low
- **Layout**: Grid, Clustered, Superblock

### Output Page
View matching neighbourhoods with:
- **EUI (Energy Use Intensity)** - Color-coded values with green-yellow-red scale, clickable for detailed breakdown
- **Energy Status** - Visual indicator (Positive, Neutral, Negative) showing energy performance status
- Concept visualization images
- 3D neighbourhood layouts
- Property details (Context, Usage, Layout, Density)
- Building type compositions with icons

### Energy Treemap Page
Interactive visualization of energy demand breakdown:
- **Treemap layout** - Rectangles sized proportionally to energy consumption
- **13 energy categories** - Heating, Cooling, Lighting, Equipment, etc.
- **Color-coded categories** - Each energy type has a distinct color
- **Legend** - Shows all categories with values and percentages
- Click any EUI value in the output table to view the treemap

## Project Structure

```
Interface/
├── layer0_NUs_selection.html           - Welcome page (parameter selection)
├── layer0_NUs_selection.html          - Output page (results table)
├── layer1_energy_breakdown.html          - Energy treemap visualization
├── css/styles.css       - Shared styles
├── js/
│   ├── data.js          - Neighbourhood & energy data
│   ├── app.js           - Application logic
│   └── energy.js        - Treemap rendering
├── Content/
│   ├── Images_Concept/  - Concept images
│   ├── Images_Neighbourhoods/ - 3D neighbourhood images
│   └── Images_Buildings/     - Building type icons
├── Templates/           - CSV data sources
├── Mockup/              - Design mockups
└── docs/                - Documentation
```

## Getting Started

1. Clone the repository
2. Open `layer0_NUs_selection.html` in a web browser
3. Select parameters and view matching neighbourhoods
4. Click on EUI values to explore energy breakdown

## License

This project is part of ongoing research. Contact the research group for licensing information.
