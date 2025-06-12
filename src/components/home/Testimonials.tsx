import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Thompson',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    text: 'The leather collar I bought for Max is absolutely beautiful! The quality is exceptional, and it has held up wonderfully even with daily use. My dog seems so comfortable wearing it.',
    dogName: 'Max',
    dogBreed: 'Golden Retriever',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    text: 'I\'ve tried many collars for my active pup, but the Adventure Waterproof Collar from PawsomeCollars is by far the best. It dries quickly after our beach trips and still looks brand new.',
    dogName: 'Rocky',
    dogBreed: 'Labrador',
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    text: 'The personalized nameplate collar is not only practical but also stylish. The engraving is clean and clear, and I love that we don\'t need a dangling tag anymore. Worth every penny!',
    dogName: 'Bella',
    dogBreed: 'French Bulldog',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:translate-x-0 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-0 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
          
          {/* Testimonial */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div className="flex flex-col items-center text-center">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover mb-4" 
              />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonials[currentIndex].rating ? "text-amber-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
              
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div>
                <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-emerald-600">
                  Owner of {testimonials[currentIndex].dogName} ({testimonials[currentIndex].dogBreed})
                </p>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-emerald-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;