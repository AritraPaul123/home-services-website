import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../../../components/ui/button';
import { Address, AddressModal } from '../../../components/customer/AddressModal';
import { Home, Briefcase, MapPin, Plus, MoreVertical, Star, Trash2, Edit2 } from 'lucide-react';
import { toast } from 'sonner';

export const AddressesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 'addr-1',
      type: 'Home',
      street: '123 Main St, Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      isDefault: true,
    },
    {
      id: 'addr-2',
      type: 'Office',
      street: '456 Tech Park, Floor 8',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      isDefault: false,
    }
  ]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSaveAddress = (address: Address) => {
    let updatedAddresses = [...addresses];
    
    // Handle setting default
    if (address.isDefault) {
      updatedAddresses = updatedAddresses.map(a => ({ ...a, isDefault: false }));
    }

    if (editingAddress) {
      updatedAddresses = updatedAddresses.map(a => a.id === address.id ? address : a);
      toast.success('Address updated successfully');
    } else {
      updatedAddresses.push(address);
      toast.success('New address added');
    }
    
    setAddresses(updatedAddresses);
    setEditingAddress(null);
  };

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setIsModalOpen(true);
    setOpenDropdownId(null);
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter(a => a.id !== id));
    toast.success('Address deleted');
    setOpenDropdownId(null);
  };

  const handleSetDefault = (id: string) => {
    setAddresses(addresses.map(a => ({
      ...a,
      isDefault: a.id === id
    })));
    toast.success('Default address updated');
    setOpenDropdownId(null);
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Home': return <Home className="w-5 h-5 text-blue-600" />;
      case 'Office': return <Briefcase className="w-5 h-5 text-blue-600" />;
      default: return <MapPin className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Saved Addresses</h2>
          <p className="text-gray-500">Manage your service locations for quick booking.</p>
        </div>
        <Button onClick={() => { setEditingAddress(null); setIsModalOpen(true); }} className="gap-2">
          <Plus className="w-4 h-4" /> Add New Address
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <div key={address.id} className="border rounded-lg p-5 bg-white shadow-sm relative group">
            {address.isDefault && (
              <span className="absolute top-0 right-0 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                Default
              </span>
            )}
            
            <div className="flex justify-between items-start mb-2 relative">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-50 rounded-full">
                  {getIcon(address.type)}
                </div>
                <h3 className="font-semibold text-gray-900">{address.type}</h3>
              </div>
              
              <div ref={openDropdownId === address.id ? dropdownRef : null}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-gray-500"
                  onClick={() => toggleDropdown(address.id)}
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>

                {openDropdownId === address.id && (
                  <div className="absolute right-0 top-10 mt-1 w-48 bg-white rounded-md shadow-lg border border-slate-100 py-1 z-10">
                    <button onClick={() => handleEdit(address)} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-100 flex items-center gap-2">
                      <Edit2 className="w-4 h-4" /> Edit
                    </button>
                    {!address.isDefault && (
                      <button onClick={() => handleSetDefault(address.id)} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-100 flex items-center gap-2">
                        <Star className="w-4 h-4" /> Set as Default
                      </button>
                    )}
                    <button onClick={() => handleDelete(address.id)} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-sm text-gray-600 space-y-1 mt-3">
              <p>{address.street}</p>
              <p>{address.city}, {address.state} {address.zip}</p>
            </div>
          </div>
        ))}
      </div>

      <AddressModal 
        isOpen={isModalOpen} 
        onClose={() => { setIsModalOpen(false); setEditingAddress(null); }}
        onSave={handleSaveAddress}
        editAddress={editingAddress}
      />
    </div>
  );
};
