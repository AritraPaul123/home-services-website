import { Plus, Search, Filter, Edit, Trash2 } from "lucide-react";

const SERVICES = [
  { id: 1, name: "Deep Home Cleaning", category: "Cleaning", price: 149, time: "4-5 hours", status: "Active" },
  { id: 2, name: "AC Service & Repair", category: "Appliances", price: 49, time: "1 hour", status: "Active" },
  { id: 3, name: "Plumbing Repair", category: "Repair", price: 69, time: "1-2 hours", status: "Active" },
  { id: 4, name: "Sofa Cleaning", category: "Cleaning", price: 65, time: "2 hours", status: "Inactive" },
];

export function AdminServicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-800">Services Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add New Service
        </button>
      </div>

      <div className="flex gap-4 mb-6">
         <div className="flex-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium">Total Services</p>
              <h3 className="text-2xl font-bold text-slate-800">45</h3>
            </div>
         </div>
         <div className="flex-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium">Active Categories</p>
              <h3 className="text-2xl font-bold text-slate-800">12</h3>
            </div>
         </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
           <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search services..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 border border-slate-300 bg-white rounded-lg hover:bg-slate-50 flex items-center gap-2 text-sm font-medium text-slate-600">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm">
              <tr>
                <th className="p-4 font-medium">Service Name</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Est. Time</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {SERVICES.map((service) => (
                <tr key={service.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-800">{service.name}</td>
                  <td className="p-4 text-slate-600">
                     <span className="px-2 py-1 bg-slate-100 rounded text-xs">{service.category}</span>
                  </td>
                  <td className="p-4 font-medium text-slate-800">${service.price}</td>
                  <td className="p-4 text-slate-600">{service.time}</td>
                  <td className="p-4">
                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${service.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                       {service.status}
                     </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
