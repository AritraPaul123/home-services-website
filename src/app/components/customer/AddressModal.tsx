import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { MapPin, Home, Briefcase, Map } from 'lucide-react';
import { toast } from 'sonner';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const LocationMarker = ({ position, setPosition }: { position: L.LatLng | null, setPosition: (pos: L.LatLng) => void }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}></Marker>
  );
};

export type Address = {
  id: string;
  type: 'Home' | 'Office' | 'Other';
  street: string;
  city: string;
  state: string;
  zip: string;
  isDefault: boolean;
  lat?: number;
  lng?: number;
};

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (address: Address) => void;
  editAddress?: Address | null;
}

export const AddressModal = ({ isOpen, onClose, onSave, editAddress }: AddressModalProps) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Address>>({
    type: 'Home',
    street: '',
    city: '',
    state: '',
    zip: '',
    isDefault: false,
  });
  const [mapPosition, setMapPosition] = useState<L.LatLng | null>(null);
  
  // Update formData when editAddress changes
  React.useEffect(() => {
    if (editAddress) {
      setFormData(editAddress);
    } else {
      setFormData({
        type: 'Home',
        street: '',
        city: '',
        state: '',
        zip: '',
        isDefault: false,
      });
    }
  }, [editAddress, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTypeSelect = (type: 'Home' | 'Office' | 'Other') => {
    setFormData({ ...formData, type });
  };

  const handleMapSelect = () => {
    setIsMapOpen(true);
  };

  const confirmMapLocation = async () => {
    if (mapPosition) {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${mapPosition.lat}&lon=${mapPosition.lng}`);
        const data = await response.json();
        
        if (data && data.address) {
          setFormData({
            ...formData,
            street: data.address.road || data.address.pedestrian || data.address.suburb || 'Selected from Map',
            city: data.address.city || data.address.town || data.address.village || '',
            state: data.address.state || '',
            zip: data.address.postcode || '',
            lat: mapPosition.lat,
            lng: mapPosition.lng
          });
          toast.success('Address autofilled from map!');
        } else {
          setFormData({ 
            ...formData, 
            street: 'Selected from Map',
            lat: mapPosition.lat, 
            lng: mapPosition.lng 
          });
          toast.success('Location selected, but exact address not found.');
        }
      } catch (error) {
        setFormData({ 
          ...formData, 
          street: 'Selected from Map',
          lat: mapPosition.lat, 
          lng: mapPosition.lng 
        });
        toast.error('Failed to auto-fill address, please enter manually.');
      }
      setIsMapOpen(false);
    } else {
      toast.error('Please click on the map to select a location');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.street && formData.city && formData.state && formData.zip) {
      onSave({
        ...formData,
        id: editAddress?.id || `addr-${Date.now()}`,
      } as Address);
      onClose();
    } else {
      toast.error('Please fill in all address fields');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        {isMapOpen ? (
          <>
            <DialogHeader>
              <DialogTitle>Select Location on Map</DialogTitle>
              <DialogDescription>Move the map to pin your exact location.</DialogDescription>
            </DialogHeader>
            <div className="relative w-full h-64 bg-slate-200 rounded-xl overflow-hidden my-4 border border-slate-300 z-10">
              <MapContainer 
                center={[37.7749, -122.4194]} 
                zoom={13} 
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker position={mapPosition} setPosition={setMapPosition} />
              </MapContainer>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsMapOpen(false)}>
                Cancel
              </Button>
              <Button type="button" onClick={confirmMapLocation}>
                Confirm Location
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{editAddress ? 'Edit Address' : 'Add New Address'}</DialogTitle>
              <DialogDescription>
                Enter your address details below.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6 py-4">
              {/* Address Type Selection */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => handleTypeSelect('Home')}
                  className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                    formData.type === 'Home' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  <Home className="w-6 h-6 mb-2" />
                  <span className="text-sm font-medium">Home</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTypeSelect('Office')}
                  className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                    formData.type === 'Office' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  <Briefcase className="w-6 h-6 mb-2" />
                  <span className="text-sm font-medium">Office</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTypeSelect('Other')}
                  className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                    formData.type === 'Other' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  <MapPin className="w-6 h-6 mb-2" />
                  <span className="text-sm font-medium">Other</span>
                </button>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="street">Street Address</Label>
                  <Textarea
                    id="street"
                    name="street"
                    placeholder="123 Main St, Apt 4B"
                    value={formData.street}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex items-end pb-1">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full gap-2"
                      onClick={handleMapSelect}
                    >
                      <Map className="w-4 h-4" />
                      Select on Map
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-2">
                  <input 
                    type="checkbox" 
                    id="isDefault" 
                    name="isDefault"
                    checked={formData.isDefault}
                    onChange={(e) => setFormData({...formData, isDefault: e.target.checked})}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300"
                  />
                  <Label htmlFor="isDefault" className="font-normal">Set as default address</Label>
                </div>
              </div>
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit">
                  Save Address
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
