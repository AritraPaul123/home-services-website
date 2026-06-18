import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, Users, Wrench, CalendarCheck, Settings, LogOut } from "lucide-react";

export function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Bookings", path: "/admin/bookings", icon: <CalendarCheck className="w-5 h-5" /> },
    { name: "Services", path: "/admin/services", icon: <Wrench className="w-5 h-5" /> },
    { name: "Users", path: "/admin/users", icon: <Users className="w-5 h-5" /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex bg-slate-100 text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6">
          <Link to="/" className="text-2xl font-bold text-blue-400">UrbanServe Admin</Link>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 transition-colors w-full">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="bg-white border-b h-16 flex items-center px-8 justify-between">
          <h2 className="text-xl font-semibold">Admin Panel</h2>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              AD
            </div>
          </div>
        </header>
        <div className="flex-1 p-8 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
