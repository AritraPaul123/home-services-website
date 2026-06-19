export function TermsPage() {
  return (
    <div className="min-h-[70vh] bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms and Conditions</h1>
        <p className="text-slate-600 mb-6">Last updated: June 20, 2026</p>
        
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-slate-700 mb-4">
          By accessing and using UrbanServe, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not use our services.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Services</h2>
        <p className="text-slate-700 mb-4">
          UrbanServe provides a platform connecting customers with service professionals. We do not directly provide home services and are not liable for the actions or omissions of any service professional.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. User Responsibilities</h2>
        <p className="text-slate-700 mb-4">
          Users must provide accurate information when booking a service and ensure a safe environment for professionals to perform their work.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Modifications</h2>
        <p className="text-slate-700 mb-4">
          We reserve the right to modify these terms at any time. Continued use of the platform constitutes acceptance of updated terms.
        </p>
      </div>
    </div>
  );
}
