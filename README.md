# Chuks Kitchen – Food Ordering Web App (Frontend)

Deployment Link: https://dashing-basbousa-73d3af.netlify.app/

Login is Static so you can use any Email or Password to Access the site
Example: Email: Johndoe@gmail.com Password: Password 

## Technical Documentation: Setup, Running & Project Notes

### 1. Prerequisites
Before running the project, ensure you have:

- **Node.js** — v18 or higher (v20 recommended)
  - Download: https://nodejs.org
  - Verify: `node -v`

- **npm** — v9 or higher (comes with Node.js)
  - Verify: `npm -v`

- **Git** — for cloning the repository
  - Verify: `git --version`

### 2. Cloning the Project

```bash
# Clone from github
git clone https://github.com/MizMelly/Resturant

# Enter project directory
cd Resturant

INSTALLING DEPENDENCY
# Using npm (recommended for consistency)
npm install

# OR using pnpm (faster & more disk-efficient)
pnpm install

# OR using Yarn
yarn install

RUNNING THE PROJECT
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev
→ Open in browser: http://localhost:5173 

Build for production
npm run build
# output appears in /dist folder
Preview production build locally
npm run preview


## Project Overview

This project is the **frontend** implementation of a modern, responsive food ordering web application for **Chuks Kitchen**, a Nigerian home-cooking restaurant.

The application allows users to:
- View a welcoming hero section
- Browse popular categories and dishes
- See detailed food item pages with customization options (protein choice, extra sides)
- Add items to cart
- View cart summary with quantity controls and removal
- Proceed to mock checkout flow

The current scope focuses on **UI/UX fidelity** to the provided Figma design, clean component architecture, mobile-first responsiveness, and maintainable code structure.

**No backend** is implemented — all data is static/mock.

## Tech Stack Used

| Category           | Technology              | Reason / Purpose                                                                 |
|--------------------|-------------------------|----------------------------------------------------------------------------------|
| Framework          | React 18                | Component-based UI, reusability, strong ecosystem                                |
| Build Tool         | Vite                    | Lightning-fast dev server, modern build pipeline                                 |
| Styling            | Tailwind CSS v3         | Rapid utility-first styling, matches Figma precisely, no custom CSS bloat       |
| Routing            | React Router v6         | Clean client-side navigation and protected route patterns (future-ready)        |
| State Management   | React useState          | Simple local component state (cart, selections) — no need for Redux yet          |
| Icons/Images       | Static PNG imports      | Food photography and hero images from assets folder                             |
| Deployment         | Netlify  https://dashing-basbousa-73d3af.netlify.app/  | Recommended for fast, free static React hosting                                 |

**Why this stack?**  
→ Fast development velocity  
→ Excellent Figma → code translation using Tailwind  
→ Easy to onboard new developers (no complex tooling)  
→ Production-ready structure for future backend integration

## Project Structure
src/
├── assets/                     # All static images (hero, dishes, placeholders)
├── components/                 # Reusable UI building blocks
│   ├── layout/                 # Persistent layouts (Navbar, Footer, MainLayout)
│   └── ui/                     # Small components (Button, Card, Badge, etc.)
├── pages/                      # Page-level components (routed views)
│   ├── Welcome.jsx             # Landing / onboarding page
│   ├── Explore.jsx             # Menu browsing + categories
│   ├── FoodDetails.jsx         # Single dish view + customization
│   ├── Cart.jsx                # Cart summary + quantity controls
│   └── ...                     # (Checkout, Payment, Order Confirmation – planned)
├── App.jsx                     # Root component + routing configuration
├── main.jsx                    # Entry point (ReactDOM.render)
├── index.css                   # Tailwind base + global resets
└── routes/                     # (optional) route path constants

**Key files explained**

- `App.jsx` → central routing setup (BrowserRouter + Routes)
- `main.jsx` → React entry point (no logic here)
- `index.css` → imports Tailwind + any global font or reset styles
- `pages/` → each major screen lives here (easy to find)
- `components/layout/` → shared wrappers (keeps pages clean)

## Design Interpretation (Figma → Code)

- **Mobile-first** approach: most base classes are mobile, then `md:`, `lg:` overrides
- **Spacing & sizing**: Used Tailwind spacing scale (p-3, p-6, space-y-4, etc.) to match Figma
- **Colors**: Primary orange (`#c47a2c` / orange-600), blue accents, neutral grays
- **Typography**: `Dancing Script` for logo/headings, system sans-serif for body
- **Responsiveness**: Flex + Grid used everywhere; breakpoints follow Tailwind defaults (sm, md, lg)
- **Cards & shadows**: Consistent `rounded-2xl`, `shadow-md`, `hover:shadow-lg`
- **Image handling**: `object-cover` + fixed aspect ratios to prevent distortion

**Assumptions made due to missing design details**

- Hover states: added subtle scale + shadow (not always specified)
- Active states: added `active:scale-95` on buttons
- Font weights & sizes: approximated where not pixel-exact (e.g., heading sizes)
- Loading/error states: not implemented (static data only)
- Accessibility: basic (alt texts, semantic HTML) — not fully optimized yet

## Limitations & Planned Improvements

### Current Limitations

- No real backend / API (static mock data)
- No authentication / user sessions
- Cart is not persistent (resets on refresh)
- No form validation or error messages
- Limited accessibility (focus states, screen reader support)
- No loading skeletons or optimistic UI

### What I would improve with more time

1. **State management** — Zustand or Context for cart & user state
2. **Authentication** — login/signup flow + protected routes
3. **Persistence** — localStorage / IndexedDB for cart
4. **Accessibility** — ARIA labels, keyboard navigation, contrast checks
5. **Animations** — Framer Motion for cart add/remove, page transitions
6. **Testing** — Vitest + React Testing Library
7. **SEO** — React Helmet or meta tags
8. **Performance** — Image optimization, lazy loading
9. **Design system** — Storybook for components

## Developer Handoff Notes

If you're continuing this project tomorrow:

- **Routing is in App.jsx** — add new `<Route>` there
- **Use MainLayout** for pages that need navbar/footer
- **Follow naming**: PascalCase components, kebab-case files
- **Tailwind only** — avoid custom CSS unless absolutely necessary
- **Mobile-first** — write base styles first, then `md:`, `lg:`
- **Component composition** — prefer small, reusable pieces
- **Static data** — currently in component files; move to separate data files later

