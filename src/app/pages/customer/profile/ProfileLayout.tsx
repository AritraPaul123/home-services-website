import React from 'react';
import { Outlet, NavLink } from 'react-router';
import { useAuth } from '../../../context/AuthContext';
import { 
  User, 
  MapPin, 
  CalendarDays, 
  Wallet, 
  Bell, 
  Heart, 
  Gift, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';
import { Button } from '../../../components/ui/button';

export const ProfileLayout = () => {
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'My Profile', href: '/profile', icon: User, end: true },
    { name: 'Saved Addresses', href: '/profile/addresses', icon: MapPin },
    { name: 'My Bookings', href: '/profile/bookings', icon: CalendarDays },
    { name: 'Wallet & Payments', href: '/profile/wallet', icon: Wallet },
    { name: 'Notifications', href: '/profile/notifications', icon: Bell },
    { name: 'Favorite Services', href: '/profile/favorites', icon: Heart },
    { name: 'Payment History', href: '/profile/payments', icon: Wallet },
    { name: 'Refer & Earn', href: '/profile/referrals', icon: Gift },
    { name: 'Help Center', href: '/profile/help', icon: HelpCircle },
  ];

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Please login to view your profile</h2>
          <Button asChild>
            <NavLink to="/login">Go to Login</NavLink>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-lg border p-4 sticky top-24 shadow-sm">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.phone}</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </NavLink>
              ))}
              
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors mt-4"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 bg-white rounded-lg border p-6 shadow-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
