import ScrollAnimation from '../../components/ScrollAnimation';

export default function SustainabilityPractices() {
  const practices = [
    {
      icon: 'ri-drop-line',
      title: 'Water Conservation',
      description: 'Advanced drip irrigation systems reduce water usage by 40% while maintaining optimal crop hydration.',
      stat: '40%',
      statLabel: 'Water Saved'
    },
    {
      icon: 'ri-recycle-line',
      title: 'Organic Composting',
      description: 'Converting farm waste into nutrient-rich compost, eliminating the need for synthetic fertilizers.',
      stat: '100%',
      statLabel: 'Waste Recycled'
    },
    {
      icon: 'ri-bug-line',
      title: 'Natural Pest Control',
      description: 'Integrated pest management using beneficial insects and organic methods to protect crops naturally.',
      stat: '0%',
      statLabel: 'Synthetic Pesticides'
    },
    {
      icon: 'ri-seedling-line',
      title: 'Soil Health',
      description: 'Crop rotation and cover cropping practices maintain soil fertility and prevent erosion.',
      stat: '100%',
      statLabel: 'Organic Methods'
    },
    {
      icon: 'ri-sun-line',
      title: 'Solar Energy',
      description: 'Solar-powered irrigation pumps and processing facilities reduce our carbon footprint significantly.',
      stat: '60%',
      statLabel: 'Renewable Energy'
    },
    {
      icon: 'ri-plant-line',
      title: 'Biodiversity',
      description: 'Maintaining natural habitats and wildlife corridors to support local ecosystem balance.',
      stat: '15+',
      statLabel: 'Species Protected'
    }
  ];

  const impacts = [
    { label: '40% reduction in water usage', icon: 'ri-drop-line' },
    { label: 'Zero synthetic pesticides used', icon: 'ri-shield-check-line' },
    { label: '60% renewable energy powered', icon: 'ri-sun-line' },
    { label: '100% organic waste recycled', icon: 'ri-recycle-line' }
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Environmental Stewardship
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Sustainable</span> Farming Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to environmental stewardship drives every decision we make, 
              ensuring a healthy planet for future generations.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {practices.map((practice, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover-lift transition-all duration-300 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className={`${practice.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-green-600 mb-1">{practice.stat}</div>
                    <div className="text-sm text-gray-500 font-medium">{practice.statLabel}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {practice.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{practice.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-in-up">
          <div className="bg-gradient-to-br from-green-50 via-white to-yellow-50 p-10 md:p-12 rounded-3xl shadow-xl border border-green-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-6">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Our Impact
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Environmental Impact
                </h3>
                <div className="space-y-5">
                  {impacts.map((impact, index) => (
                    <ScrollAnimation key={index} animation="fade-in-left" delay={index * 100}>
                      <div className="flex items-center space-x-4 group">
                        <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                          <i className={`${impact.icon} text-white text-xl`}></i>
                        </div>
                        <span className="text-lg font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                          {impact.label}
                        </span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://readdy.ai/api/search-image?query=Sustainable%20farming%20practices%20in%20Ghana%20pineapple%20plantation%20showing%20solar%20panels%2C%20drip%20irrigation%20systems%2C%20composting%20areas%2C%20workers%20using%20eco-friendly%20methods%2C%20green%20technology%20integration%2C%20environmental%20conservation%2C%20organic%20farming%20techniques%2C%20renewable%20energy%20in%20agriculture&width=600&height=400&seq=sustainability&orientation=landscape"
                    alt="Sustainable Farming Practices"
                    className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100 hidden lg:block">
                  <div className="text-3xl font-bold text-green-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years of Sustainable Practices</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
