import { Gift, Percent, Tag, Clock } from "lucide-react";
import { Link } from "react-router";

const OFFERS = [
  {
    id: 1,
    title: "Summer Festival Mega Sale",
    description: "Get up to 50% off on all deep cleaning & AC repairs to beat the heat this summer.",
    code: "SUMMER50",
    validUntil: "August 31, 2026",
    color: "from-orange-500 to-red-500",
    icon: <Gift className="w-8 h-8 text-white" />
  },
  {
    id: 2,
    title: "New User Discount",
    description: "First time booking a service with us? Enjoy a flat 20% discount on your first booking.",
    code: "WELCOME20",
    validUntil: "Valid for 1st booking",
    color: "from-blue-500 to-cyan-500",
    icon: <Percent className="w-8 h-8 text-white" />
  },
  {
    id: 3,
    title: "Weekend Plumbing Special",
    description: "Book any plumbing service for the weekend and get a free inspection.",
    code: "WEEKENDPLUMB",
    validUntil: "June 28, 2026",
    color: "from-green-500 to-emerald-600",
    icon: <Tag className="w-8 h-8 text-white" />
  }
];

export function OffersPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Exclusive Offers & Promotions</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Save big on your next home service with our curated deals and festival discounts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <div key={offer.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group relative flex flex-col">
              <div className={`p-8 bg-gradient-to-br ${offer.color}`}>
                <div className="flex justify-between items-start mb-4">
                  {offer.icon}
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    Limited Time
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <p className="text-slate-600 mb-6 flex-1">
                  {offer.description}
                </p>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Promo Code</div>
                    <div className="text-lg font-black text-slate-900 tracking-wider">{offer.code}</div>
                  </div>
                  <button 
                    className="text-blue-600 font-bold hover:text-blue-800 transition"
                    onClick={() => {
                      navigator.clipboard.writeText(offer.code);
                      alert("Code copied to clipboard!");
                    }}
                  >
                    Copy
                  </button>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1 text-sm text-slate-500 font-medium">
                    <Clock className="w-4 h-4" />
                    Ends: {offer.validUntil}
                  </div>
                  <Link to="/services" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
