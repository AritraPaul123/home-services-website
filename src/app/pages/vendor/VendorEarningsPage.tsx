import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { DollarSign, TrendingUp, Calendar, CreditCard, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

const PAYOUT_HISTORY = [
  { id: 'WD-1002', date: 'Oct 15, 2023', amount: 450, status: 'Completed' },
  { id: 'WD-1001', date: 'Oct 01, 2023', amount: 620, status: 'Completed' },
];

export function VendorEarningsPage() {
  const [balance, setBalance] = useState(340);
  const [history, setHistory] = useState(PAYOUT_HISTORY);
  
  const handlePayoutRequest = () => {
    if (balance < 50) {
      toast.error('Minimum payout amount is $50.');
      return;
    }
    const newRequest = {
      id: `WD-${Math.floor(Math.random() * 10000)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      amount: balance,
      status: 'Pending'
    };
    setHistory([newRequest, ...history]);
    setBalance(0);
    toast.success('Payout request submitted successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Earnings Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Track your earnings and manage payouts.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Balance Card */}
        <Card className="md:col-span-1 bg-blue-900 text-white">
          <CardContent className="pt-6">
            <p className="text-blue-200 font-medium mb-2">Available Balance</p>
            <h2 className="text-4xl font-bold mb-6">${balance}.00</h2>
            <Button onClick={handlePayoutRequest} className="w-full bg-white text-blue-900 hover:bg-slate-100 font-bold">
              Request Payout
            </Button>
            <p className="text-xs text-blue-300 mt-3 text-center">Minimum payout: $50</p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-full"><DollarSign className="w-6 h-6" /></div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Daily Earning</p>
                  <h3 className="text-2xl font-bold">$120.00</h3>
                </div>
              </div>
              <p className="text-sm text-green-600 flex items-center gap-1 font-medium"><TrendingUp className="w-4 h-4"/> +15% from yesterday</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full"><Calendar className="w-6 h-6" /></div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Weekly Earning</p>
                  <h3 className="text-2xl font-bold">$840.00</h3>
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Oct 16 - Oct 22</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-full"><CreditCard className="w-6 h-6" /></div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Monthly Earning</p>
                  <h3 className="text-2xl font-bold">$3,240.00</h3>
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium">October 2023</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Payout History */}
        <Card>
          <CardHeader>
            <CardTitle>Payout History</CardTitle>
          </CardHeader>
          <CardContent>
            {history.length === 0 ? (
              <p className="text-slate-500 text-center py-4">No payout history found.</p>
            ) : (
              <div className="space-y-4">
                {history.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-4 border rounded-xl bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">Withdrawal to Bank</p>
                        <p className="text-xs text-slate-500">{item.date} • {item.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">${item.amount}.00</p>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Earning Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Earnings Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end gap-2 justify-between pt-8 border-b pb-2">
              {/* Mock Bars */}
              {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                <div key={i} className="w-full bg-blue-100 hover:bg-blue-200 transition rounded-t-sm relative group" style={{ height: `${h}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    ${h * 2}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
