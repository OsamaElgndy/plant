'use client';

import Link from 'next/link';

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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                الرئيسية
              </Link>
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
          </div>

          {/* Mobile menu button placeholder (if needed for later) */}
          <div className="md:hidden"></div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              الرئيسية
            </Link>
            <Link href="/products" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              المنتجات
            </Link>
            <Link href="/favorites" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              المفضل
            </Link>
            <Link href="/about" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              معلومات عنا
            </Link>
            <Link href="/contact" className="block hover:bg-green-700 px-3 py-2 rounded-md text-base font-medium">
              تواصل معنا
            </Link>
        
          </div>
        </div>
      </div>
    </nav>
  );
}
