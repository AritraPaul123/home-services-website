import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, CheckSquare, Wallet, Calendar, Bell, LogOut } from "lucide-react";

export function VendorLayout() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/vendor", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "My Jobs", path: "/vendor/jobs", icon: <CheckSquare className="w-5 h-5" /> },
    { name: "Earnings", path: "/vendor/earnings", icon: <Wallet className="w-5 h-5" /> },
    { name: "Availability", path: "/vendor/calendar", icon: <Calendar className="w-5 h-5" /> },
    { name: "Notifications", path: "/vendor/notifications", icon: <Bell className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6">
          <Link to="/" className="text-2xl font-bold text-white">UrbanServe Pro</Link>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-800 text-white' : 'text-blue-200 hover:bg-blue-800 hover:text-white'}`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-blue-800">
          <div className="flex items-center gap-3 mb-4 px-4">
             <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center font-bold">
               JS
             </div>
             <div>
               <p className="font-bold text-sm">John Smith</p>
               <p className="text-xs text-blue-300">AC Technician</p>
             </div>
          </div>
          <button className="flex items-center gap-3 px-4 py-3 text-blue-200 hover:text-red-300 transition-colors w-full">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white border-b h-16 flex items-center px-8 justify-between shrink-0">
          <h2 className="text-xl font-semibold">Partner Dashboard</h2>
          <div className="flex items-center gap-4">
             <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-600 block"></span> Available
             </span>
          </div>
        </header>
        <div className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
