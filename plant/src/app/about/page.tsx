import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About PlantStore
            </h1>
            <p className="text-xl md:text-2xl text-green-200 max-w-3xl mx-auto">
              We're passionate about bringing nature into your home and helping you create 
              beautiful, thriving indoor gardens.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At PlantStore, we believe that everyone deserves to experience the joy and 
                benefits of living with plants. Our mission is to make plant parenthood 
                accessible, enjoyable, and rewarding for everyone.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We carefully select each plant in our collection, ensuring they're not only 
                beautiful but also well-suited for indoor environments. Our team of plant 
                experts is here to guide you every step of the way.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌱</div>
                  <h3 className="font-semibold text-gray-900">Quality Plants</h3>
                  <p className="text-sm text-gray-600">Carefully selected for health and beauty</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💚</div>
                  <h3 className="font-semibold text-gray-900">Expert Support</h3>
                  <p className="text-sm text-gray-600">Plant care advice and guidance</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚚</div>
                  <h3 className="font-semibold text-gray-900">Safe Delivery</h3>
                  <p className="text-sm text-gray-600">Plants arrive healthy and ready to thrive</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Our greenhouse"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at PlantStore
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to eco-friendly practices and sustainable sourcing.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                Building a community of plant lovers who support and inspire each other.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                Every plant is carefully selected and nurtured for optimal health.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">
                Empowering customers with knowledge to help their plants thrive.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind PlantStore who make it all possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">John Green</h3>
              <p className="text-green-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Plant enthusiast with 15+ years of experience in horticulture and business.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">👩‍🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Bloom</h3>
              <p className="text-green-600 font-medium mb-2">Head of Plant Care</p>
              <p className="text-gray-600 text-sm">
                Certified botanist who ensures every plant meets our quality standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Root</h3>
              <p className="text-green-600 font-medium mb-2">Customer Success</p>
              <p className="text-gray-600 text-sm">
                Dedicated to helping customers succeed in their plant parenting journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-green-200">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-green-200">Plant Varieties</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5 Years</div>
              <p className="text-green-200">In Business</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <p className="text-green-200">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 