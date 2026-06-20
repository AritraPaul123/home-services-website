import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Ticket, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

interface CouponSectionProps {
  onApply: (discount: number, code: string) => void;
}

export const CouponSection = ({ onApply }: CouponSectionProps) => {
  const [code, setCode] = useState('');
  const [appliedCode, setAppliedCode] = useState<string | null>(null);

  const handleApply = () => {
    if (code.toUpperCase() === 'WELCOME50') {
      setAppliedCode(code.toUpperCase());
      onApply(50, code.toUpperCase());
      toast.success(`Coupon ${code.toUpperCase()} applied!`);
    } else if (code.toUpperCase() === 'OFF10') {
      setAppliedCode(code.toUpperCase());
      onApply(10, code.toUpperCase());
      toast.success(`Coupon ${code.toUpperCase()} applied!`);
    } else {
      toast.error('Invalid or expired coupon code');
    }
  };

  const handleRemove = () => {
    setAppliedCode(null);
    setCode('');
    onApply(0, '');
    toast.success('Coupon removed');
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-4 border-b">
        <CardTitle className="text-lg flex items-center gap-2">
          <Ticket className="w-5 h-5 text-blue-600" />
          Apply Coupon
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {appliedCode ? (
          <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">{appliedCode} applied</span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleRemove} className="text-green-700 hover:text-green-800 hover:bg-green-100">
              Remove
            </Button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Input 
              placeholder="Enter coupon code (e.g. WELCOME50)" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="uppercase"
            />
            <Button onClick={handleApply} disabled={!code}>Apply</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
