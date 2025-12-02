'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const slides = [
    {
      image: "https://readdy.ai/api/search-image?query=Lush%20tropical%20pineapple%20plantation%20in%20Ghana%20with%20golden%20ripe%20pineapples%20growing%20in%20organized%20rows%2C%20bright%20green%20leaves%2C%20African%20farmers%20working%20in%20the%20background%2C%20warm%20golden%20sunlight%20filtering%20through%2C%20rich%20red%20soil%2C%20sustainable%20farming%20practices%20visible%2C%20peaceful%20rural%20landscape%20with%20rolling%20hills%20in%20the%20distance%2C%20vibrant%20colors%20showcasing%20agricultural%20abundance%20and%20prosperity&width=1920&height=1080&seq=hero-slide-1&orientation=landscape",
      fallbackImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop&q=80",
      title: "Premium Pineapples",
      subtitle: "From Ghana's Heart"
    },
    {
      image: "https://readdy.ai/api/search-image?query=African%20farmers%20harvesting%20ripe%20golden%20pineapples%20in%20Ghana%20plantation%2C%20workers%20picking%20fresh%20pineapples%2C%20traditional%20farming%20methods%2C%20tropical%20agricultural%20scene%2C%20sustainable%20farming%20practices%2C%20rural%20Ghana%20countryside%2C%20golden%20hour%20lighting%2C%20authentic%20agricultural%20work&width=1920&height=1080&seq=hero-slide-2&orientation=landscape",
      fallbackImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=1080&fit=crop&q=80",
      title: "Sustainable Farming",
      subtitle: "Quality & Excellence"
    },
    {
      image: "https://readdy.ai/api/search-image?query=Aerial%20view%20of%20expansive%20pineapple%20plantation%20in%20Ghana%20showing%20organized%20farming%20rows%2C%20lush%20green%20pineapple%20plants%20stretching%20to%20horizon%2C%20modern%20agricultural%20infrastructure%2C%20sustainable%20farming%20operations%2C%20tropical%20landscape%2C%20professional%20pineapple%20plantation%20management&width=1920&height=1080&seq=hero-slide-3&orientation=landscape",
      fallbackImage: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&h=1080&fit=crop&q=80",
      title: "From Farm to Table",
      subtitle: "Global Reach"
    }
  ];

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  // Preload all images
  useEffect(() => {
    const preloadImages = slides.map((slide, index) => {
      const img = new Image();
      img.src = slide.image;
      img.onerror = () => handleImageError(index);
      return img;
    });
    
    // Also preload fallback images
    slides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.fallbackImage;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const imageSrc = imageErrors[index] ? slide.fallbackImage : slide.image;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={imageSrc}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={() => handleImageError(index)}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/30"></div>
            </div>
          );
        })}
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 z-0" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up" delay={200}>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}<br />
              <span className="text-yellow-400 inline-block mt-2">{slides[currentSlide].subtitle}</span>
            </h1>
            <ScrollAnimation animation="fade-in-up" delay={400}>
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                Cultivating exceptional pineapples through sustainable farming practices in Marfokrom, Ayensuano District. Quality that reaches from our fields to your table.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products" 
                  className="group bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 cursor-pointer whitespace-nowrap text-center shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  <span className="inline-flex items-center">
                    Explore Our Products
                    <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </span>
                </Link>
                <Link 
                  href="/about" 
                  className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer whitespace-nowrap text-center backdrop-blur-sm hover:scale-105 transform"
                >
                  <span className="inline-flex items-center">
                    Learn About Our Farm
                    <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </span>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-2 bg-yellow-400 rounded-full'
                : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
