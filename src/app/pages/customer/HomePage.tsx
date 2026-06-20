import { Search, Star, MapPin, Shield, Clock, ArrowRight, Quote, Gift, CheckCircle, Flame } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

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

const POPULAR_SERVICES = [
  { name: "Deep Home Cleaning", price: "$149", rating: "4.9", reviews: "2.1k", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80" },
  { name: "AC Service & Repair", price: "$79", rating: "4.8", reviews: "1.5k", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80" },
  { name: "Plumbing Basics", price: "$49", rating: "4.7", reviews: "890", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80" },
  { name: "Interior Painting", price: "$299", rating: "4.9", reviews: "3.2k", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&q=80" },
];

const TESTIMONIALS = [
  { name: "Sarah Johnson", text: "The cleaning service was impeccable! The professionals were polite and very thorough. Highly recommend.", rating: 5 },
  { name: "Michael Chen", text: "Booked an electrician for an emergency repair. He arrived within an hour and fixed it perfectly.", rating: 5 },
  { name: "Emma Davis", text: "The app is so easy to use, and the service quality is top-notch. I've used them for both cleaning and plumbing.", rating: 4 },
];

const BLOG_POSTS = [
  { title: "10 Tips for a Cleaner Home", date: "June 15, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&q=80" },
  { title: "When to Call a Professional Plumber", date: "June 12, 2026", readTime: "4 min read", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80" },
  { title: "Seasonal AC Maintenance Guide", date: "June 08, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=500&q=80" },
];

export function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/services");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for 'AC Repair' or 'Cleaning'..." 
                className="w-full bg-transparent text-slate-700 p-3 outline-none"
              />
            </div>
            <button 
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Festival Offer Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-4 px-4 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Gift className="w-8 h-8 animate-bounce" />
            <div>
              <h3 className="font-bold text-lg">Summer Festival Mega Sale!</h3>
              <p className="text-orange-100 text-sm">Get up to 50% off on all deep cleaning & AC repairs.</p>
            </div>
          </div>
          <Link to="/services?offer=summer" className="bg-white text-orange-600 font-bold px-6 py-2 rounded-full hover:bg-orange-50 transition shadow-md whitespace-nowrap">
            Claim Offer
          </Link>
        </div>
      </section>

      {/* Customer Quick Links Dashboard (Only visible when logged in) */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        {/* We use a client-side check if user is in localStorage to show a dashboard */}
        {localStorage.getItem('userAuth') && (
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              Welcome back! Quick Access
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Link to="/profile/bookings" className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition border border-slate-100">
                <span className="text-2xl mb-2">📅</span>
                <span className="text-sm font-semibold text-center">My Bookings</span>
              </Link>
              <Link to="/profile/wallet" className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition border border-slate-100">
                <span className="text-2xl mb-2">💳</span>
                <span className="text-sm font-semibold text-center">Wallet & Credit</span>
              </Link>
              <Link to="/profile/addresses" className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition border border-slate-100">
                <span className="text-2xl mb-2">📍</span>
                <span className="text-sm font-semibold text-center">Saved Addresses</span>
              </Link>
              <Link to="/profile/favorites" className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition border border-slate-100">
                <span className="text-2xl mb-2">❤️</span>
                <span className="text-sm font-semibold text-center">Favorites</span>
              </Link>
              <Link to="/profile/referrals" className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition border border-slate-100">
                <span className="text-2xl mb-2">🎁</span>
                <span className="text-sm font-semibold text-center">Refer & Earn</span>
              </Link>
              <Link to="/profile/help" className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition border border-slate-100">
                <span className="text-2xl mb-2">💬</span>
                <span className="text-sm font-semibold text-center">Help Center</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3 text-slate-700 font-medium">
            <div className="bg-green-100 p-3 rounded-full"><Shield className="w-6 h-6 text-green-600" /></div>
            <div>
              <div className="font-bold">Verified Pros</div>
              <div className="text-xs text-slate-500">Strict Background Checks</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-700 font-medium">
            <div className="bg-blue-100 p-3 rounded-full"><Star className="w-6 h-6 text-blue-600" /></div>
            <div>
              <div className="font-bold">High Quality</div>
              <div className="text-xs text-slate-500">Satisfaction Guaranteed</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-slate-700 font-medium">
            <div className="bg-orange-100 p-3 rounded-full"><Clock className="w-6 h-6 text-orange-600" /></div>
            <div>
              <div className="font-bold">On-time</div>
              <div className="text-xs text-slate-500">Punctual Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">What are you looking for?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <Link to={`/services?category=${cat.name}`} key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 cursor-pointer flex flex-col items-center justify-center gap-4 group">
              <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="font-semibold text-slate-800">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                <Flame className="w-8 h-8 text-orange-500" /> Popular Services
              </h2>
              <p className="text-slate-600 mt-2">Most booked services by customers this week</p>
            </div>
            <Link to="/services" className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-700">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_SERVICES.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition cursor-pointer group">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-800 line-clamp-1">{service.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-600 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{service.rating}</span>
                    <span>({service.reviews} reviews)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-lg text-slate-900">{service.price}</div>
                    <Link to="/services/1" className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">Don't just take our word for it. Hear from thousands of satisfied customers who trust UrbanServe.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="bg-blue-800 rounded-2xl p-6 relative">
                <Quote className="w-10 h-10 text-blue-700 absolute top-4 right-4 opacity-50" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className={`w-4 h-4 ${idx < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-blue-700'}`} />
                  ))}
                </div>
                <p className="text-blue-50 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-blue-300 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Verified Customer
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Home Care Tips & Guides</h2>
              <p className="text-slate-600 mt-2">Expert advice for maintaining a beautiful home</p>
            </div>
            <Link to="/blog" className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-700">
              Read Blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <Link to="/blog" key={i} className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-2">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
