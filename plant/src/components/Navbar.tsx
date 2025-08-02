'use client';

import Link from 'next/link';
import { LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
              <span className="text-xl font-bold">متجر النباتات</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-4">
              <Link href="/products" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                المنتجات
              </Link>
              <Link href="/favorites" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                المفضل
              </Link>
              <Link href="/about" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                معلومات عنا
              </Link>
              <Link href="/contact" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                تواصل معنا
              </Link>
            </div>

            {/* Login / Register Icons */}
            <div className="flex items-center space-x-4 ml-6">
              <Link href="/login" className="flex items-center space-x-1 hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                <LogIn className="w-4 h-4" />
                <span>تسجيل الدخول</span>
              </Link>
              <Link href="/register" className="flex items-center space-x-1 hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                <UserPlus className="w-4 h-4" />
                <span>إنشاء حساب</span>
              </Link>
              {/* Add to Cart Button */}
              <button className="flex items-center space-x-2 hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v6m4-6v6m1-14h-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu button placeholder */}
          <div className="md:hidden"></div>
        </div>
      </div>
    </nav>
  );
}
