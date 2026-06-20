# UrbanServe - Home Services Platform

UrbanServe is a comprehensive, on-demand home services web application where customers can book verified professionals for various tasks such as deep cleaning, plumbing, AC repair, and more. 

This repository contains the full frontend implementation of the platform, including the Customer Panel and essential flows for seamless service booking and account management.

## 🚀 Live Demo

The application is deployed and available at: **[UrbanServe Live](https://home-urban-services.netlify.app)**

## ✨ Features Implemented

### 1. Authentication System
* **Customer Registration:** Create a new account with validation.
* **Multi-Login Options:** Login via Email & Password or Phone OTP.
* **Forgot Password:** UI flow for password recovery.
* **Persistent Sessions:** State is maintained across browser refreshes using `localStorage` and a global `AuthContext`.
* **Secure Logout:** Safely clears session data and redirects the user.

### 2. Service Discovery & E-commerce Flow
* **Search & Filters:** Search for services by keyword or category.
* **Shopping Cart (`CartContext`):** Add services, update quantities, remove items, and view subtotal. Real-time cart badge in the header.
* **Checkout Experience:** 
  * Select Date & Time Slots.
  * Apply promotional coupons.
  * Detailed Price Breakdown (Subtotal, Taxes, Discounts).
* **Payment Methods:** Choose between Online Payment or Cash on Delivery (Cash on Service).
* **Booking Confirmation:** Automatic Booking ID generation upon successful checkout.

### 3. Customer Profile & Dashboard
* **Quick Access Dashboard:** Front-page dashboard immediately visible to logged-in users for rapid navigation to bookings, wallet, and settings.
* **Profile Management:** Edit personal details and upload/change Profile Avatars using an integrated file picker.
* **Address Book:** Manage multiple addresses (Home, Office, Other). Set default addresses, edit, or delete them via custom dropdown menus. Includes a mock "Select on Map" UI feature for pinpointing locations.

### 4. Booking Management & Tracking
* **My Bookings Dashboard:** Filter bookings by Upcoming, Completed, and Cancelled.
* **Live Status Tracking:** View real-time service status.
* **Professional Details:** See assigned professional's details, with options to Call or open WhatsApp Support.
* **Post-Service Actions:** Rebook same service, Reschedule, Download Invoice.
* **Ratings & Reviews:** Rate completed services and upload review images.
* **Support & Complaints:** Raise support tickets or browse the Help Center.

### 5. Engagement & Wallet
* **Wallet & Credit Balance:** Track available platform credits.
* **Payment & Notification History:** Logs of past transactions and platform alerts.
* **Referrals:** "Refer & Earn" system.
* **Favorites:** Save preferred services for quick re-booking.

## 🛠️ How It's Built (Tech Stack)

The project leverages a modern, robust frontend stack:

* **Framework:** [React 18](https://react.dev/) built with [Vite](https://vitejs.dev/) for blazing fast HMR and optimized production builds.
* **Language:** TypeScript for strong type safety and developer experience.
* **Routing:** [React Router v7](https://reactrouter.com/) handling nested layouts, protected routes, and dynamic URL parameters.
* **State Management:** React Context API (`AuthContext`, `CartContext`) handling global state without the overhead of heavy third-party libraries.
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) for rapid, utility-first UI development, ensuring responsive design across all screen sizes.
* **UI Components:** Customized UI elements inspired by Shadcn UI, built on top of accessible Radix UI primitives.
* **Icons:** [Lucide React](https://lucide.dev/) for clean, consistent iconography.
* **Notifications:** [Sonner](https://sonner.emilkowal.ski/) for toast notifications providing immediate user feedback.

## 💻 Running the Code Locally

To run the application on your local machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

## 🏗️ Project Structure
* `/src/app/pages/`: Contains all the page-level route components organized by domain (customer, vendor, admin, auth).
* `/src/app/components/`: Reusable, modular UI components (buttons, inputs, modals, layouts).
* `/src/app/context/`: Global state providers (`AuthContext`, `CartContext`).
* `/src/styles/`: Global CSS and Tailwind configurations.
