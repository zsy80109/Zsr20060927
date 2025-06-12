import React from 'react';
import { Heart, Shield, Leaf } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-emerald-800 text-white py-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3361722/pexels-photo-3361722.jpeg"
            alt="Craftsman working on collar"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Story</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">
            Founded in 2020, PawsomeCollars was born from a passion for crafting premium dog collars 
            that combine style, comfort, and durability. Every collar we create is a testament to our 
            dedication to quality and our love for dogs.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion for Quality</h3>
              <p className="text-gray-600">
                Every collar is crafted with meticulous attention to detail, using only the finest materials.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety First</h3>
              <p className="text-gray-600">
                All our products undergo rigorous testing to ensure they meet the highest safety standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to eco-friendly practices and sustainable material sourcing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Craftsmanship Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/7210544/pexels-photo-7210544.jpeg"
                alt="Collar crafting process"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Handcrafted Excellence</h2>
              <p className="text-gray-600 mb-6">
                Each collar is handcrafted by our skilled artisans who bring years of leather-working 
                expertise to their craft. We take pride in creating products that are not just accessories, 
                but pieces of art that reflect our commitment to quality.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Hand-selected premium materials
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Traditional crafting techniques
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Quality control at every step
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;