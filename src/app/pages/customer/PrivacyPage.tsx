export function PrivacyPage() {
  return (
    <div className="min-h-[70vh] bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-600 mb-6">Last updated: June 20, 2026</p>
        
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-slate-700 mb-4">
          We collect personal information such as your name, contact details, service address, and payment information when you register or book a service on our platform.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-slate-700 mb-4">
          Your information is used to facilitate service bookings, communicate with you, process payments, and improve our services.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Information Sharing</h2>
        <p className="text-slate-700 mb-4">
          We share necessary information with our verified service professionals to enable them to fulfill your requested services. We do not sell your personal data to third parties.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Data Security</h2>
        <p className="text-slate-700 mb-4">
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
        </p>
      </div>
    </div>
  );
}
