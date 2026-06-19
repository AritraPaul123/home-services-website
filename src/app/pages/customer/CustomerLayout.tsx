import { Outlet, Link } from "react-router";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function CustomerLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">UrbanServe</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/services" className="text-slate-600 hover:text-blue-600 font-medium">Services</Link>
            <Link to="/offers" className="text-slate-600 hover:text-blue-600 font-medium">Offers</Link>
            <Link to="/vendor/login" className="text-slate-600 hover:text-blue-600 font-medium">Register as Professional</Link>
            <Link to="/customer/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">Login</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-slate-900 text-slate-300 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">UrbanServe</h3>
            <p className="text-sm mb-6">Your trusted home services partner. Professional, reliable, and affordable.</p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" className="text-slate-400 hover:text-white transition"><Facebook className="w-5 h-5" /></a>
              <a href="https://twitter.com" className="text-slate-400 hover:text-white transition"><Twitter className="w-5 h-5" /></a>
              <a href="https://instagram.com" className="text-slate-400 hover:text-white transition"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition">Cancellation/Refund Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">For Customers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition">All Services</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition">Reviews</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">For Partners</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/vendor/register" className="hover:text-white transition">Register as a Professional</Link></li>
              <li><Link to="/vendor" className="hover:text-white transition">Partner Dashboard</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
