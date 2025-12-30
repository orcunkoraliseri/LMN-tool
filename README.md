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
- **Diversity**: High, Medium, Low

### Output Page
View matching neighbourhoods with:
- Concept visualization images
- 3D neighbourhood layouts
- Property details
- Building type compositions

## Project Structure

```
Interface/
├── index.html           - Welcome page
├── output.html          - Output page
├── css/styles.css       - Shared styles
├── js/
│   ├── data.js          - Neighbourhood data
│   └── app.js           - Application logic
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
2. Open `index.html` in a web browser

## License

This project is part of ongoing research. Contact the research group for licensing information.
