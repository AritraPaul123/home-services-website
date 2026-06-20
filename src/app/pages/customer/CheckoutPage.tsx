import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../../context/CartContext";
import { DateTimeSelection } from "../../components/checkout/DateTimeSelection";
import { CouponSection } from "../../components/checkout/CouponSection";
import { PaymentSelection, PaymentMethod } from "../../components/checkout/PaymentSelection";
import { AddressModal, Address } from "../../components/customer/AddressModal";
import { ShieldCheck, MapPin, Trash2, Plus, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export function CheckoutPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('online');
  const [discount, setDiscount] = useState(0);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const taxes = subtotal * 0.08;
  const total = subtotal + taxes - discount;

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleAddressSave = (address: Address) => {
    setSelectedAddress(address);
  };

  const handlePaymentSelect = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  const handleCouponApply = (discountAmount: number) => {
    setDiscount(discountAmount);
  };

  const handleConfirmBooking = () => {
    // In a real app, make API call here
    const bookingId = `BKG-${Math.floor(Math.random() * 1000000)}`;
    navigate('/booking-success', { 
      state: { bookingId, total, date: selectedDate, time: selectedTime } 
    });
  };

  if (items.length === 0) {
    return (
      <div className="bg-slate-50 min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <Button asChild>
            <Link to="/services">Browse Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        
        {/* Main Content - Left Side */}
        <div className="flex-[2] space-y-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Checkout</h1>

          {/* Cart Items (Features 56, 57) */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4 border-b">
              <CardTitle className="text-lg">Review Services</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    {item.image && (
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                    )}
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.name}</h4>
                      <p className="text-sm text-slate-500">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-lg">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-slate-100">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-slate-100">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Step 1: Schedule (Features 59, 60) */}
          <div className={step === 1 ? 'ring-2 ring-blue-500 rounded-lg' : 'opacity-70 grayscale'}>
            <DateTimeSelection onSelect={handleDateTimeSelect} />
            {step === 1 && (
              <div className="mt-4 flex justify-end">
                <Button onClick={() => setStep(2)}>Continue to Address</Button>
              </div>
            )}
          </div>

          {/* Step 2: Address (Features 50, 52) */}
          <div className={step === 2 ? 'ring-2 ring-blue-500 rounded-lg' : step < 2 ? 'opacity-50 pointer-events-none' : 'opacity-70 grayscale'}>
            <Card className="shadow-sm">
              <CardHeader className="pb-4 border-b flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Service Address
                </CardTitle>
                {step > 2 && <Button variant="link" onClick={() => setStep(2)}>Edit</Button>}
              </CardHeader>
              <CardContent className="pt-6">
                {selectedAddress ? (
                  <div className="border-2 border-blue-600 bg-blue-50 rounded-xl p-4 cursor-pointer relative">
                    <span className="inline-block px-2 py-1 bg-blue-200 text-blue-800 text-xs font-bold rounded mb-2 uppercase">{selectedAddress.type}</span>
                    <p className="font-bold text-slate-900">{selectedAddress.street}</p>
                    <p className="text-slate-600 text-sm mt-1">{selectedAddress.city}, {selectedAddress.state} {selectedAddress.zip}</p>
                    {step === 2 && (
                      <Button variant="outline" className="mt-4 w-full" onClick={() => setIsAddressModalOpen(true)}>Change Address</Button>
                    )}
                  </div>
                ) : (
                  <div 
                    className="border-2 border-dashed border-slate-300 hover:border-slate-400 rounded-xl p-8 cursor-pointer flex flex-col items-center justify-center gap-2 text-slate-500 transition-colors"
                    onClick={() => setIsAddressModalOpen(true)}
                  >
                    <Plus className="w-8 h-8" />
                    <span className="font-medium">Add Service Address</span>
                  </div>
                )}
              </CardContent>
            </Card>
            {step === 2 && selectedAddress && (
              <div className="mt-4 flex justify-end">
                <Button onClick={() => setStep(3)}>Continue to Payment</Button>
              </div>
            )}
          </div>

          {/* Step 3: Payment (Features 63, 64) */}
          <div className={step === 3 ? 'ring-2 ring-blue-500 rounded-lg' : step < 3 ? 'opacity-50 pointer-events-none' : ''}>
            <PaymentSelection onSelect={handlePaymentSelect} walletBalance={250.00} />
            {step === 3 && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg flex items-center gap-2 text-green-800">
                <ShieldCheck className="w-5 h-5" />
                Your booking is secure and encrypted.
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Right Side Summary (Features 58, 61, 62) */}
        <div className="flex-1">
          <div className="sticky top-24 space-y-6">
            <CouponSection onApply={handleCouponApply} />

            <Card className="shadow-sm">
              <CardHeader className="pb-4 border-b">
                <CardTitle className="text-lg">Price Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Subtotal ({items.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Taxes & Fees</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600 font-medium">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex justify-between items-center">
                  <span className="font-bold text-lg text-slate-900">Total</span>
                  <span className="font-bold text-2xl text-slate-900">${total.toFixed(2)}</span>
                </div>

                <Button 
                  className="w-full mt-6" 
                  size="lg" 
                  onClick={handleConfirmBooking}
                  disabled={step !== 3 || !selectedAddress || !selectedDate || !selectedTime}
                >
                  Confirm Booking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <AddressModal 
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        onSave={handleAddressSave}
      />
    </div>
  );
}
