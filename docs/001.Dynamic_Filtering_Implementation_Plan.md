# Dynamic Filtering Implementation Plan

## Goal
When a user selects a parameter value (e.g., "industrial" for Usage), **darken/disable** options in other parameters that have no matching neighbourhoods.

## How It Works

### Data Analysis
When user selects "industrial" for Usage, we check all neighbourhoods in `data.js`:
- **IND-HIGH**: context=suburban, layout=superblock, density=high
- **IND-LOW**: context=suburban, layout=superblock, density=low

So only these options remain valid:
- **Context**: suburban ✓ (urban ✗, rural ✗)
- **Layout**: superblock ✓ (grid ✗, curvilinear ✗)
- **Density**: high ✓, low ✓ (medium ✗)

### Implementation Steps

1. **Add CSS class `.disabled`** for darkened cards:
   - Reduce opacity to 0.3
   - Add grayscale filter
   - Disable pointer events

2. **Create `updateAvailableOptions()` function** in app.js:
   - After any selection, scan all neighbourhoods
   - Find which values exist for each parameter (given current selection)
   - Add/remove `.disabled` class on cards

3. **Trigger on every selection change**:
   - Call `updateAvailableOptions()` after each card click

### Example Flow
1. User clicks "industrial" → system checks 26 neighbourhoods
2. Only IND-HIGH and IND-LOW match "industrial"
3. System checks what context/layout/density those 2 have
4. Cards not in that list get `.disabled` class

## Files to Modify

| File | Changes |
|------|---------|
| `css/styles.css` | Add `.disabled` class styles |
| `js/app.js` | Add `updateAvailableOptions()` function, call after each selection |

## Questions for User
1. Should disabled cards still be clickable (to change selection)?
2. When user deselects, should all options become available again?
