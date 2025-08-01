'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';

// Mock data for all products - in a real app, this would come from a database
const allProducts = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d8b?w=400&h=300&fit=crop',
    category: 'Indoor',
    description: 'Large, glossy leaves with distinctive holes and splits. Perfect for adding tropical vibes to your space.',
    inStock: true
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400&h=300&fit=crop',
    category: 'Low Maintenance',
    description: 'Tall, upright leaves with yellow edges. Excellent air purifier and very low maintenance.',
    inStock: true
  },
  {
    id: '3',
    name: 'Peace Lily',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400&h=300&fit=crop',
    category: 'Flowering',
    description: 'Beautiful white flowers and glossy green leaves. Great for improving indoor air quality.',
    inStock: false
  },
  {
    id: '4',
    name: 'Fiddle Leaf Fig',
    price: 120.99,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d8b?w=400&h=300&fit=crop',
    category: 'Statement',
    description: 'Large, violin-shaped leaves that make a bold statement in any room.',
    inStock: true
  },
  {
    id: '5',
    name: 'Pothos',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d8b?w=400&h=300&fit=crop',
    category: 'Indoor',
    description: 'Easy-care trailing plant perfect for hanging baskets or climbing up moss poles.',
    inStock: true
  },
  {
    id: '6',
    name: 'ZZ Plant',
    price: 55.99,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400&h=300&fit=crop',
    category: 'Low Maintenance',
    description: 'Nearly indestructible plant with glossy leaves. Perfect for low-light areas.',
    inStock: true
  }
];

export default function FavoritesPage() {
  const [sortBy, setSortBy] = useState('name');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [favoriteProducts, setFavoriteProducts] = useState<any[]>([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('plantFavorites');
    if (savedFavorites) {
      const favoritesSet = new Set(JSON.parse(savedFavorites) as string[]);
      setFavorites(favoritesSet);
      
      // Filter products to show only favorites
      const filtered = allProducts.filter(product => favoritesSet.has(product.id));
      setFavoriteProducts(filtered);
    }
  }, []);

  // Update favorite products when favorites change
  useEffect(() => {
    const filtered = allProducts.filter(product => favorites.has(product.id));
    setFavoriteProducts(filtered);
  }, [favorites]);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('plantFavorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  const handleFavoriteToggle = (id: string, isFavorite: boolean) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (isFavorite) {
        newFavorites.add(id);
      } else {
        newFavorites.delete(id);
      }
      return newFavorites;
    });
  };

  const sortedFavorites = favoriteProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
              <p className="mt-2 text-gray-600">
                Your saved plants ({sortedFavorites.length} items)
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {sortedFavorites.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
            <p className="text-gray-600 mb-6">
              Start adding plants to your favorites to see them here.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
              Browse Plants
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {sortedFavorites.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                description={product.description}
                inStock={product.inStock}
                isFavorite={favorites.has(product.id)}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 