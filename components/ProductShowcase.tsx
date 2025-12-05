import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

export default function ProductShowcase() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Premium <span className="text-yellow-500">Products</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From farm to table, we offer various pineapple varieties and packaging options to meet diverse market needs.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" data-product-shop>
          <ScrollAnimation animation="scale-in" delay={100}>
            <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover-lift transition-all duration-300 border border-gray-100 hover:border-yellow-200">
              <div className="relative overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Fresh%20whole%20golden%20pineapple%20with%20crown%2C%20perfect%20ripeness%20and%20natural%20golden%20yellow%20color%2C%20clean%20white%20background%2C%20professional%20product%20photography%20for%20commercial%20use%2C%20high%20quality%20tropical%20fruit%20showcase%20with%20excellent%20texture%20and%20natural%20lighting&width=400&height=300&seq=product001&orientation=landscape"
                  alt="Fresh Whole Pineapples"
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">Fresh Whole Pineapples</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Premium quality whole pineapples, carefully selected for optimal sweetness and freshness. Perfect for retail and wholesale markets.
                </p>
                <Link 
                  href="/products" 
                  className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-600 transition-all duration-300 cursor-pointer group/link"
                >
                  Learn More
                  <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="scale-in" delay={200}>
            <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover-lift transition-all duration-300 border border-gray-100 hover:border-yellow-200">
              <div className="relative overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Pre-cut%20pineapple%20chunks%20in%20clear%20packaging%20container%2C%20fresh%20yellow%20pineapple%20pieces%20ready%20for%20consumption%2C%20clean%20commercial%20packaging%20design%2C%20professional%20food%20photography%20with%20bright%20lighting%20and%20appetizing%20presentation%20for%20retail%20market&width=400&height=300&seq=product002&orientation=landscape"
                  alt="Pre-cut Pineapple"
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">Pre-cut Pineapple</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Convenient ready-to-eat pineapple chunks, processed under strict hygiene standards for maximum freshness and convenience.
                </p>
                <Link 
                  href="/products" 
                  className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-600 transition-all duration-300 cursor-pointer group/link"
                >
                  Learn More
                  <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="scale-in" delay={300}>
            <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover-lift transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div className="relative overflow-hidden">
                <img
                  src="/pineapples2.jpg"
                  alt="Premium Pineapples"
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Premium Pineapples</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  High-quality pineapples grown using conventional methods combined with sustainable, organic-inspired practices, perfect for health-conscious consumers and premium markets.
                </p>
                <Link 
                  href="/products" 
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-all duration-300 cursor-pointer group/link"
                >
                  Learn More
                  <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover/link:translate-x-1"></i>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
