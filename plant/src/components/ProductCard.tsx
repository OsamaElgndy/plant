'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  showMoreDetails?: boolean;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: string, isFavorite: boolean) => void;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  description, 
  inStock, 
  showMoreDetails = true,
  isFavorite = false,
  onFavoriteToggle
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [favoriteState, setFavoriteState] = useState(isFavorite);

  // Sync favorite state with prop
  useEffect(() => {
    setFavoriteState(isFavorite);
  }, [isFavorite]);

  const handleFavoriteClick = () => {
    const newFavoriteState = !favoriteState;
    setFavoriteState(newFavoriteState);
    onFavoriteToggle?.(id, newFavoriteState);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        {!inStock && (
          <div className="absolute top-2 right-2">
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
              نفذت الكمية
            </span>
          </div>
        )}
        
        {/* More Details Button - Appears on Hover only when showMoreDetails is true */}
        {showMoreDetails &&  isHovered && (
          <div className="absolute inset-0 flex items-end justify-center transition-all duration-300">
            <div className="w-full  bg-opacity-50 p-3">
              <button className="w-full bg-white text-green-600 py-2 px-4 rounded-md font-medium hover:bg-green-600 hover:text-white transition-colors duration-200 shadow-lg">
                المزيد من التفاصيل
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-600">
            ${price.toFixed(2)}
          </span>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm text-gray-600">4.5 (120)</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button 
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
              inStock 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!inStock}
          >
            {inStock ? 'أضف إلى السلة' : 'نفذت الكمية'}
          </button>
          <button 
            onClick={handleFavoriteClick}
            className={`py-2 px-3 rounded-md border transition-colors ${
              favoriteState 
                ? 'bg-red-500 border-red-500 text-white hover:bg-red-600' 
                : 'border-green-600 text-green-600 hover:bg-green-50'
            }`}
          >
            <svg className="w-5 h-5" fill={favoriteState ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 