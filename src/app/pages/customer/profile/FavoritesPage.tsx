import React from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Heart, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { useFavorites } from '../../../context/FavoritesContext';

export const FavoritesPage = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Favorite Services</h2>
        <p className="text-gray-500">Quickly book the services you love.</p>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((service) => (
            <Card key={service.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <button 
                  onClick={() => removeFavorite(service.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-red-500 hover:scale-110 transition-transform shadow-sm"
                >
                  <Heart className="w-5 h-5 fill-current" />
                </button>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-sm text-slate-900">{service.rating}</span>
                  <span className="text-sm text-slate-500">({service.reviews})</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">{service.name}</h3>
                <p className="font-semibold text-blue-600 mb-4">Starts at ${service.price.toFixed(2)}</p>
                <Button className="w-full justify-between" asChild>
                  <Link to={`/services/${service.id}`}>
                    Book Now <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-xl">
          <Heart className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">No favorites yet</h3>
          <p className="text-slate-500 mb-6">Save your favorite services for quick access later.</p>
          <Button asChild>
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
