# WKND Gallery Component

The WKND Gallery component is an extension of the AEM Core Carousel component that provides a responsive gallery layout for displaying teaser content using the AEM Style System.

## Features

- **Responsive Design**: Adapts to different screen sizes
  - Desktop: 4 items visible simultaneously
  - Tablet: 2 items visible simultaneously
  - Mobile: 1 item visible at a time
- **Style System Integration**: Uses AEM Style System for content authoring
- **Custom Navigation**: Sliding behavior that hides/shows items based on screen size
- **Teaser Integration**: Uses WKND Teaser components with gallery styling
- **Accessibility**: Maintains all core carousel accessibility features

## Implementation

### Style System Approach

The gallery functionality is implemented using the AEM Style System:

1. **Carousel Style**: `cmp-carousel--gallery` - Provides responsive grid layout
2. **Teaser Style**: `cmp-teaser--gallery` - Provides gallery-specific teaser styling
3. **Custom JavaScript**: Handles the sliding navigation logic

### Component Structure

**Backend (AEM Apps):**
```
wknd-gallery/
├── .content.xml (extends core carousel)
├── _cq_editConfig.xml (edit configuration)
└── README.md (documentation)
```

**Frontend (Webpack):**
```
wknd-gallery/
├── scss/
│   └── wknd-gallery.scss (JavaScript import)
└── js/
    └── wknd-gallery.js (custom sliding logic)
```

**Style System Files:**
```
carousel/scss/styles/_gallery.scss (carousel gallery style)
teaser/scss/styles/_gallery.scss (teaser gallery style)
```

## Usage

### Template Author Configuration

1. **Carousel Component Policy**: Add `cmp-carousel--gallery` style
2. **Teaser Component Policy**: Add `cmp-teaser--gallery` style

### Content Author Usage

1. Add Carousel component to page
2. Select "Gallery" style from carousel component
3. Add Teaser components as children
4. Select "Gallery" style for each teaser

### Navigation Behavior

**Desktop (4 items):**
- Next: Hide leftmost item, show next item on right
- Previous: Hide rightmost item, show previous item on left
- Buttons disabled when at beginning/end

**Tablet (2 items):**
- Same logic as desktop but with 2 items visible

**Mobile (1 item):**
- Traditional slide-by-slide navigation

## Technical Details

### CSS Classes

- `.cmp-carousel--gallery`: Main gallery carousel style
- `.cmp-teaser--gallery`: Gallery-specific teaser style

### JavaScript Features

- Responsive breakpoint detection
- Custom sliding logic
- Button state management
- Accessibility maintenance
- AEM authoring support

### Responsive Breakpoints

- **Desktop**: `min-width: 1200px` - 4 items
- **Tablet**: `768px - 1199px` - 2 items  
- **Mobile**: `max-width: 767px` - 1 item

## Benefits

1. **✅ Style System**: Leverages AEM's official Style System
2. **✅ Reusable**: Gallery style can be applied to any carousel
3. **✅ Maintainable**: Custom logic organized in component folder
4. **✅ Accessible**: Maintains all accessibility features
5. **✅ Responsive**: Adapts to all screen sizes
6. **✅ Authoring**: Easy for content authors to use

## Browser Support

- Modern browsers with CSS Grid support
- Graceful degradation for older browsers
- Mobile-responsive design 