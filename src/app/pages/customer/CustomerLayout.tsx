import { useState, useRef, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router";
import { Facebook, Twitter, Instagram, ShoppingCart, User, CalendarDays, Wallet, LifeBuoy, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export function CustomerLayout() {
  const { isAuthenticated, user, logout } = useAuth();
  const { items: cartItems } = useCart();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsDropdownOpen(false);
    logout();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">UrbanServe</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/services" className="text-slate-600 hover:text-blue-600 font-medium">Services</Link>
            <Link to="/offers" className="text-slate-600 hover:text-blue-600 font-medium">Offers</Link>
            <Link to="/vendor/login" className="text-slate-600 hover:text-blue-600 font-medium">Register as Professional</Link>
            
            {/* Cart Icon */}
            <Link to="/checkout" className="relative text-slate-600 hover:text-blue-600 transition">
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-200 transition"
                >
                  <User className="w-4 h-4" />
                  {user?.name || "Profile"}
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
                    <div className="px-4 py-3 border-b border-slate-100 mb-2">
                      <p className="text-sm font-semibold text-slate-900">{user?.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                    </div>
                    
                    <Link to="/profile" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">
                      <User className="w-4 h-4" /> My Profile
                    </Link>
                    <Link to="/profile/bookings" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">
                      <CalendarDays className="w-4 h-4" /> My Bookings
                    </Link>
                    <Link to="/profile/wallet" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">
                      <Wallet className="w-4 h-4" /> Wallet & Payments
                    </Link>
                    <Link to="/profile/help" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">
                      <LifeBuoy className="w-4 h-4" /> Help Center
                    </Link>
                    
                    <div className="h-px bg-slate-100 my-2"></div>
                    
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                Login
              </Link>
            )}
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
