# live Site link
https://cricrkit-bag-darkrai.vercel.app


# ShoppyGlobe - React E-Commerce Application

![ShoppyGlobe Logo](path/to/logo.png) *Replace with actual logo path*

An e-commerce platform built with React to showcase cricket products, featuring a modern UI, cart functionality, and a seamless checkout process.

## 📝 Overview

ShoppyGlobe is a React-based e-commerce application developed as a final project for the React course by Parth Pandey, a student of the 15 September batch. The application allows users to browse cricket products, view detailed product information, add items to a cart, and complete a checkout process with a simulated payment flow. The project demonstrates the use of modern React practices, state management with Redux, and responsive design with Tailwind CSS.

## 🎓 What I Learned from This Project

During the development of ShoppyGlobe, I gained hands-on experience with several key concepts and technologies:

- **React Fundamentals:**
  - Building reusable components and managing component state with hooks (`useState`, `useEffect`).
  - Implementing React Router for client-side routing (`react-router-dom`).
  - Handling dynamic routing for product details using `useParams`.
  
- **State Management with Redux:**
  - Setting up a Redux store using `@reduxjs/toolkit` for managing the cart state.
  - Using `useSelector` and `useDispatch` to interact with the Redux store.
  - Resolving common Redux issues, such as wrapping the app in a Provider to avoid context errors.

- **API Integration and Mock Data:**
  - Fetching data from an API (dummyjson.com) and handling loading, error, and success states.
  - Transitioning to mock data (`cricketProducts.js`) to ensure consistency across the app when API data didn't match requirements.
  - Creating custom hooks (`useProducts`, `useProduct`) to encapsulate data-fetching logic.

- **Styling with Tailwind CSS:**
  - Using Tailwind CSS for responsive and utility-first styling.
  - Creating a consistent design system with Tailwind classes (e.g., cards, buttons, forms).
  - Implementing animations (e.g., hover effects, payment success animation with `react-confetti`).

- **Routing and Navigation:**
  - Setting up routes for Home (`/`), Product Detail (`/product/:id`), Cart (`/cart`), and Checkout (`/checkout`).
  - Adding a 404 page (`NotFound`) for invalid routes.
  - Using `useNavigate` for programmatic navigation (e.g., redirecting after checkout).

- **Error Handling and Debugging:**
  - Debugging issues like "Invalid product ID" errors by ensuring consistent data usage.
  - Handling edge cases, such as empty carts, invalid IDs, and form validation.
  - Using console logs to trace data flow and identify issues.

- **Project Structure and Best Practices:**
  - Organizing the project into a modular structure (`components/`, `hooks/`, `store/`, `data/`).
  - Following React best practices, such as component reusability (e.g., `CartItem`, `ProductItem`) and separation of concerns.
  - Writing clean, maintainable code with proper comments and documentation.

- **Additional Skills:**
  - Simulating a payment process with a delay and displaying a success animation using `react-confetti`.
  - Implementing a sticky footer layout using Flexbox to ensure the footer stays at the bottom of the page.
  - Adding a professional touch with a `README.md` to document the project for GitHub.

## ✨ Features

ShoppyGlobe comes with the following features:

- **Product Listing:**
  - Displays a list of cricket products with images, titles, descriptions, and prices.
  - Responsive grid layout that adjusts to different screen sizes (mobile, tablet, desktop).

- **Product Details:**
  - View detailed information about a product, including a larger image, description, price, category, and rating.
  - Add products to the cart directly from the detail page.

- **Cart Functionality:**
  - Add products to the cart with a single click.
  - Update quantities or remove items from the cart.
  - View an order summary with subtotal and total price (including GST).

- **Checkout Process:**
  - Fill out a shipping and payment form to place an order.
  - Simulated payment processing with a success animation (confetti) and invoice generation.
  - Clear the cart after a successful checkout and redirect to the home page.

- **Responsive Design:**
  - Fully responsive UI built with Tailwind CSS, ensuring a seamless experience on all devices.
  - Sticky order summary on the cart and checkout pages for better usability.

- **State Management:**
  - Uses Redux for managing cart state, ensuring a single source of truth for cart items.
  - Persists cart items during navigation (until checkout).

- **Error Handling:**
  - Displays loading states while fetching data.
  - Shows error messages for invalid product IDs or failed data fetching.
  - Handles edge cases like empty carts and invalid routes.

- **Additional Features:**
  - Cart count badge in the header to show the number of items in the cart.
  - Sticky footer with project credits and copyright information.
  - 404 page for invalid routes.

## 🛠️ Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router:** For client-side routing (`react-router-dom`).
- **Redux:** State management with `@reduxjs/toolkit` and `react-redux`.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **React Icons:** For icons like the shopping cart (`react-icons`).
- **React Confetti:** For the payment success animation (`react-confetti`).
- **Vite:** Build tool and development server for fast development.
- **Mock Data:** Custom mock data in `cricketProducts.js` for product listing and details.

## 📂 Project Structure
shoppyglobe/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CartItem.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductItem.jsx
│   │   └── ProductList.jsx
│   ├── data/
│   │   └── cricketProducts.js
│   ├── hooks/
│   │   ├── useProduct.js
│   │   └── useProducts.js
│   ├── store/
│   │   ├── cartSlice.js
│   │   └── index.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
## 🚀 Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher) or yarn

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/<your-username>/shoppyglobe.git
   cd shoppyglobe
   ```
   
