import { Search, Star, MapPin, Shield, Clock } from "lucide-react";

const CATEGORIES = [
  { name: "Cleaning", icon: "🧹", color: "bg-blue-100" },
  { name: "Repair", icon: "🔧", color: "bg-orange-100" },
  { name: "Salon", icon: "💇‍♀️", color: "bg-pink-100" },
  { name: "Plumbing", icon: "🚰", color: "bg-cyan-100" },
  { name: "Electrician", icon: "⚡", color: "bg-yellow-100" },
  { name: "Painting", icon: "🎨", color: "bg-purple-100" },
  { name: "Pest Control", icon: "🐜", color: "bg-green-100" },
  { name: "Appliances", icon: "📺", color: "bg-red-100" },
];

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Home services, <span className="text-blue-400">on demand.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Book trusted, background-verified professionals for all your home needs.
          </p>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-2 flex flex-col md:flex-row gap-2 shadow-2xl">
            <div className="flex-1 flex items-center px-4 bg-slate-50 rounded-lg border border-slate-200">
              <MapPin className="text-slate-400 w-5 h-5" />
              <select className="w-full bg-transparent text-slate-700 p-3 outline-none cursor-pointer">
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Houston</option>
              </select>
            </div>
            <div className="flex-[2] flex items-center px-4 bg-slate-50 rounded-lg border border-slate-200">
              <Search className="text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for 'AC Repair' or 'Cleaning'..." 
                className="w-full bg-transparent text-slate-700 p-3 outline-none"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3 text-slate-700 font-medium">
            <div className="bg-green-100 p-2 rounded-full"><Shield className="w-5 h-5 text-green-600" /></div>
            Verified Professionals
          </div>
          <div className="flex items-center gap-3 text-slate-700 font-medium">
            <div className="bg-blue-100 p-2 rounded-full"><Star className="w-5 h-5 text-blue-600" /></div>
            High Quality Service
          </div>
          <div className="flex items-center gap-3 text-slate-700 font-medium">
            <div className="bg-orange-100 p-2 rounded-full"><Clock className="w-5 h-5 text-orange-600" /></div>
            On-time Guarantee
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">What are you looking for?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 cursor-pointer flex flex-col items-center justify-center gap-4 group">
              <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="font-semibold text-slate-800">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
