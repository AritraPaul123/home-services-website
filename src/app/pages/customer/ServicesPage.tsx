import { Search, Filter, Star } from "lucide-react";
import { Link } from "react-router";

const SERVICES = [
  { id: 1, title: "Deep Home Cleaning", category: "Cleaning", price: 149, rating: 4.8, reviews: 320, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop" },
  { id: 2, title: "AC Service & Repair", category: "Appliances", price: 49, rating: 4.7, reviews: 412, image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop" },
  { id: 3, title: "Bathroom Cleaning", category: "Cleaning", price: 89, rating: 4.6, reviews: 156, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=300&fit=crop" },
  { id: 4, title: "Pest Control (Termite)", category: "Pest Control", price: 199, rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1583095126868-2325c81f08fb?w=500&h=300&fit=crop" },
  { id: 5, title: "Men's Haircut & Grooming", category: "Salon", price: 29, rating: 4.5, reviews: 543, image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&h=300&fit=crop" },
  { id: 6, title: "Plumbing Repair", category: "Repair", price: 69, rating: 4.7, reviews: 231, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=300&fit=crop" },
];

export function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">All Services</h1>
          <p className="text-slate-500">Find the perfect professional for your needs.</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search services..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 border border-slate-300 bg-white rounded-lg hover:bg-slate-50 flex items-center gap-2">
            <Filter className="w-5 h-5" />
            <span className="hidden md:inline">Filters</span>
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <Link key={service.id} to={`/services/${service.id}`} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold uppercase text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{service.category}</span>
                <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {service.rating} <span className="text-slate-400 font-normal">({service.reviews})</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <div className="flex items-center justify-between mt-4">
                <p className="text-2xl font-bold text-slate-900">${service.price}</p>
                <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
