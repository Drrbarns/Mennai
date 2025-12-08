import ScrollAnimation from './ScrollAnimation';

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-50 border-t border-yellow-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">Mennai Farms</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and sustainability makes us a trusted partner for premium pineapple production.
          </p>
        </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <ScrollAnimation animation="fade-in-up" delay={100}>
            <div className="group text-center bg-white p-8 rounded-xl shadow-sm hover-lift transition-all duration-300 border border-transparent hover:border-green-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <i className="ri-plant-line text-3xl text-green-600"></i>
            </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Sustainable Farming</h3>
              <p className="text-gray-600 leading-relaxed">
              Eco-friendly practices that preserve soil health and promote biodiversity while ensuring premium quality produce.
            </p>
          </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <div className="group text-center bg-white p-8 rounded-xl shadow-sm hover-lift transition-all duration-300 border border-transparent hover:border-yellow-100">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <i className="ri-award-line text-3xl text-yellow-600"></i>
            </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
              Rigorous quality control ensures every pineapple meets international standards for sweetness, texture, and appearance.
            </p>
          </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-up" delay={300}>
            <div className="group text-center bg-white p-8 rounded-xl shadow-sm hover-lift transition-all duration-300 border border-transparent hover:border-green-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <i className="ri-global-line text-3xl text-green-600"></i>
            </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Global Reach</h3>
              <p className="text-gray-600 leading-relaxed">
              Serving both local and international markets with reliable supply chains and export capabilities.
            </p>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
