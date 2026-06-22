import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Download } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { toast } from 'sonner';

export const PaymentHistoryPage = () => {
  const transactions = [
    {
      id: 'TXN-001',
      date: 'Oct 25, 2023',
      description: 'Deep Home Cleaning',
      amount: 149.00,
      status: 'Success',
    },
    {
      id: 'TXN-002',
      date: 'Sep 12, 2023',
      description: 'AC Repair & Service',
      amount: 85.50,
      status: 'Success',
    },
    {
      id: 'TXN-003',
      date: 'Aug 05, 2023',
      description: 'Wallet Recharge',
      amount: 50.00,
      status: 'Failed',
    }
  ];

  const handleDownloadInvoice = (txn: typeof transactions[0]) => {
    const content = `Invoice for Transaction #${txn.id}\nDate: ${txn.date}\nService: ${txn.description}\nAmount: $${txn.amount.toFixed(2)}\nStatus: ${txn.status}\n\nThank you for using UrbanServe!`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Invoice-${txn.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`Invoice for transaction ${txn.id} downloaded!`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Payment History</h2>
        <p className="text-gray-500">View your past transactions and download invoices.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          {transactions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                  <tr>
                    <th scope="col" className="px-6 py-3">Transaction ID</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Description</th>
                    <th scope="col" className="px-6 py-3">Amount</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((txn) => (
                    <tr key={txn.id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {txn.id}
                      </td>
                      <td className="px-6 py-4">{txn.date}</td>
                      <td className="px-6 py-4">{txn.description}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">${txn.amount.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          txn.status === 'Success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {txn.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {txn.status === 'Success' && (
                          <Button variant="ghost" size="sm" onClick={() => handleDownloadInvoice(txn)} className="text-blue-600">
                            <Download className="w-4 h-4 mr-2" />
                            Invoice
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">No transactions found.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
