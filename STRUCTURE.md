# Adoptie Schoten - App Structure Documentation

## Project Organization

Your Angular application is now organized into logical, maintainable sections with a professional header navigation.

### 📁 Folder Structure

```
src/app/
├── layout/                          # Layout components
│   ├── header/                      # Navigation header
│   │   ├── header.component.ts
│   │   ├── header.component.html
│   │   └── header.component.css     # Green theme (#A0C531)
│   ├── layout.component.ts
│   ├── layout.component.html
│   └── layout.component.css
│
├── features/                        # Feature modules
│   ├── home/                        # Home page
│   ├── contact/                     # Contact page
│   ├── adoption-procedure/          # ADOPTIEPROCEDURE
│   ├── godparent/                   # METER/PETERSCHAP
│   ├── support/                     # STEUN ONS
│   ├── trooper/                     # TROOPER
│   ├── photos/                      # FOTO'S ASIEL
│   ├── tips/                        # TIPS
│   ├── stray-cats/                  # ZWERFKATTEN
│   ├── sterilization/               # STERIEL MAKEN
│   ├── links/                       # LINKS
│   ├── sponsors/                    # SPONSORS
│   ├── tax-certificate/             # FISCAAL ATTEST
│   ├── pet-list/                    # Existing pet listing
│   └── pet-details/                 # Existing pet details
│
├── core/                            # Core services
│   └── services/
│       └── pet.service.ts
│
├── models/                          # Data models
│   ├── application.model.ts
│   ├── category.model.ts
│   └── pet.model.ts
│
├── app.ts                           # Root component
├── app.html                         # Root template
├── app.css                          # Global styles
└── app.routes.ts                    # Route configuration
```

## ✨ Features

### 🎨 Header/Navigation
- **Location**: `src/app/layout/header/`
- **Color**: Green (#A0C531)
- **Sticky**: Header remains at top when scrolling
- **Responsive**: Adapts to mobile devices
- **Navigation Items**:
  - HOME
  - CONTACT
  - ADOPTIEPROCEDURE
  - METER/PETERSCHAP
  - STEUN ONS
  - TROOPER
  - FOTO'S ASIEL
  - TIPS
  - ZWERFKATTEN
  - STERIEL MAKEN
  - LINKS
  - SPONSORS
  - FISCAAL ATTEST

### 📐 Layout Structure
- **Header Component**: Provides the sticky navigation
- **Layout Component**: Wraps the header and main content area
- **Main Content Area**: Adjusts height (100vh - header height)

### 🔀 Routing
All navigation is configured in `app.routes.ts` with:
- **Root path**: Redirects to `/home`
- **Layout wrapper**: All routes are children of the layout component
- **Feature components**: Each section has its own component

## 🎯 Component Hierarchy

```
App (root)
└── LayoutComponent (wrapper)
    ├── HeaderComponent (navigation)
    └── Main Content (router-outlet)
        ├── HomeComponent
        ├── ContactComponent
        ├── AdoptionProcedureComponent
        ├── GodparentComponent
        ├── SupportComponent
        ├── TrooperComponent
        ├── PhotosComponent
        ├── TipsComponent
        ├── StrayCatsComponent
        ├── SterilizationComponent
        ├── LinksComponent
        ├── SponsorsComponent
        └── TaxCertificateComponent
```

## 🚀 Development Guidelines

### Adding New Pages
1. Create a new folder in `features/`
2. Create a standalone component (`.ts`, `.html`, `.css`)
3. Add the route to `app.routes.ts`
4. Update navigation items in `header.component.ts` if needed

### Styling
- Global styles: `src/app/app.css`
- Component styles: Each component has its own `.css` file
- Header theme color: `#A0C531` can be modified in `header.component.css`

### Navigation
- Edit `navItems` array in `header.component.ts` to modify menu items
- Routes are automatically highlighted when active (blue bottom border on desktop)

## 📱 Responsive Design
- **Desktop**: Horizontal navigation menu
- **Tablet & Mobile**: Navigation items wrap, footer-style menu

## ✅ Build Status
✓ Build successful with 14 pre-rendered static routes
✓ No TypeScript errors
✓ All components properly organized

## 🔗 Next Steps
1. Customize page content in each feature component
2. Add actual page designs and content
3. Connect pet-listing and other existing features
4. Add additional components as needed
