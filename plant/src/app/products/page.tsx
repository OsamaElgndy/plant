import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

// Mock data for all products
const allProducts = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Tropical',
    description: 'Large, glossy leaves with distinctive holes and splits. Perfect for adding a tropical touch to any room.',
    inStock: true
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Succulent',
    description: 'Low-maintenance plant with tall, sword-like leaves. Great for beginners and air purification.',
    inStock: true
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    category: 'Tree',
    description: 'Stunning large-leafed plant that makes a bold statement in any interior space.',
    inStock: false
  },
  {
    id: '4',
    name: 'Peace Lily',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Flowering',
    description: 'Beautiful flowering plant that also helps purify the air. Perfect for homes and offices.',
    inStock: true
  },
  {
    id: '5',
    name: 'Pothos Golden',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1604762524885-3c37d73d8b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Vining',
    description: 'Easy-care trailing plant with beautiful variegated leaves. Perfect for hanging baskets.',
    inStock: true
  },
  {
    id: '6',
    name: 'ZZ Plant',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Low Light',
    description: 'Nearly indestructible plant that thrives in low light conditions. Great for beginners.',
    inStock: true
  },
  {
    id: '7',
    name: 'Aloe Vera',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Succulent',
    description: 'Medicinal plant with soothing gel inside its leaves. Easy to care for and drought-tolerant.',
    inStock: true
  },
  {
    id: '8',
    name: 'Bird of Paradise',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    category: 'Tropical',
    description: 'Stunning tropical plant with large, banana-like leaves. Makes a dramatic statement.',
    inStock: false
  }
];

const categories = ['All', 'Tropical', 'Succulent', 'Tree', 'Flowering', 'Vining', 'Low Light'];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Products
          </h1>
          <p className="text-lg text-gray-600">
            Discover our complete collection of beautiful plants for every space and lifestyle.
          </p>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search plants..."
                className="w-full md:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
            Load More Products
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 