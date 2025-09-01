# Shopify School Homepage - Andrew Motko

A responsive landing page for a shoe store built with vanilla HTML, CSS, and JavaScript. This project demonstrates modern front-end development practices using a mobile-first approach and BEM methodology.

## 🚀 Demo

[Live Demo](https://your-demo-link.netlify.app) | [Repository](https://github.com/your-username/shopify-school-homepage-andrew-motko)

## 📋 Features

- **Responsive Design**: Mobile-first approach with breakpoints for mobile (< 768px), tablet (768px - 1279px), and desktop (≥ 1280px)
- **Interactive Components**: 
  - Hero slider with Swiper.js
  - Product carousel with navigation arrows
  - Product gallery with color/size selection
  - FAQ accordion sections
  - Newsletter popup modal
  - Contact form with validation
- **Semantic HTML**: Proper heading structure and accessibility attributes
- **BEM Methodology**: Consistent CSS class naming convention
- **Modern CSS**: CSS custom properties, grid, flexbox, and smooth animations
- **Performance Optimized**: WebP images with responsive srcsets

## 🛠 Technologies Used

- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Modern CSS features with custom properties
- **Vanilla JavaScript**: ES6+ modules and classes
- **Swiper.js**: Touch-enabled sliders and carousels
- **Vite**: Build tool and development server
- **Modern Normalize**: CSS reset for consistent styling

## 📁 Project Structure

```
src/
├── css/
│   ├── partials/          # Component-specific styles
│   │   ├── featured.css   # Product carousel styles
│   │   ├── footer.css     # Footer and accordion styles
│   │   ├── header.css     # Navigation header styles
│   │   ├── help.css       # Contact form styles
│   │   ├── hero.css       # Hero banner styles
│   │   ├── modal.css      # Popup modal styles
│   │   ├── product.css    # Product gallery styles
│   │   └── questions.css  # FAQ accordion styles
│   ├── utils/             # Utility styles
│   │   ├── common.css     # CSS variables and containers
│   │   ├── fonts.css      # Font face declarations
│   │   └── reset.css      # CSS reset
│   └── styles.css         # Main stylesheet imports
├── fonts/                 # Poppins font files (woff2)
├── img/                   # Images organized by sections
├── js/                    # JavaScript modules
│   ├── featured-swiper.js # Product carousel functionality
│   ├── footer.js          # Footer accordion logic
│   ├── help.js            # Contact form validation
│   ├── hero-swiper.js     # Hero slider functionality
│   ├── modal.js           # Popup modal logic
│   ├── product.js         # Product gallery interactions
│   └── questions-accordeon.js # FAQ accordion
├── partials/              # HTML components
└── svg/                   # SVG sprite icons
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/shopify-school-homepage-andrew-motko.git
cd shopify-school-homepage-andrew-motko
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Colors
- **Primary Dark**: `#111111`
- **White**: `#FFFFFF`
- **Gray**: `#737373`
- **Light Gray**: `#CACACB`
- **Stroke**: `#EBEBEB`

### Typography
- **Font Family**: Poppins
- **H1 Desktop**: 48px/48px
- **H1 Mobile**: 30px/36px
- **H2 Desktop**: 30px/36px
- **H2 Mobile**: 24px/32px
- **Body Large**: 16px/24px
- **Body Medium**: 14px/20px

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1279px
- **Desktop**: ≥ 1280px

## 📱 Responsive Behavior

- **Hero Slider**: Full-width with auto-advancing slides
- **Featured Products**: 
  - Mobile: 1.1 cards visible
  - Tablet: 2.5 cards visible
  - Desktop: 4 cards visible
- **Product Gallery**: Vertical thumbnails on desktop, horizontal on mobile
- **Footer**: Collapsible accordions on mobile, always expanded on desktop

## ✨ Interactive Features

### Hero Section
- Auto-advancing carousel with 9-second intervals
- Custom pagination bullets
- Smooth transitions between slides

### Featured Collection
- Touch-friendly product carousel
- Navigation arrows (desktop only)
- Responsive card sizing

### Product Spotlight
- Image gallery with thumbnail navigation
- Color selection with dynamic image updates
- Size selection with visual feedback
- "Highly Rated" badge overlay

### FAQ Section
- Smooth accordion animations
- Dynamic icon changes (plus/minus)
- Accessible keyboard navigation

### Newsletter Modal
- Appears 1 second after page load
- Email validation
- Prevents re-showing with sessionStorage
- Closes on backdrop click or ESC key

### Contact Form
- Real-time field validation
- Error messaging
- Form reset after submission
- Success notification

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Performance Considerations

- **Images**: WebP format with fallbacks and responsive srcsets
- **Fonts**: WOFF2 format with `font-display: swap`
- **CSS**: Efficient selectors and minimal repaints
- **JavaScript**: ES6 modules for better tree-shaking
- **Animations**: Hardware-accelerated transforms

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt attributes for all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management in modals
- Screen reader friendly content

## 🔧 Future Improvements

Given more time, I would enhance the project with:

### Technical Enhancements
- **Service Worker**: Add offline functionality and caching
- **Image Optimization**: Implement lazy loading and WebP conversion pipeline
- **Performance Monitoring**: Add Core Web Vitals tracking

### User Experience
- **Enhanced Animations**: Add micro-interactions and loading states
- **Search Functionality**: Implement product search and filtering
- **Shopping Cart**: Add cart management and local storage
- **User Authentication**: Login/register functionality
- **Wishlist**: Save favorite products
- **Product Reviews**: User rating and review system

### Developer Experience
- **Testing Suite**: Unit and integration tests with Jest/Vitest
- **Storybook**: Component documentation and isolated testing
- **Linting**: ESLint and Stylelint configuration
- **CI/CD Pipeline**: Automated testing and deployment
- **Code Splitting**: Dynamic imports for better performance

### Design System
- **Design Tokens**: Centralized design system with JSON tokens
- **Component Library**: Reusable UI components
- **Dark Mode**: Alternative color scheme
- **Advanced Grid**: CSS Grid layouts for complex designs

## 👨‍💻 Development Approach

This project follows modern web development best practices:

- **Mobile-First Responsive Design**: Ensures optimal experience on all devices
- **BEM Methodology**: Maintains scalable and readable CSS architecture
- **Component-Based Structure**: Modular HTML partials for maintainability
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Accessible Design**: Follows WCAG guidelines for inclusive user experience

## 📝 License

This project is created for educational purposes as part of the Shopify School technical assessment.

---

**Created by**: Andrew Motko  
**Contact**: [andrew.motko@gmail.com]  
**Date**: September 2025