import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Gift, Copy, Share2, Users, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export const ReferralsPage = () => {
  const referralCode = 'JOHN50';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    toast.success('Referral code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Refer & Earn</h2>
        <p className="text-gray-500">Invite your friends and earn wallet credits.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <Gift className="w-64 h-64" />
          </div>
          <CardContent className="p-8 relative z-10">
            <h3 className="text-3xl font-bold mb-4">Give $50, Get $50</h3>
            <p className="text-blue-100 mb-8 max-w-md text-lg">
              Share your referral code with friends. They get $50 off their first booking, and you get $50 in your wallet when their service is completed.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 flex items-center gap-2 max-w-sm">
              <div className="bg-white/20 px-4 py-2 rounded-lg flex-1 text-center font-mono text-xl font-bold tracking-widest">
                {referralCode}
              </div>
              <Button onClick={handleCopy} variant="secondary" className="gap-2 shrink-0 bg-white text-blue-600 hover:bg-blue-50 border-0">
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </div>
            
            <div className="mt-6">
              <Button variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                <Share2 className="w-4 h-4" /> Share Link
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Your Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-4 bg-slate-50 rounded-lg border">
              <p className="text-sm text-slate-500 font-medium mb-1">Total Earned</p>
              <p className="text-3xl font-bold text-green-600">$150.00</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg border">
              <p className="text-sm text-slate-500 font-medium mb-1">Friends Joined</p>
              <p className="text-3xl font-bold text-slate-900">3</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How it works</CardTitle>
          <CardDescription>Follow these simple steps to start earning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative before:absolute before:inset-0 before:top-6 before:h-0.5 before:w-full before:bg-slate-100 hidden md:block">
            {/* Steps layout for desktop */}
            <div className="absolute inset-0 top-6 h-0.5 w-full bg-slate-100 -z-10 hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm relative z-10">1</div>
              <h4 className="font-bold text-slate-900 mb-2">Share Code</h4>
              <p className="text-sm text-slate-500">Send your unique code to friends and family</p>
            </div>
            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm relative z-10">2</div>
              <h4 className="font-bold text-slate-900 mb-2">Friend Books</h4>
              <p className="text-sm text-slate-500">They use your code to get $50 off their first booking</p>
            </div>
            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm relative z-10">3</div>
              <h4 className="font-bold text-slate-900 mb-2">You Earn</h4>
              <p className="text-sm text-slate-500">Get $50 in your wallet when their service is completed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
