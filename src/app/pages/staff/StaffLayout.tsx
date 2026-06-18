import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, Users, CalendarCheck, PhoneCall, Headphones, LogOut } from "lucide-react";

export function StaffLayout() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/staff", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Bookings", path: "/staff/bookings", icon: <CalendarCheck className="w-5 h-5" /> },
    { name: "Professionals", path: "/staff/professionals", icon: <Users className="w-5 h-5" /> },
    { name: "Support Calls", path: "/staff/calls", icon: <PhoneCall className="w-5 h-5" /> },
    { name: "Complaints", path: "/staff/complaints", icon: <Headphones className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-teal-900 text-white flex flex-col">
        <div className="p-6">
          <Link to="/" className="text-2xl font-bold text-teal-300">UrbanServe Staff</Link>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-teal-700 text-white' : 'text-teal-200 hover:bg-teal-800 hover:text-white'}`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-teal-800">
          <div className="flex items-center gap-3 mb-4 px-4">
             <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center font-bold">
               EM
             </div>
             <div>
               <p className="font-bold text-sm">Emma Manager</p>
               <p className="text-xs text-teal-300">Support Staff</p>
             </div>
          </div>
          <button className="flex items-center gap-3 px-4 py-3 text-teal-200 hover:text-red-300 transition-colors w-full">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white border-b h-16 flex items-center px-8 justify-between shrink-0">
          <h2 className="text-xl font-semibold">Staff Dashboard</h2>
        </header>
        <div className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
