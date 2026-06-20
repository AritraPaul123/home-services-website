import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';
import { Search, MessageSquarePlus, PhoneCall, Mail } from 'lucide-react';
import { toast } from 'sonner';

export const HelpCenterPage = () => {
  const [complaint, setComplaint] = useState({ subject: '', message: '', bookingId: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRaiseTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!complaint.subject || !complaint.message) {
      toast.error('Please fill all required fields');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      toast.success('Support ticket raised successfully! We will get back to you shortly.');
      setComplaint({ subject: '', message: '', bookingId: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const faqs = [
    { q: 'How do I reschedule a booking?', a: 'You can reschedule your booking from the "My Bookings" section up to 4 hours before the scheduled time without any penalty.' },
    { q: 'When will I get my refund?', a: 'Refunds for cancelled bookings are typically processed within 5-7 business days to your original payment method or instantly to your wallet.' },
    { q: 'How are professionals vetted?', a: 'All our professionals undergo a strict background check, skill assessment, and document verification before joining our platform.' },
    { q: 'Can I choose my professional?', a: 'Currently, the system automatically assigns the best-rated available professional for your area and time slot to ensure timely service.' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Help Center</h2>
        <p className="text-gray-500">Find answers or reach out to our support team.</p>
      </div>

      <div className="relative max-w-2xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input placeholder="Search for help topics..." className="pl-10 h-12 text-base" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquarePlus className="w-5 h-5 text-blue-600" />
                Raise a Complaint / Ticket
              </CardTitle>
              <CardDescription>Experiencing an issue? Let us know and we'll fix it.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRaiseTicket} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject *</label>
                    <Input 
                      placeholder="E.g. Professional was late" 
                      value={complaint.subject}
                      onChange={(e) => setComplaint({...complaint, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Booking ID (Optional)</label>
                    <Input 
                      placeholder="E.g. BKG-10492" 
                      value={complaint.bookingId}
                      onChange={(e) => setComplaint({...complaint, bookingId: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea 
                    placeholder="Describe your issue in detail..." 
                    className="min-h-[120px]"
                    value={complaint.message}
                    onChange={(e) => setComplaint({...complaint, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Call Us</h3>
                <p className="text-sm text-slate-600 mb-2">Mon-Sun, 8 AM - 10 PM</p>
                <a href="tel:18001234567" className="text-blue-600 font-bold text-lg hover:underline">1-800-123-4567</a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email Support</h3>
                <p className="text-sm text-slate-600 mb-2">We reply within 24 hours</p>
                <a href="mailto:support@homeservices.com" className="text-blue-600 font-bold hover:underline break-all">support@homeservices.com</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
