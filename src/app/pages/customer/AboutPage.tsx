import { CheckCircle, Users, Shield, Target } from "lucide-react";

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">About UrbanServe</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            We're on a mission to empower local professionals and deliver top-notch home services to your doorstep.
          </p>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Simplifying Home Care</h2>
            <p className="text-slate-600 mb-4 text-lg">
              UrbanServe was founded with a simple idea: booking a reliable plumber, electrician, or cleaner should be as easy as ordering a ride or getting food delivered. 
            </p>
            <p className="text-slate-600 mb-8 text-lg">
              We vet every professional, standardize pricing, and back every booking with our satisfaction guarantee to ensure you get the best experience possible.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-extrabold text-blue-600 mb-2">50k+</div>
                <div className="text-slate-600 font-medium">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-600 mb-2">10k+</div>
                <div className="text-slate-600 font-medium">Verified Pros</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Our team" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customer First</h3>
              <p className="text-slate-600">Every decision we make is centered around improving the customer experience.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trust & Safety</h3>
              <p className="text-slate-600">We maintain rigorous standards for our professionals to ensure your peace of mind.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Empowering Pros</h3>
              <p className="text-slate-600">We provide independent professionals with the tools and platform to grow their business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
