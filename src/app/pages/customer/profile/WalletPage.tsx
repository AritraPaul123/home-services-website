import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Wallet, Plus, ArrowUpRight, ArrowDownRight, CreditCard } from 'lucide-react';
import { format, subDays } from 'date-fns';

export const WalletPage = () => {
  const balance = 250.00;

  const transactions = [
    { id: 'TXN-101', type: 'credit', amount: 50.00, date: new Date(), description: 'Referral Bonus' },
    { id: 'TXN-102', type: 'debit', amount: 149.00, date: subDays(new Date(), 2), description: 'Deep Home Cleaning (BKG-10492)' },
    { id: 'TXN-103', type: 'credit', amount: 100.00, date: subDays(new Date(), 5), description: 'Added via Credit Card' },
    { id: 'TXN-104', type: 'debit', amount: 85.50, date: subDays(new Date(), 8), description: 'AC Repair & Service (BKG-98231)' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Wallet & Payments</h2>
        <p className="text-gray-500">Manage your credits and view payment history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white md:col-span-2">
          <CardContent className="p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <div className="flex items-center gap-2 text-slate-300 mb-2">
                  <Wallet className="w-5 h-5" />
                  <span className="font-medium">Available Balance</span>
                </div>
                <h3 className="text-4xl font-bold">${balance.toFixed(2)}</h3>
              </div>
              <Button className="bg-white text-slate-900 hover:bg-slate-100 gap-2 shrink-0">
                <Plus className="w-4 h-4" /> Add Money
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Saved Cards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded shadow-sm">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">•••• 4242</p>
                  <p className="text-xs text-slate-500">Expires 12/28</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
              + Add New Card
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-0">
            {transactions.map((txn, i) => (
              <div key={txn.id} className={`flex items-center justify-between p-4 ${i !== transactions.length - 1 ? 'border-b border-slate-100' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${txn.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {txn.type === 'credit' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{txn.description}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                      <span>{format(txn.date, 'MMM dd, yyyy • hh:mm a')}</span>
                      <span>•</span>
                      <span className="font-mono text-xs">{txn.id}</span>
                    </div>
                  </div>
                </div>
                <div className={`font-bold ${txn.type === 'credit' ? 'text-green-600' : 'text-slate-900'}`}>
                  {txn.type === 'credit' ? '+' : '-'}${txn.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
