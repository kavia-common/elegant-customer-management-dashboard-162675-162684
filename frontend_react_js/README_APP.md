# Customer Management Frontend

A modern, minimalistic React app styled with Tailwind CSS featuring:
- Centered login screen with authentication form
- Step-by-step flow to customer creation after login
- Card-based dashboard with clear navigation
- Internal state for auth and customers (no backend)
- Placeholders for API integration using REACT_APP_API_BASE_URL

## Development

1) Install dependencies
   npm install

2) Start app
   npm start

3) Build
   npm run build

## Environment Variables

Copy .env.example to .env and set:
- REACT_APP_API_BASE_URL: Base URL for future API calls

## Structure

- src/context/AuthContext.js: Simple auth state
- src/context/CustomerContext.js: Customer state
- src/services/api.js: Placeholder API utilities using REACT_APP_API_BASE_URL
- src/pages/Login.js: Centered login
- src/pages/CustomerWizard.js: Step-by-step customer creation
- src/pages/Dashboard.js: Card-based dashboard
- src/components: Reusable UI parts (Button, Card, Input, Navbar, Layout)
