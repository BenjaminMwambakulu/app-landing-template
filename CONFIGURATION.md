# Configuration Guide

This template is designed to be fully customizable without touching the core React code. All configuration files are located in `src/config/`.

## 1. Global Theme & Colors

**File:** `src/config/theme.js`

This file controls the global color palette and typography.

- **primary**: Main brand color (buttons, highlights).
- **secondary**: Contrast text color (usually white).
- **accent**: Used for decorative elements (blobs, icons).
- **background**: Main page background.
- **surface**: Secondary background for cards/sections.

**Example:**

```javascript
export const theme = {
  colors: {
    primary: "#000000", // Change to your brand color
    // ...
  },
  // ...
};
```

## 2. Navigation Bar

**File:** `src/config/SectionsData/navbar.js`

- **logo**: Update text and link.
- **links**: Array of navigation links.
- **cta**: The main "Get Started" button in the top right.

## 3. Hero Section

**File:** `src/config/SectionsData/herosection.js`

- **badge**: Small text above the headline.
- **title**: Main H1 headline.
- **description**: Subtext below the title.
- **primaryCta**: Main call-to-action button.
- **image**: The large hero image next to the text.

## 4. Stats Section

**File:** `src/config/SectionsData/stats.js`

Customize the numbers that appear below the Hero.

- **label**: The text description (e.g., "Active Users").
- **value**: The number (e.g., "50K+").

## 5. Screenshots Section

**File:** `src/config/SectionsData/screenshots.js`

Add URLs to screenshots of your application here. They will appear in a responsive grid.

## 6. Features Section

**File:** `src/config/SectionsData/features.js`

- **sectionTitle**: Title for the section.
- **features**: Array of feature objects.
  - **icon**: URL to an image icon (PNG/SVG).
  - **title**: Feature branding name.
  - **description**: Short explanation.

## 7. Testimonials, Pricing, FAQ

**Files:**

- `src/config/SectionsData/testimonials.js`
- `src/config/SectionsData/pricing.js`
- `src/config/SectionsData/faq.js`

Edit these files to update the respective content tiers, reviews, and questions.

## 8. Footer

**File:** `src/config/SectionsData/footer.js`

Update your copyright, company description, and footer links here.
