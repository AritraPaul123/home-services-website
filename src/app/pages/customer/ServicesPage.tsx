import { Search, Filter, Star, X } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import { useState, useEffect } from "react";

const SERVICES = [
  { id: 1, title: "Deep Home Cleaning", category: "Cleaning", price: 149, rating: 4.8, reviews: 320, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop" },
  { id: 2, title: "AC Service & Repair", category: "Appliances", price: 49, rating: 4.7, reviews: 412, image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop" },
  { id: 3, title: "Bathroom Cleaning", category: "Cleaning", price: 89, rating: 4.6, reviews: 156, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=300&fit=crop" },
  { id: 4, title: "Pest Control (Termite)", category: "Pest Control", price: 199, rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1583095126868-2325c81f08fb?w=500&h=300&fit=crop" },
  { id: 5, title: "Men's Haircut & Grooming", category: "Salon", price: 29, rating: 4.5, reviews: 543, image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&h=300&fit=crop" },
  { id: 6, title: "Plumbing Repair", category: "Repair", price: 69, rating: 4.7, reviews: 231, image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=300&fit=crop" },
];

const CATEGORIES = ["All", "Cleaning", "Appliances", "Pest Control", "Salon", "Repair", "Painting", "Electrician"];

export function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get("category");
  const urlSearch = searchParams.get("search");

  const [searchQuery, setSearchQuery] = useState(urlSearch || "");
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || "All");
  const [showFilters, setShowFilters] = useState(false);

  // Sync state with URL changes
  useEffect(() => {
    setSearchQuery(urlSearch || "");
    setSelectedCategory(urlCategory || "All");
  }, [urlCategory, urlSearch]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("search", searchQuery.trim());
    if (selectedCategory && selectedCategory !== "All") params.set("category", selectedCategory);
    setSearchParams(params);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("search", searchQuery.trim());
    if (cat !== "All") params.set("category", cat);
    setSearchParams(params);
    setShowFilters(false);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSearchParams(new URLSearchParams());
  };

  const displayedServices = SERVICES.filter(s => {
    const matchesCategory = selectedCategory === "All" || s.category === selectedCategory;
    const matchesSearch = !urlSearch || 
      s.title.toLowerCase().includes(urlSearch.toLowerCase()) || 
      s.category.toLowerCase().includes(urlSearch.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {urlCategory && urlCategory !== "All" ? `${urlCategory} Services` : "All Services"}
          </h1>
          <p className="text-slate-500">Find the perfect professional for your needs.</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search services..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            onClick={handleSearch}
            className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Search
          </button>
          <div className="relative">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 border border-slate-300 bg-white rounded-lg hover:bg-slate-50 flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              <span className="hidden md:inline">Filters</span>
            </button>

            {/* Filter Dropdown */}
            {showFilters && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl z-10 overflow-hidden">
                <div className="p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                  <span className="font-bold text-slate-800">Categories</span>
                  <button onClick={() => setShowFilters(false)} className="text-slate-500 hover:text-slate-700">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="max-h-60 overflow-y-auto p-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 transition ${
                        selectedCategory === cat 
                          ? "bg-blue-50 text-blue-700 font-bold" 
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(urlSearch || (urlCategory && urlCategory !== "All")) && (
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <span className="text-sm text-slate-500 font-medium">Active Filters:</span>
          {urlSearch && (
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 border border-blue-100">
              "{urlSearch}"
              <X className="w-3 h-3 cursor-pointer hover:text-blue-900" onClick={() => {
                const params = new URLSearchParams(searchParams);
                params.delete("search");
                setSearchParams(params);
              }} />
            </span>
          )}
          {urlCategory && urlCategory !== "All" && (
            <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 border border-orange-100">
              {urlCategory}
              <X className="w-3 h-3 cursor-pointer hover:text-orange-900" onClick={() => {
                const params = new URLSearchParams(searchParams);
                params.delete("category");
                setSearchParams(params);
              }} />
            </span>
          )}
          <button onClick={clearFilters} className="text-sm text-slate-500 hover:text-slate-800 underline ml-2">
            Clear all
          </button>
        </div>
      )}

      {/* Services Grid */}
      {displayedServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => (
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
      ) : (
        <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-700 mb-2">No services found</h2>
          <p className="text-slate-500 mb-6">We couldn't find any services matching your search criteria.</p>
          <button onClick={clearFilters} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">
            Clear Filters & View All
          </button>
        </div>
      )}
    </div>
  );
}
