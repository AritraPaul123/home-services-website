import { useState } from "react";
import { Calendar as CalendarIcon, Clock, CreditCard, Banknote, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

export function CheckoutPage() {
  const [step, setStep] = useState(1); // 1: Schedule, 2: Address, 3: Payment
  const [paymentMethod, setPaymentMethod] = useState("online");

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        
        {/* Main Content - Left Side */}
        <div className="flex-[2] space-y-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Checkout</h1>

          {/* Step 1: Schedule */}
          <div className={`bg-white border ${step === 1 ? 'border-blue-500 shadow-md ring-1 ring-blue-500' : 'border-slate-200'} rounded-2xl p-6 transition-all`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span> 
                Select Schedule
              </h2>
              {step > 1 && <button onClick={() => setStep(1)} className="text-blue-600 text-sm font-medium hover:underline">Edit</button>}
            </div>
            
            {step === 1 ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">Select Date</label>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {['Today', 'Tomorrow', 'Oct 26', 'Oct 27', 'Oct 28'].map((day, i) => (
                      <button key={i} className={`shrink-0 px-6 py-3 rounded-xl border ${i === 1 ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-slate-300'} font-medium transition-colors`}>
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">Select Time</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'].map((time, i) => (
                      <button key={i} className={`px-4 py-3 rounded-xl border ${i === 2 ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-slate-300'} text-sm font-medium transition-colors`}>
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                <button onClick={() => setStep(2)} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                  Continue to Address
                </button>
              </div>
            ) : (
              <div className="text-slate-600 flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-blue-600" /> Tomorrow, Oct 25 
                <span className="mx-2">•</span> 
                <Clock className="w-5 h-5 text-blue-600" /> 01:00 PM
              </div>
            )}
          </div>

          {/* Step 2: Address */}
          <div className={`bg-white border ${step === 2 ? 'border-blue-500 shadow-md ring-1 ring-blue-500' : 'border-slate-200'} rounded-2xl p-6 transition-all ${step < 2 && 'opacity-50 pointer-events-none'}`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full ${step >= 2 ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'} flex items-center justify-center text-sm`}>2</span> 
                Service Address
              </h2>
              {step > 2 && <button onClick={() => setStep(2)} className="text-blue-600 text-sm font-medium hover:underline">Edit</button>}
            </div>

            {step === 2 ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-blue-600 bg-blue-50 rounded-xl p-4 cursor-pointer relative">
                    <div className="absolute top-4 right-4 w-5 h-5 rounded-full border-4 border-blue-600 bg-white"></div>
                    <span className="inline-block px-2 py-1 bg-blue-200 text-blue-800 text-xs font-bold rounded mb-2 uppercase">Home</span>
                    <p className="font-bold text-slate-900">John Doe</p>
                    <p className="text-slate-600 text-sm mt-1">123 Main Street, Apt 4B<br/>New York, NY 10001</p>
                    <p className="text-slate-600 text-sm mt-2">+1 (555) 123-4567</p>
                  </div>
                  <div className="border border-slate-200 hover:border-slate-300 rounded-xl p-4 cursor-pointer flex flex-col items-center justify-center gap-2 text-slate-500 transition-colors">
                    <span className="text-2xl">+</span>
                    <span className="font-medium">Add New Address</span>
                  </div>
                </div>
                <button onClick={() => setStep(3)} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                  Proceed to Payment
                </button>
              </div>
            ) : step > 2 ? (
              <div className="text-slate-600">
                <span className="font-bold text-slate-900">Home:</span> 123 Main Street, Apt 4B, New York, NY 10001
              </div>
            ) : null}
          </div>

          {/* Step 3: Payment */}
          <div className={`bg-white border ${step === 3 ? 'border-blue-500 shadow-md ring-1 ring-blue-500' : 'border-slate-200'} rounded-2xl p-6 transition-all ${step < 3 && 'opacity-50 pointer-events-none'}`}>
            <h2 className="text-xl font-bold flex items-center gap-3 mb-6">
              <span className={`w-8 h-8 rounded-full ${step >= 3 ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'} flex items-center justify-center text-sm`}>3</span> 
              Payment Options
            </h2>
            
            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-colors ${paymentMethod === 'online' ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                    <div className="flex items-center gap-4">
                      <CreditCard className={`w-6 h-6 ${paymentMethod === 'online' ? 'text-blue-600' : 'text-slate-400'}`} />
                      <div>
                        <p className="font-bold text-slate-900">Pay Online</p>
                        <p className="text-xs text-slate-500">Credit/Debit Card, UPI, Wallets</p>
                      </div>
                    </div>
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'online'} 
                      onChange={() => setPaymentMethod('online')} 
                      className="w-5 h-5 accent-blue-600"
                    />
                  </label>

                  <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-colors ${paymentMethod === 'cash' ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                    <div className="flex items-center gap-4">
                      <Banknote className={`w-6 h-6 ${paymentMethod === 'cash' ? 'text-blue-600' : 'text-slate-400'}`} />
                      <div>
                        <p className="font-bold text-slate-900">Cash on Service</p>
                        <p className="text-xs text-slate-500">Pay directly to the professional</p>
                      </div>
                    </div>
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'cash'} 
                      onChange={() => setPaymentMethod('cash')} 
                      className="w-5 h-5 accent-blue-600"
                    />
                  </label>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-slate-500 text-sm">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  Payments are 100% secure and encrypted.
                </div>

                <Link to="/booking-success" className="block w-full text-center py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-colors text-lg shadow-lg">
                  Confirm Booking • $149.00
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Right Side Summary */}
        <div className="flex-1">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-24">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Booking Summary</h3>
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="font-bold text-slate-800">Deep Home Cleaning</h4>
                <p className="text-sm text-slate-500">4-5 hours</p>
              </div>
              <p className="font-bold text-slate-900">$149.00</p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Item Total</span>
                <span>$149.00</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>Taxes & Fee</span>
                <span>$12.50</span>
              </div>
              <div className="flex justify-between text-sm text-green-600">
                <span>Discount Applied</span>
                <span>-$12.50</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 flex justify-between items-center">
              <span className="font-bold text-lg text-slate-900">Amount to Pay</span>
              <span className="font-bold text-2xl text-slate-900">$149.00</span>
            </div>
            
            <div className="mt-6">
              <div className="flex relative">
                <input type="text" placeholder="Coupon code" className="w-full border border-slate-300 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500" />
                <button className="bg-slate-900 text-white px-4 py-2 rounded-r-lg text-sm font-bold">Apply</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
