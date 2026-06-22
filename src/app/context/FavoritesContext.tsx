import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Service {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
}

interface FavoritesContextType {
  favorites: Service[];
  addFavorite: (service: Service) => void;
  removeFavorite: (serviceId: string) => void;
  isFavorite: (serviceId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Service[]>(() => {
    try {
      const saved = localStorage.getItem('favorites');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to parse favorites from local storage", e);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (service: Service) => {
    setFavorites(prev => {
      if (prev.some(f => f.id === service.id)) return prev;
      return [...prev, service];
    });
  };

  const removeFavorite = (serviceId: string) => {
    setFavorites(prev => prev.filter(f => f.id !== serviceId));
  };

  const isFavorite = (serviceId: string) => {
    return favorites.some(f => f.id === serviceId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
