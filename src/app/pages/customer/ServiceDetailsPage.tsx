import { Star, Clock, Shield, CheckCircle, XCircle } from "lucide-react";
import { useParams, Link } from "react-router";

export function ServiceDetailsPage() {
  const { id } = useParams();
  
  // Mock data
  const service = {
    id,
    title: "Deep Home Cleaning",
    category: "Cleaning",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    reviews: 320,
    time: "4-5 hours",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=600&fit=crop",
    description: "Complete deep cleaning of your entire home, including hard-to-reach areas, appliances, and fixtures. We use eco-friendly products safe for kids and pets.",
    includes: [
      "Floor scrubbing and mopping",
      "Dusting of all surfaces and furniture",
      "Window and glass cleaning",
      "Kitchen appliances exterior cleaning",
      "Bathroom deep cleaning and sanitization"
    ],
    excludes: [
      "Cleaning inside the refrigerator",
      "Washing of clothes or dishes",
      "Deep upholstery cleaning (available as add-on)"
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="h-64 md:h-96 w-full relative">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 pb-8 w-full">
            <span className="text-white bg-blue-600 px-3 py-1 rounded-md text-sm font-bold uppercase mb-4 inline-block">{service.category}</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">{service.title}</h1>
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-1 font-bold">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                {service.rating} <span className="text-slate-300 font-normal">({service.reviews} reviews)</span>
              </div>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5" />
                <span>{service.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-[2] space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About this service</h2>
            <p className="text-slate-600 leading-relaxed">{service.description}</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> What's Included
              </h3>
              <ul className="space-y-3">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-green-700 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> What's Excluded
              </h3>
              <ul className="space-y-3">
                {service.excludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-red-700 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Sidebar / Checkout Card */}
        <div className="flex-1">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">${service.price} <span className="text-lg text-slate-400 line-through">${service.originalPrice}</span></h3>
            <p className="text-green-600 font-medium text-sm mb-6">You save ${service.originalPrice - service.price}!</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>UrbanServe Guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>{service.time} estimated</span>
              </div>
            </div>

            <Link to="/checkout" className="w-full block text-center bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition shadow-md hover:shadow-lg">
              Book Now
            </Link>
            <p className="text-center text-xs text-slate-400 mt-4">You won't be charged yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
