import { Briefcase, CheckCircle, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router";

export function VendorRegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          
          {/* Left Side: Information & Benefits */}
          <div className="bg-blue-900 text-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Grow your business with UrbanServe
            </h2>
            <p className="text-blue-200 text-lg mb-12">
              Join thousands of independent professionals who are earning more and managing their own schedule through our platform.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-3 rounded-xl"><TrendingUp className="w-6 h-6 text-blue-300" /></div>
                <div>
                  <h3 className="font-bold text-lg">Consistent Income</h3>
                  <p className="text-blue-200 text-sm">Get a steady stream of verified customers right in your area.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-3 rounded-xl"><Briefcase className="w-6 h-6 text-blue-300" /></div>
                <div>
                  <h3 className="font-bold text-lg">Be Your Own Boss</h3>
                  <p className="text-blue-200 text-sm">Choose your working hours and the jobs you want to take.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-3 rounded-xl"><Shield className="w-6 h-6 text-blue-300" /></div>
                <div>
                  <h3 className="font-bold text-lg">Secure Payments</h3>
                  <p className="text-blue-200 text-sm">No more chasing invoices. Get paid securely directly to your bank account.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-blue-800">
              <div className="flex items-center gap-2 text-sm text-blue-300">
                <CheckCircle className="w-4 h-4 text-green-400" /> Support team available 24/7
              </div>
            </div>
          </div>

          {/* Right Side: Registration Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Partner Account</h2>
              <p className="text-slate-600">Start your journey as a verified professional today.</p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="+1 (555) 000-0000" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Primary Service Category</label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white">
                  <option value="">Select a category...</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="painting">Painting</option>
                  <option value="salon">Salon</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">City/Location</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="e.g. New York" />
              </div>

              <button type="button" className="w-full bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl hover:bg-blue-700 transition shadow-sm mt-4 text-lg">
                Submit Application
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-600">
              Already have a partner account?{" "}
              <Link to="/vendor/login" className="font-semibold text-blue-600 hover:text-blue-800">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
