# Output Page Documentation

## Overview
The Output Page (`output.html`) displays filtered neighbourhood configurations based on parameters selected on the Welcome Page, presented in an interactive table format.

**File Path**: `/Interface/output.html`  
**Related Files**: 
- JavaScript: `js/app.js`
- Data: `js/data.js`
- Styles: `css/styles.css`

---

## Purpose
Display neighbourhood configurations that match the user's selected parameters and allow users to select a neighbourhood for detailed energy analysis.

---

## Features

### 4-Column Table Layout

| Column | Content | Description |
|--------|---------|-------------|
| **Concepts** | Concept visualization + name | Visual representation of the neighbourhood design concept |
| **Neighbourhoods** | 3D image + NU code | Three-dimensional neighbourhood layout with unique identifier |
| **Properties** | Parameter values | Context, Function, Layout, Density specifications |
| **Buildings** | Building type icons | Visual composition of building types in the neighbourhood |

### Dynamic Filtering
- **Filter Source**: Parameters from `sessionStorage` (selected on Welcome Page)
- **Filter Logic**: Displays only neighbourhoods matching ALL selected parameters
- **No Results Handling**: Shows message if no neighbourhoods match criteria
- **Result Count**: Displays number of matching neighbourhoods

### Interactive Elements
- **Clickable Rows**: Each neighbourhood row is clickable
- **Hover Effects**: Visual feedback on row hover
- **Row Selection**: Click to select neighbourhood for energy analysis
- **Navigation**: Automatic redirect to Energy Selection Page on row click

### Back Navigation
- **Back Button**: Returns to Welcome Page
- **Parameter Preservation**: Can modify parameter selections
- **State Reset**: Option to start fresh parameter selection

---

## Layout and Design

### Page Structure
```
+------------------------------------------+
|              Header                      |
| "Layer 1: Buildings and Neighbourhoods" |
+------------------------------------------+
| [← Back Parameters]  [Layer 2: Energy →] |
|                                          |
| +--------------------------------------+ |
| | Concepts | Neighbourhoods | Props   | |
| |----------|----------------|----------| |
| | [Image]  |    [3D View]   | Context: | |
| | Name     |    NU Code     | Density: | |
| |          |                | Function:| |
| |          |                | Layout:  | |
| +--------------------------------------+ |
| | [Buildings Icons: 🏢 🏠 🏛️...]      | |
| +--------------------------------------+ |
|                                          |
| [Additional filtered neighbourhoods...]   |
+------------------------------------------+
```

### Visual Design
- **Table Styling**: Clean, modern table with borders
- **Row Hover**: Subtle background color change
- **Image Sizing**: Consistent dimensions for concepts and neighbourhoods
- **Icon Layout**: Building icons displayed horizontally
- **Responsive**: Table adapts to screen size

---

## User Interaction Flow

### Step-by-Step Journey
1. **Page Load**
   - Read selected filters from `sessionStorage`
   - Filter neighbourhood data
   - Render matching neighbourhoods in table

2. **Browse & Select**
   - User scrolls through filtered neighbourhoods.
   - User clicks on a neighbourhood row to select it.
   - Row displays a highlight, and "Layer 2: Energy" button enables.

3. **Navigate**
   - User clicks the "Layer 2: Energy" button to proceed to energy analysis for the selected neighbourhood.

4. **Navigation Options**
   - **Layer 2: Energy**: Proceeds to Energy Selection Page
   - **Back Button**: Returns to Welcome Page to modify filters

---

## Technical Implementation

### JavaScript Logic (`app.js`)

#### Filtering Algorithm
```javascript
// Filter neighbourhoods based on selected parameters
function filterNeighbourhoods(neighbourhoods, filters) {
  return neighbourhoods.filter(nu => {
    // Match all selected parameters
    return matchesAllFilters(nu, filters);
  });
}
```

#### Table Rendering
```javascript
// Dynamically generate table rows
function renderResults(filteredNeighbourhoods) {
  // For each neighbourhood:
  // - Create table row
  // - Add concept image and name
  // - Add 3D neighbourhood image and code
  // - Add property details
  // - Add building type icons
  // - Attach click event listener
}
```

#### Row Selection Handler
```javascript
// Handle row selection instead of immediate navigation
row.addEventListener('click', () => {
    // Clear previous selection
    clearSelections();
    // Highlight current row
    row.classList.add('selected');
    // Store selected code
    selectedNeighbourhoodCode = code;
    // Enable navigation button
    enableLayer2Button();
});
```

#### Layer 2 Button Handler
```javascript
// Navigate using the selected code
layer2Btn.addEventListener('click', () => {
  if (selectedCode) {
    window.location.href = `energy-selection.html?neighbourhood=${encodeURIComponent(selectedCode)}`;
  }
});
```

### Data Source
- **Neighbourhood Data**: `js/data.js`
- **Concept Images**: `/Content/Images_Concept/`
- **Neighbourhood Images**: `/Content/Images_Neighbourhoods/`
- **Building Icons**: `/Content/Images_Buildings/` (19 different types)

### State Management
- **Read Filters**: Retrieved from `sessionStorage.getItem('selectedFilters')`
- **Store Selection**: `sessionStorage.setItem('selectedNeighbourhood', code)`
- **Persistence**: Neighbourhood selection maintained for energy analysis

---

## HTML Structure

### Table Structure
```html
<div class="table-container">
  <table class="results-table">
    <thead>
      <tr>
        <th>Concepts</th>
        <th>Neighbourhoods</th>
        <th>Properties</th>
        <th>Buildings</th>
      </tr>
    </thead>
    <tbody id="results-body">
      <!-- Dynamically generated rows -->
    </tbody>
  </table>
</div>
```

### Row Example
```html
<tr class="neighbourhood-row" data-nu-code="NU001">
  <td class="concept-cell">
    <img src="Content/Images_Concept/concept1.png" alt="Concept">
    <span>Urban Grid</span>
  </td>
  <td class="neighbourhood-cell">
    <img src="Content/Images_Neighbourhoods/NU001.png" alt="NU001">
    <span>NU001</span>
  </td>
  <td class="properties-cell">
    <div>Context: Urban</div>
    <div>Function: Mixed-use</div>
    <div>Layout: Grid</div>
    <div>Density: High</div>
  </td>
  <td class="buildings-cell">
    <img src="Content/Images_Buildings/residential.png" alt="Residential">
    <img src="Content/Images_Buildings/commercial.png" alt="Commercial">
    <!-- More building icons -->
  </td>
</tr>
```

---

## Image Assets

### Concept Images
- **Directory**: `/Content/Images_Concept/`
- **Count**: 12 concept visualizations
- **Format**: PNG
- **Purpose**: Visual representation of neighbourhood design concept

### Neighbourhood 3D Images
- **Directory**: `/Content/Images_Neighbourhoods/`
- **Naming**: Matches NU code (e.g., NU001.png)
- **Format**: PNG
- **Purpose**: Three-dimensional layout visualization

### Building Type Icons
- **Directory**: `/Content/Images_Buildings/`
- **Count**: 19 different building type icons
- **Format**: PNG
- **Types**: Residential, commercial, industrial, mixed-use, offices, retail, etc.
- **Purpose**: Show building composition at a glance

---

## Filter Logic

### Matching Algorithm
- **AND Logic**: Neighbourhood must match ALL selected parameter groups
- **OR Within Groups**: Can match ANY value within a parameter group
- **Example**: 
  - Selected: Context=Urban, Density=High OR Medium
  - Matches: Neighbourhoods with Urban context AND (High OR Medium density)

### Edge Cases
- **No Selections**: Show all neighbourhoods (or prompt to select parameters)
- **No Matches**: Display "No neighbourhoods match your criteria" message
- **Partial Matches**: Not shown (strict filtering)

---

## CSS Styling

### Key Classes
- `.table-container`: Wrapper for responsive table
- `.results-table`: Main table styling
- `.neighbourhood-row`: Individual row, clickable
- `.neighbourhood-row:hover`: Hover state styling
- `.concept-cell`, `.neighbourhood-cell`, `.properties-cell`, `.buildings-cell`: Column-specific styling

### Responsive Design
```css
@media (max-width: 768px) {
  /* Stack table cells vertically on mobile */
  .results-table { display: block; }
  .results-table tr { display: block; margin-bottom: 1rem; }
}
```

---

## Accessibility Features
- **Table Headers**: Proper `<thead>` and `<th>` usage
- **Alt Text**: All images have descriptive alt attributes
- **Keyboard Navigation**: Rows accessible via keyboard
- **Screen Reader Support**: Semantic HTML for table structure
- **Focus Indicators**: Clear focus states for keyboard navigation

---

## Performance Considerations
- **Image Optimization**: Lazy loading for neighbourhood images
- **Data Filtering**: Client-side filtering for fast results
- **DOM Manipulation**: Efficient rendering of table rows
- **Cache**: Images cached by browser for repeat visits

---

## Future Enhancements
- Add sorting options (by name, density, etc.)
- Implement search/filter refinement
- Add pagination for large result sets
- Include energy performance preview in table
- Export results functionality
- Comparison mode (select multiple neighbourhoods)
