import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { CustomerLayout } from "./pages/customer/CustomerLayout";
import { HomePage } from "./pages/customer/HomePage";
import { ServicesPage } from "./pages/customer/ServicesPage";
import { ServiceDetailsPage } from "./pages/customer/ServiceDetailsPage";
import { CheckoutPage } from "./pages/customer/CheckoutPage";
import { BookingSuccessPage } from "./pages/customer/BookingSuccessPage";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminBookingsPage } from "./pages/admin/AdminBookingsPage";
import { AdminServicesPage } from "./pages/admin/AdminServicesPage";
import { VendorLayout } from "./pages/vendor/VendorLayout";
import { VendorDashboard } from "./pages/vendor/VendorDashboard";
import { VendorJobsPage } from "./pages/vendor/VendorJobsPage";
import { StaffLayout } from "./pages/staff/StaffLayout";
import { StaffDashboard } from "./pages/staff/StaffDashboard";
import { TermsPage } from "./pages/customer/TermsPage";
import { PrivacyPage } from "./pages/customer/PrivacyPage";
import { RefundPolicyPage } from "./pages/customer/RefundPolicyPage";
import { FAQPage } from "./pages/customer/FAQPage";
import { ContactPage } from "./pages/customer/ContactPage";
import { AboutPage } from "./pages/customer/AboutPage";
import { ReviewsPage } from "./pages/customer/ReviewsPage";
import { BlogPage } from "./pages/customer/BlogPage";
import { OffersPage } from "./pages/customer/OffersPage";
import { VendorRegisterPage } from "./pages/vendor/VendorRegisterPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { ForgotPasswordPage } from "./pages/auth/ForgotPasswordPage";
import { OTPLoginPage } from "./pages/auth/OTPLoginPage";

// Customer Profile Pages
import { ProfileLayout } from "./pages/customer/profile/ProfileLayout";
import { MyProfilePage } from "./pages/customer/profile/MyProfilePage";
import { AddressesPage } from "./pages/customer/profile/AddressesPage";
import { BookingsPage } from "./pages/customer/profile/BookingsPage";
import { BookingTrackingPage } from "./pages/customer/profile/BookingTrackingPage";
import { WalletPage } from "./pages/customer/profile/WalletPage";
import { ReferralsPage } from "./pages/customer/profile/ReferralsPage";
import { FavoritesPage } from "./pages/customer/profile/FavoritesPage";
import { NotificationsPage } from "./pages/customer/profile/NotificationsPage";
import { HelpCenterPage } from "./pages/customer/profile/HelpCenterPage";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/otp-login" element={<OTPLoginPage />} />

            {/* Customer Facing Routes */}
            <Route path="/" element={<CustomerLayout />}>
              <Route index element={<HomePage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="services/:id" element={<ServiceDetailsPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="booking-success" element={<BookingSuccessPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="refund-policy" element={<RefundPolicyPage />} />
              <Route path="faq" element={<FAQPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:id" element={<BlogPage />} />
              <Route path="offers" element={<OffersPage />} />
              
              {/* Customer Profile Routes */}
              <Route path="profile" element={<ProfileLayout />}>
                <Route index element={<MyProfilePage />} />
                <Route path="addresses" element={<AddressesPage />} />
                <Route path="bookings" element={<BookingsPage />} />
                <Route path="bookings/:id" element={<BookingTrackingPage />} />
                <Route path="wallet" element={<WalletPage />} />
                <Route path="referrals" element={<ReferralsPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                <Route path="notifications" element={<NotificationsPage />} />
                <Route path="help" element={<HelpCenterPage />} />
              </Route>
            </Route>

            {/* Vendor Panel Routes */}
            <Route path="/vendor" element={<VendorLayout />}>
              <Route index element={<VendorDashboard />} />
              <Route path="jobs" element={<VendorJobsPage />} />
              <Route path="register" element={<VendorRegisterPage />} />
            </Route>

            {/* Staff Panel Routes */}
            <Route path="/staff" element={<StaffLayout />}>
              <Route index element={<StaffDashboard />} />
            </Route>

            {/* Admin Panel Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="bookings" element={<AdminBookingsPage />} />
              <Route path="services" element={<AdminServicesPage />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}