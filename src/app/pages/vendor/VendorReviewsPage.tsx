import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Star, MessageCircle, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

export function VendorReviewsPage() {
  const [reviews, setReviews] = useState([
    { id: 1, customer: "Alice Brown", rating: 5, date: "Oct 12, 2023", service: "Deep AC Cleaning", comment: "Excellent work! Very professional.", isComplaint: false, reply: "" },
    { id: 2, customer: "Tom Wilson", rating: 4, date: "Oct 10, 2023", service: "AC Gas Top-up", comment: "Good service but arrived 15 mins late.", isComplaint: false, reply: "" },
    { id: 3, customer: "David Lee", rating: 2, date: "Oct 05, 2023", service: "Split AC Installation", comment: "The cooling isn't as expected after installation.", isComplaint: true, reply: "" },
  ]);

  const handleReply = (id: number, text: string) => {
    if (!text.trim()) return toast.error("Reply cannot be empty.");
    setReviews(reviews.map(r => r.id === id ? { ...r, reply: text } : r));
    toast.success("Reply submitted successfully!");
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Ratings & Reviews</h1>
          <p className="text-slate-500 text-sm mt-1">View customer feedback and manage complaints.</p>
        </div>
      </div>

      {/* Summary Card */}
      <Card>
        <CardContent className="pt-6 flex items-center justify-around text-center">
          <div>
            <p className="text-5xl font-extrabold text-blue-900">4.8</p>
            <div className="flex text-yellow-400 mt-2 justify-center">
              {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'fill-slate-200 text-slate-200'}`} />)}
            </div>
            <p className="text-slate-500 text-sm mt-1">Average Rating</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-slate-200"></div>
          <div>
            <p className="text-3xl font-bold text-slate-800">124</p>
            <p className="text-slate-500 text-sm mt-1">Total Reviews</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-slate-200"></div>
          <div>
            <p className="text-3xl font-bold text-red-600">1</p>
            <p className="text-slate-500 text-sm mt-1">Active Complaints</p>
          </div>
        </CardContent>
      </Card>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map(review => (
          <Card key={review.id} className={review.isComplaint ? 'border-red-200' : ''}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">{review.customer}</h3>
                    {review.isComplaint && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Complaint
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">{review.service} • {review.date}</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'fill-slate-200 text-slate-200'}`} />)}
                </div>
              </div>
              
              <p className="text-slate-700">{review.comment}</p>
              
              {review.reply ? (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                  <p className="text-xs font-bold text-blue-900 mb-1 flex items-center gap-1"><MessageCircle className="w-3 h-3" /> Your Reply</p>
                  <p className="text-sm text-blue-800">{review.reply}</p>
                </div>
              ) : (
                <form 
                  className="mt-4 flex gap-2" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = (e.target as HTMLFormElement).elements.namedItem('reply') as HTMLInputElement;
                    handleReply(review.id, input.value);
                  }}
                >
                  <input name="reply" type="text" placeholder="Reply to this review..." className="flex-1 px-3 py-2 border rounded-lg text-sm outline-none focus:border-blue-500" />
                  <Button type="submit" size="sm" variant={review.isComplaint ? 'destructive' : 'secondary'}>
                    Reply
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
