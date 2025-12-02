
export default function FarmStory() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2010 by agricultural enthusiast Kwame Asante, Mennai Farms began as a small family operation with just 5 hectares of land in Marfokrom. What started as a dream to produce the finest pineapples in Ghana has grown into a thriving enterprise that serves both local and international markets.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our name "Mennai" comes from the local Twi language, meaning "I will succeed," reflecting our founder's determination and vision. Over the years, we've expanded our operations to 50 hectares while maintaining our commitment to quality, sustainability, and community development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Mennai Farms stands as a testament to what can be achieved through dedication, innovation, and respect for the land. We continue to honor our roots while embracing modern farming techniques that ensure the highest quality produce.
            </p>
          </div>
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Portrait%20of%20African%20farmer%20founder%20standing%20proudly%20in%20pineapple%20plantation%2C%20traditional%20farming%20attire%20mixed%20with%20modern%20elements%2C%20confident%20pose%20showing%20leadership%20and%20vision%2C%20golden%20hour%20lighting%20creating%20inspiring%20atmosphere%2C%20documentary%20style%20photography%20capturing%20the%20essence%20of%20agricultural%20entrepreneurship%20in%20Ghana&width=600&height=800&seq=founder001&orientation=portrait" 
              alt="Kwame Asante, Founder of Mennai Farms" 
              className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
