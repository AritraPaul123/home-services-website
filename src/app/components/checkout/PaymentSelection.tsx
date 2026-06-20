import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CreditCard, Banknote, Wallet } from 'lucide-react';

export type PaymentMethod = 'online' | 'cash' | 'wallet';

interface PaymentSelectionProps {
  onSelect: (method: PaymentMethod) => void;
  walletBalance?: number;
}

export const PaymentSelection = ({ onSelect, walletBalance = 150 }: PaymentSelectionProps) => {
  const [selected, setSelected] = useState<PaymentMethod>('online');

  const handleSelect = (method: PaymentMethod) => {
    setSelected(method);
    onSelect(method);
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4 border-b">
        <CardTitle className="text-lg flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-blue-600" />
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        {/* Online Payment */}
        <label
          className={`flex items-start gap-4 p-4 border rounded-lg cursor-pointer transition-all ${
            selected === 'online' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'hover:bg-gray-50'
          }`}
        >
          <input
            type="radio"
            name="payment_method"
            value="online"
            checked={selected === 'online'}
            onChange={() => handleSelect('online')}
            className="mt-1 w-4 h-4 text-blue-600"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 font-medium text-gray-900">
              <CreditCard className="w-5 h-5 text-gray-500" />
              Pay Online
            </div>
            <p className="text-sm text-gray-500 mt-1">Credit/Debit Card, UPI, Netbanking</p>
          </div>
        </label>

        {/* Cash on Service */}
        <label
          className={`flex items-start gap-4 p-4 border rounded-lg cursor-pointer transition-all ${
            selected === 'cash' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'hover:bg-gray-50'
          }`}
        >
          <input
            type="radio"
            name="payment_method"
            value="cash"
            checked={selected === 'cash'}
            onChange={() => handleSelect('cash')}
            className="mt-1 w-4 h-4 text-blue-600"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 font-medium text-gray-900">
              <Banknote className="w-5 h-5 text-gray-500" />
              Cash on Service
            </div>
            <p className="text-sm text-gray-500 mt-1">Pay with cash after service completion</p>
          </div>
        </label>

        {/* Wallet Balance */}
        <label
          className={`flex items-start gap-4 p-4 border rounded-lg cursor-pointer transition-all ${
            selected === 'wallet' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'hover:bg-gray-50'
          }`}
        >
          <input
            type="radio"
            name="payment_method"
            value="wallet"
            checked={selected === 'wallet'}
            onChange={() => handleSelect('wallet')}
            className="mt-1 w-4 h-4 text-blue-600"
          />
          <div className="flex-1 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 font-medium text-gray-900">
                <Wallet className="w-5 h-5 text-gray-500" />
                Wallet Balance
              </div>
              <p className="text-sm text-gray-500 mt-1">Pay using your app wallet credits</p>
            </div>
            <div className="font-semibold text-green-600">
              ${walletBalance.toFixed(2)}
            </div>
          </div>
        </label>
      </CardContent>
    </Card>
  );
};
