# Welcome Page Documentation

## Overview
The Welcome Page (`layer0_NUs_selection.html`) serves as the initial entry point for the Neighbourhood Design Interface, providing an intuitive parameter selection interface for neighbourhood design.

**File Path**: `/Interface/layer0_NUs_selection.html`  
**Related Files**: 
- JavaScript: `js/app.js`
- Data: `js/data.js`
- Styles: `css/styles.css`

---

## Purpose
Enable users to select neighbourhood design parameters through an image-based selection interface before viewing compatible neighbourhood configurations.

---

## Features

### Four Parameter Groups (Image-based Selection Cards)

#### 1. Function Parameter
- **Options**: Residential, Commercial, Mixed-use, Industrial (4 options)
- **Theme Color**: Purple
- **Image Directory**: `/Content/Images_Usage_Parameters/`
- **Selection Type**: Toggle (can select multiple)
- **Display**: Large image cards with text labels

#### 2. Context Parameter
- **Options**: Urban, Suburban, Rural (3 options)
- **Theme Color**: Pink
- **Image Directory**: `/Content/Images_Context_Parameters/`
- **Selection Type**: Toggle (can select multiple)
- **Display**: Image cards with text labels

#### 3. Density Parameter
- **Options**: High, Medium, Low (3 options)
- **Theme Color**: Pink
- **Image Directory**: `/Content/Images_Density_Parameters/`
- **Selection Type**: Toggle (can select multiple)
- **Display**: Image cards with text labels

#### 4. Layout Parameter
- **Options**: Grid, Curvilinear, Superblock (3 options)
- **Theme Color**: Light Blue
- **Image Directory**: `/Content/Images_Layout_Parameters/`
- **Selection Type**: Toggle (can select multiple)
- **Display**: Image cards with text labels

> **Note:** Diversity parameter excluded from Welcome Page per user request.

---

## Layout and Design

### Page Structure
```
+----------------------------------+
|           Header                 |
|  "Neighbourhood Design Interface"|
+----------------------------------+
|                                  |
|    Function Parameter Group      |
|    [img] [img] [img] [img]      |
|                                  |
|    Context Parameter Group       |
|    [img] [img] [img]            |
|                                  |
|    Density Parameter Group       |
|    [img] [img] [img]            |
|                                  |
|    Layout Parameter Group        |
|    [img] [img] [img]            |
|                                  |
|   [View Neighbourhoods Button]   |
|                                  |
+----------------------------------+
```

### Visual Design
- **Background**: Clean, minimalist design
- **Card Selection**: Visual feedback with border highlight on selection
- **Hover Effects**: Smooth transitions on card hover
- **Button**: Prominent submit button at the bottom
- **Responsive**: Flexbox layout adapts to different screen sizes

---

## User Interaction Flow

### Step-by-Step Journey
1. **Page Load**
   - User arrives at the Welcome Page
   - All parameter cards displayed
   - No parameters selected by default

2. **Parameter Selection**
   - User clicks on parameter cards to select/deselect
   - Selected cards show visual highlighting
   - Multiple selections allowed within each parameter group
   - No limit on number of selections

3. **Submit Selection**
   - User clicks **"View Neighbourhoods"** button
   - Selected parameters validated
   - Filters stored in `sessionStorage`

4. **Navigation**
   - Automatic redirect to Output Page (`layer0_NUs_selection.html`)
   - Selected parameters preserved for filtering

---

## Technical Implementation

### JavaScript Logic (`app.js`)

#### Selection Handling
```javascript
// Card selection toggle
- Event listeners on all parameter cards
- Toggle 'selected' class on click
- Visual feedback through CSS class changes
- Multiple selections supported
```

#### Data Storage
```javascript
// sessionStorage structure
sessionStorage.setItem('selectedFilters', JSON.stringify({
  usage: ['residential', 'commercial'],
  context: ['urban'],
  density: ['high', 'medium'],
  layout: ['grid']
}));
```

#### Navigation
```javascript
// Submit button handler
- Reads all selected parameters
- Stores in sessionStorage
- Redirects to layer0_NUs_selection.html
```

### Data Source
- **Parameter Definitions**: `js/data.js`
- **Parameter Images**: `/Content/Images_*_Parameters/` directories
- **CSV Source**: `Templates/Welcome_Page_Parameters.csv`

### State Management
- **Storage Method**: `sessionStorage`
- **Data Format**: JSON object with parameter categories as keys
- **Persistence**: Maintained across page navigation within session
- **Validation**: Ensures at least one parameter selected (optional)

---

## HTML Structure

### Parameter Card Example
```html
<div class="parameter-group">
  <div class="parameter-label">Function</div>
  <div class="usage-cards">
    <button class="usage-card" data-category="usage" data-value="residential">
      <img src="Content/Images_Usage_Parameters/residential.png" alt="Residential">
      <span>residential</span>
    </button>
    <!-- More cards... -->
  </div>
</div>
```

### Submit Button
```html
<div class="submit-section">
  <button id="view-results-btn" class="submit-btn">View Neighbourhoods</button>
</div>
```

---

## CSS Styling

### Key Classes
- `.parameter-group`: Container for each parameter section
- `.parameter-label`: Section header
- `.usage-card`, `.context-card`, `.density-card`, `.layout-card`: Individual selection cards
- `.selected`: Applied to selected cards
- `.submit-btn`: Submit button styling

### Theme Colors
```css
/* Function (Purple) */
.usage-card.selected { border-color: #9333EA; }

/* Context & Density (Pink) */
.context-card.selected, .density-card.selected { border-color: #EC4899; }

/* Layout (Light Blue) */
.layout-card.selected { border-color: #3B82F6; }
```

---

## Image Assets

### Required Images
- **Function**: 4 images (residential.png, commercial.png, mixed-use.png, industrial.png)
- **Context**: 3 images (urban.png, suburban.png, rural.png)
- **Density**: 3 images (high.png, medium.png, low.png)
- **Layout**: 3 images (Grid.png, Curvilinear.png, Superblock.png)

### Image Specifications
- **Format**: PNG
- **Dimensions**: Consistent sizing for each parameter group
- **Quality**: High-resolution for clarity
- **Naming**: Lowercase with hyphens for multi-word options

---

## Accessibility Features
- **Alt Text**: All images have descriptive alt attributes
- **Keyboard Navigation**: Cards accessible via keyboard
- **Visual Feedback**: Clear indication of selected state
- **Semantic HTML**: Proper use of buttons and labels

---

## Future Enhancements
- Add parameter descriptions/tooltips
- Implement "Select All" / "Clear All" buttons
- Add parameter combination recommendations
- Include parameter count indicators
- Save favorite parameter combinations
