import React from 'react';

const sizeGuide = [
  {
    size: 'XS',
    neckSize: '8-11"',
    weight: '5-10 lbs',
    breeds: 'Chihuahua, Yorkshire Terrier, Toy Poodle'
  },
  {
    size: 'S',
    neckSize: '11-14"',
    weight: '10-25 lbs',
    breeds: 'Jack Russell, Pug, Mini Schnauzer'
  },
  {
    size: 'M',
    neckSize: '14-18"',
    weight: '25-50 lbs',
    breeds: 'Border Collie, Bulldog, Standard Poodle'
  },
  {
    size: 'L',
    neckSize: '18-24"',
    weight: '50-80 lbs',
    breeds: 'German Shepherd, Golden Retriever, Labrador'
  },
  {
    size: 'XL',
    neckSize: '24-30"',
    weight: '80+ lbs',
    breeds: 'Great Dane, Saint Bernard, Newfoundland'
  }
];

const SizeGuidePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Size Guide</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">How to Measure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.pexels.com/photos/5255204/pexels-photo-5255204.jpeg" 
                  alt="Dog measurement guide"
                  className="rounded-lg mb-4"
                />
              </div>
              <div>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center bg-emerald-600 text-white rounded-full w-6 h-6 mt-0.5 mr-3 flex-shrink-0">1</span>
                    <p>Use a soft measuring tape for accurate measurements.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center bg-emerald-600 text-white rounded-full w-6 h-6 mt-0.5 mr-3 flex-shrink-0">2</span>
                    <p>Measure around your dog's neck where the collar sits.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center bg-emerald-600 text-white rounded-full w-6 h-6 mt-0.5 mr-3 flex-shrink-0">3</span>
                    <p>Add 2 inches to the measurement for comfort.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center bg-emerald-600 text-white rounded-full w-6 h-6 mt-0.5 mr-3 flex-shrink-0">4</span>
                    <p>If between sizes, choose the larger size.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Size</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Neck Size</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Dog Weight</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Common Breeds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sizeGuide.map((size) => (
                  <tr key={size.size} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{size.size}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{size.neckSize}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{size.weight}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{size.breeds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuidePage;