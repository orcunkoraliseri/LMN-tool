# Neighbourhood Design Interface - Implementation Plan

## Overview
Two-page website for designing positive-energy district neighbourhoods through parameter selection.

---

## File Structure
```
/Interface/
├── index.html           - Welcome page
├── output.html          - Output page
├── css/styles.css       - Shared styles
├── js/
│   ├── data.js          - Neighbourhood data
│   └── app.js           - Application logic
├── Content/
│   ├── Images_Usage_Parameters/      - Usage cards (4)
│   ├── Images_Context_Parameters/    - Context cards (3)
│   ├── Images_Density_Parameters/    - Density cards (3)
│   ├── Images_Layout_Parameters/     - Layout cards (3)
│   ├── Images_Concept/               - 12 concept images
│   ├── Images_Neighbourhoods/        - NU 3D images
│   └── Images_Buildings/             - 19 building icons
└── Templates/                        - Source CSV files
```

---

## Welcome Page (`index.html`)

### Parameters (4 Image Card Groups)
| Parameter | Options | Theme Color |
|-----------|---------|-------------|
| **Usage** | residential, commercial, mixed-use, industrial | Purple |
| **Context** | urban, suburban, rural | Pink |
| **Density** | high, medium, low | Pink |
| **Layout** | grid, curvilinear, superblock | Light Blue |

> **Note:** Diversity parameter excluded from Welcome Page per user request.

### Interaction Flow
1. User selects parameters via image cards (toggle selection)
2. Click "View Neighbourhoods" button
3. Filters stored in sessionStorage
4. Navigate to Output Page

---

## Output Page (`output.html`)

### 4-Column Table Layout
| Concepts | Neighbourhoods | Properties | Buildings |
|----------|----------------|------------|-----------|
| Concept image + name | NU 3D image + code | Context, Usage, Layout, Density | Building type icons |

### Features
- Back button returns to Welcome Page
- Results filtered by parameter selections
- Building icons from `Images_Buildings/` folder

---

## Verification Plan

### Browser Testing
- [ ] All image cards display correctly
- [ ] Toggle selection works on all parameter cards
- [ ] Submit button navigates to Output Page
- [ ] Output Page displays filtered results
- [ ] Back button returns to Welcome Page
- [ ] Building icons render properly
