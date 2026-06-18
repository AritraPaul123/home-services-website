import { BrowserRouter, Routes, Route } from "react-router";
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer Facing Routes */}
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:id" element={<ServiceDetailsPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="booking-success" element={<BookingSuccessPage />} />
        </Route>

        {/* Vendor Panel Routes */}
        <Route path="/vendor" element={<VendorLayout />}>
          <Route index element={<VendorDashboard />} />
          <Route path="jobs" element={<VendorJobsPage />} />
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
    </BrowserRouter>
  );
}