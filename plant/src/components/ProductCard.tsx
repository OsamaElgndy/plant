'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // Utility for conditional classes
import { Heart } from 'lucide-react';

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
  onFavoriteToggle,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [favoriteState, setFavoriteState] = useState(isFavorite);

  useEffect(() => {
    setFavoriteState(isFavorite);
  }, [isFavorite]);

  const handleFavoriteClick = () => {
    const newFavoriteState = !favoriteState;
    setFavoriteState(newFavoriteState);
    onFavoriteToggle?.(id, newFavoriteState);
  };

  return (
    <Card
      className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 bg-gray-100">
        <Image src={image} alt={name} fill className="object-cover" />
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

        {showMoreDetails && isHovered && (
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-full bg-white bg-opacity-80 p-3">
              <Button variant="outline" className="w-full">
                المزيد من التفاصيل
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

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
          <Button
            className="flex-1"
            disabled={!inStock}
            variant={inStock ? 'default' : 'secondary'}
          >
            {inStock ? 'أضف إلى السلة' : 'نفذت الكمية'}
          </Button>
          <Button
            onClick={handleFavoriteClick}
            variant="outline"
            className={cn(
              'px-3',
              favoriteState ? 'bg-red-500 hover:bg-red-600 text-white border-red-500' : 'text-green-600 border-green-600 hover:bg-green-50'
            )}
          >
            <Heart className="w-5 h-5 fill-current" fill={favoriteState ? 'currentColor' : 'none'} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
