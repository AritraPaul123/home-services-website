import { Star, CheckCircle } from "lucide-react";

const REVIEWS = [
  { id: 1, name: "Sarah Johnson", service: "Deep Home Cleaning", rating: 5, date: "June 18, 2026", text: "The cleaning service was impeccable! The professionals were polite, very thorough, and respectful of my property. Highly recommend them." },
  { id: 2, name: "Michael Chen", service: "Electrical Repair", rating: 5, date: "June 15, 2026", text: "Booked an electrician for an emergency repair. He arrived within an hour and fixed the short circuit perfectly. Lifesavers!" },
  { id: 3, name: "Emma Davis", service: "Plumbing Basics", rating: 4, date: "June 10, 2026", text: "The app is so easy to use. The plumber arrived on time and fixed the leaky faucet in 20 minutes. Just a bit pricey, but worth the convenience." },
  { id: 4, name: "David Wilson", service: "AC Service & Repair", rating: 5, date: "June 05, 2026", text: "Excellent AC service. The technician cleaned the filters, checked the gas levels, and left the room cooling like new. Great experience." },
  { id: 5, name: "Jessica Brown", service: "Interior Painting", rating: 5, date: "May 28, 2026", text: "We hired UrbanServe for painting our living room. The painters were professional, covered all furniture properly, and did a flawless job." },
  { id: 6, name: "James Taylor", service: "Pest Control", rating: 4, date: "May 20, 2026", text: "Very effective termite control service. The smell was a bit strong for the first day, but we haven't seen a single bug since." },
];

export function ReviewsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Customer Reviews</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Read what thousands of satisfied customers have to say about our services and professionals.
          </p>
          
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-center">
              <div className="text-5xl font-black text-slate-900 mb-2">4.8</div>
              <div className="flex gap-1 justify-center mb-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <div className="text-sm text-slate-500">Based on 12,450 reviews</div>
            </div>
            <div className="hidden md:block w-px h-24 bg-slate-200"></div>
            <div className="space-y-2 flex-1 w-full max-w-xs">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-3">
                  <div className="text-sm font-medium text-slate-600 w-3">{star}</div>
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400 rounded-full" 
                      style={{ width: star === 5 ? '85%' : star === 4 ? '10%' : '2%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-slate-200'}`} />
                  ))}
                </div>
                <div className="text-sm text-slate-500">{review.date}</div>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{review.service}</h3>
              <p className="text-slate-600 mb-6 line-clamp-4">"{review.text}"</p>
              
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="font-medium text-slate-800">{review.name}</div>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-md">
                  <CheckCircle className="w-3 h-3" /> Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
