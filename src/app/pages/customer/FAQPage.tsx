import { ChevronDown, Mail, Phone, MapPin } from "lucide-react";

export function FAQPage() {
  const faqs = [
    {
      question: "How do I book a service?",
      answer: "You can book a service by browsing our categories, selecting the specific service you need, picking a date and time, and confirming your booking."
    },
    {
      question: "Are your professionals verified?",
      answer: "Yes, all our professionals undergo a strict background check and skills verification process before they are allowed to take bookings."
    },
    {
      question: "What happens if I'm not satisfied with the service?",
      answer: "We offer a satisfaction guarantee. If you're not happy with the service provided, please contact us within 24 hours and we will arrange a rework or a refund."
    },
    {
      question: "Can I reschedule or cancel my booking?",
      answer: "Yes, you can reschedule or cancel for free up to 2 hours before the scheduled service time. Late cancellations may incur a fee."
    },
    {
      question: "How do I pay for the service?",
      answer: "You can pay securely online using credit/debit cards, or other supported digital payment methods after the service is completed."
    }
  ];

  return (
    <div className="min-h-[70vh] bg-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-slate-600 mb-12 text-center text-lg">Have questions? We're here to help.</p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-800 text-lg">
                <span>{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </span>
              </summary>
              <div className="text-slate-600 px-6 pb-6 pt-0">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Still have questions?</h2>
          <p className="text-slate-600 mb-6">If you cannot find the answer to your question in our FAQ, you can always contact us.</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
