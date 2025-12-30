# Neighbourhood Design Interface - Implementation Plan

Two-page website for designing positive-energy district neighbourhoods.

---

## Welcome Page

Users select parameters using **toggle buttons** with color-coded categories:

![Welcome Page Mock-up](file:///Users/orcunkoraliseri/Desktop/Interface/Mockup/Welcome%20page_mockup.png)

| Category | Options | Color |
|----------|---------|-------|
| **USAGE** | residential, commercial, mixed-use, industrial | Lavender/Purple |
| **CONTEXT** | urban, suburban, rural | Pink |
| **DIVERSITY** | high, medium, low | Green |
| **DENSITY** | high, medium, low | Pink |
| **LAYOUT** | grid, clustered, superblock | Light Blue |

**Data source**: [Welcome_Page_Parameters.csv](file:///Users/orcunkoraliseri/Desktop/Interface/Templates/Welcome_Page_Parameters.csv)

---

## Output Page

After selections, users see matching neighbourhoods with images and properties:

![Output Page Mock-up](file:///Users/orcunkoraliseri/Desktop/Interface/Mockup/Output_page_Mockup.png)

**4-column layout:**

| Column | Content |
|--------|---------|
| **Concepts** | Concept image + name (e.g., "Streetcar suburb") |
| **Neighbourhoods** | 3D neighbourhood image + code (e.g., "CR/I V1", "MU2") |
| **Properties** | Context, Usage mix, Layout, Density, Diversity Index |
| **Buildings** | Building type icons with labels |

**Data sources:**
- [Building content of Neighbourhoods.csv](file:///Users/orcunkoraliseri/Desktop/Interface/Templates/Building%20content%20of%20Neighbourhoods.csv)
- [Images_Concept](file:///Users/orcunkoraliseri/Desktop/Interface/Content/Images_Concept) - Concept visualization images
- [Images_Neighbourhoods](file:///Users/orcunkoraliseri/Desktop/Interface/Content/Images_Neighbourhoods) - 3D neighbourhood images
- [Images_Buildings](file:///Users/orcunkoraliseri/Desktop/Interface/Content/Images_Buildings) - Building type icons (19 types)

---

## File Structure

```
/Users/orcunkoraliseri/Desktop/Interface/
├── index.html           [NEW] - Welcome page
├── output.html          [NEW] - Output page
├── css/styles.css       [NEW] - Shared styles
├── js/data.js           [NEW] - Data from CSVs
├── js/app.js            [NEW] - Application logic
├── docs/                [NEW] - Documentation
├── Content/             [EXISTING]
│   ├── Images_Concept/
│   ├── Images_Neighbourhoods/
│   └── Images_Buildings/
├── Templates/           [EXISTING]
└── Mockup/              [EXISTING]
```

---

## Verification Plan

1. Browser test: Toggle button filtering on Welcome Page
2. Browser test: Output Page shows correct neighbourhoods for selections
3. Verify building icons display with labels
4. Responsive layout check
