import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

// Mock data for featured products
const featuredProducts = [
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
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <HeroSlider />
      
      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular plants, carefully selected for their beauty, 
              ease of care, and ability to transform any space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/products" 
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect plants for your space and lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Indoor Plants</h3>
              <p className="text-gray-600 mb-4">
                Perfect for homes and offices, these plants thrive in indoor environments.
              </p>
              <a href="/products?category=indoor" className="text-green-600 font-semibold hover:text-green-700">
                Shop Indoor →
              </a>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌵</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Succulents & Cacti</h3>
              <p className="text-gray-600 mb-4">
                Low-maintenance plants perfect for busy lifestyles and dry climates.
              </p>
              <a href="/products?category=succulent" className="text-green-600 font-semibold hover:text-green-700">
                Shop Succulents →
              </a>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flowering Plants</h3>
              <p className="text-gray-600 mb-4">
                Add color and beauty to your space with our selection of flowering plants.
              </p>
              <a href="/products?category=flowering" className="text-green-600 font-semibold hover:text-green-700">
                Shop Flowering →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
