
export default function SustainabilityCommitment() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Commitment to <span className="text-green-600">Sustainability</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Environmental responsibility is at the heart of everything we do. We believe that sustainable farming practices are essential for long-term success and environmental preservation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-drop-line text-green-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Water Conservation</h3>
            <p className="text-gray-600 text-sm">
              Drip irrigation systems and rainwater harvesting reduce water usage by 40% compared to traditional methods.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-leaf-line text-green-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Organic Practices</h3>
            <p className="text-gray-600 text-sm">
              Natural composting and minimal chemical use maintain soil health and produce cleaner, safer fruits.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-recycle-line text-green-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Waste Reduction</h3>
            <p className="text-gray-600 text-sm">
              Zero-waste philosophy with complete utilization of plant materials for composting and biomass energy.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-seedling-line text-green-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Biodiversity</h3>
            <p className="text-gray-600 text-sm">
              Intercropping and habitat preservation support local wildlife and maintain ecological balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
