import React, { useState } from "react";
import { Briefcase, CheckCircle, Shield, TrendingUp, Upload, ChevronRight, ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export function VendorRegisterPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    skills: "",
    city: "",
    aadhaar: null as File | null,
    pan: null as File | null,
    bankAccount: "",
    ifsc: "",
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'aadhaar' | 'pan') => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, [field]: e.target.files[0] });
      toast.success(`${field.toUpperCase()} uploaded successfully`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! Redirecting to login...");
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

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
          <div className="p-8 md:p-12 flex flex-col justify-center overflow-y-auto max-h-[90vh]">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Partner Account</h2>
              <p className="text-slate-600">Step {step} of 4</p>
              
              <div className="w-full bg-slate-200 h-2 rounded-full mt-4">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            <form className="space-y-5" onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
              
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <h3 className="font-bold text-lg text-slate-800">Basic Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input required type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input required type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
              )}

              {/* Step 2: Professional Details */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <h3 className="font-bold text-lg text-slate-800">Professional Details</h3>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Primary Service Category</label>
                    <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white">
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
                    <label className="block text-sm font-medium text-slate-700 mb-1">Skills & Expertise</label>
                    <input required type="text" value={formData.skills} onChange={e => setFormData({...formData, skills: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="e.g. AC Repair, Deep Cleaning (comma separated)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Service Area (City)</label>
                    <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="e.g. New York, Brooklyn" />
                  </div>
                </div>
              )}

              {/* Step 3: KYC Upload */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <h3 className="font-bold text-lg text-slate-800">KYC Verification</h3>
                  <p className="text-sm text-slate-500 mb-4">Please upload valid government ID for background verification.</p>
                  
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 transition cursor-pointer relative">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => handleFileChange(e, 'aadhaar')} accept="image/*,.pdf" />
                    <Upload className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                    <p className="font-medium text-slate-700">{formData.aadhaar ? formData.aadhaar.name : "Upload Aadhaar / ID Card"}</p>
                    <p className="text-xs text-slate-500 mt-1">JPEG, PNG, or PDF up to 5MB</p>
                  </div>
                  
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 transition cursor-pointer relative">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => handleFileChange(e, 'pan')} accept="image/*,.pdf" />
                    <Upload className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                    <p className="font-medium text-slate-700">{formData.pan ? formData.pan.name : "Upload PAN / Tax ID"}</p>
                    <p className="text-xs text-slate-500 mt-1">JPEG, PNG, or PDF up to 5MB</p>
                  </div>
                </div>
              )}

              {/* Step 4: Bank Details */}
              {step === 4 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <h3 className="font-bold text-lg text-slate-800">Bank Details for Payouts</h3>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Account Number</label>
                    <input required type="text" value={formData.bankAccount} onChange={e => setFormData({...formData, bankAccount: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Enter Account Number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Routing Number / IFSC</label>
                    <input required type="text" value={formData.ifsc} onChange={e => setFormData({...formData, ifsc: e.target.value})} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Enter Routing/IFSC Code" />
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <button type="button" onClick={prevStep} className="flex-1 bg-white border border-slate-300 text-slate-700 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-50 transition shadow-sm flex items-center justify-center gap-2">
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                )}
                <button type="submit" className="flex-[2] bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl hover:bg-blue-700 transition shadow-sm flex items-center justify-center gap-2">
                  {step === 4 ? "Submit Application" : "Continue"} {step < 4 && <ChevronRight className="w-5 h-5" />}
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-slate-600">
              Already have a partner account?{" "}
              <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-800">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
