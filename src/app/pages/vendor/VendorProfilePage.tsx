import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Upload, Camera, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export function VendorProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState<'available' | 'unavailable'>('available');
  
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '+1 234 567 8900',
    category: 'AC Repair & Service',
    skills: 'Split AC, Window AC, Gas Refill',
    serviceArea: 'New York, Brooklyn',
    bankAccount: '**** **** **** 1234',
    ifsc: 'CHASE000123',
    aadhaarStatus: 'Verified',
    panStatus: 'Verified',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  });

  const handleSave = () => {
    setIsEditing(false);
    toast.success('Profile updated successfully');
  };

  const handleToggleStatus = () => {
    const newStatus = status === 'available' ? 'unavailable' : 'available';
    setStatus(newStatus);
    toast.success(`You are now marked as ${newStatus}`);
  };

  const handlePhotoUpload = () => {
    toast.success('Profile photo updated!');
  };

  const handleKYCUpload = (type: string) => {
    toast.success(`${type} uploaded for verification!`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Professional Profile</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 mr-2 bg-slate-50 border px-4 py-2 rounded-xl">
            <Switch checked={status === 'available'} onCheckedChange={handleToggleStatus} />
            <span className={`text-sm font-bold ${status === 'available' ? 'text-green-600' : 'text-slate-500'}`}>
              {status === 'available' ? 'Available for Jobs' : 'Unavailable'}
            </span>
          </div>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column - Photo & Status */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="relative group">
                <img src={profile.photo} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-slate-100" />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => { if(e.target.files?.length) handlePhotoUpload(); }} />
                    <Camera className="w-4 h-4" />
                  </label>
                )}
              </div>
              <h3 className="mt-4 text-xl font-bold">{profile.firstName} {profile.lastName}</h3>
              <p className="text-slate-500">{profile.category}</p>
              
              <div className="w-full mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">KYC Status</span>
                  <span className="text-green-600 font-medium flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Verified</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Rating</span>
                  <span className="font-medium">4.8 / 5.0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Details */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input disabled={!isEditing} value={profile.firstName} onChange={(e) => setProfile({...profile, firstName: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input disabled={!isEditing} value={profile.lastName} onChange={(e) => setProfile({...profile, lastName: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input disabled={!isEditing} type="email" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input disabled={!isEditing} type="tel" value={profile.phone} onChange={(e) => setProfile({...profile, phone: e.target.value})} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Info */}
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Service Category</Label>
                <Input disabled={!isEditing} value={profile.category} onChange={(e) => setProfile({...profile, category: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Skills & Expertise</Label>
                <Input disabled={!isEditing} value={profile.skills} onChange={(e) => setProfile({...profile, skills: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Service Area (City/Regions)</Label>
                <Input disabled={!isEditing} value={profile.serviceArea} onChange={(e) => setProfile({...profile, serviceArea: e.target.value})} />
              </div>
            </CardContent>
          </Card>

          {/* KYC Documents */}
          <Card>
            <CardHeader>
              <CardTitle>KYC Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-slate-50">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Aadhaar / ID Card</p>
                    <p className="text-sm text-slate-500">Verified on Oct 12, 2023</p>
                  </div>
                </div>
                {isEditing && (
                  <label className="flex h-9 items-center rounded-md border border-slate-200 bg-white px-3 text-sm font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer transition-colors shadow-sm">
                    <input type="file" className="hidden" onChange={(e) => { if(e.target.files?.length) handleKYCUpload('Aadhaar'); }} />
                    <Upload className="w-4 h-4 mr-2"/> Update
                  </label>
                )}
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-slate-50">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">PAN / Tax ID</p>
                    <p className="text-sm text-slate-500">Verified on Oct 12, 2023</p>
                  </div>
                </div>
                {isEditing && (
                  <label className="flex h-9 items-center rounded-md border border-slate-200 bg-white px-3 text-sm font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer transition-colors shadow-sm">
                    <input type="file" className="hidden" onChange={(e) => { if(e.target.files?.length) handleKYCUpload('PAN'); }} />
                    <Upload className="w-4 h-4 mr-2"/> Update
                  </label>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Bank Details */}
          <Card>
            <CardHeader>
              <CardTitle>Bank Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Account Number</Label>
                <Input disabled={!isEditing} type={isEditing ? "text" : "password"} value={profile.bankAccount} onChange={(e) => setProfile({...profile, bankAccount: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Routing Number / IFSC</Label>
                <Input disabled={!isEditing} value={profile.ifsc} onChange={(e) => setProfile({...profile, ifsc: e.target.value})} />
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
