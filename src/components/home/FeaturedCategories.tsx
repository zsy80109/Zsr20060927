import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Mountain, Crown } from 'lucide-react';

const categories = [
  {
    id: 'leather',
    name: '皮革项圈',
    description: '经典耐用，传统工艺',
    image: 'https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg',
    link: '/shop?material=皮革',
    icon: <Crown className="w-6 h-6" />,
    color: 'from-amber-600 to-orange-600',
    features: ['手工缝制', '优质皮革', '经典设计']
  },
  {
    id: 'luxury',
    name: '奢华项圈',
    description: '优质舒适，尊贵体验',
    image: '/微信图片_20250520145202.jpg',
    link: '/shop?category=奢华',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-purple-600 to-pink-600',
    features: ['记忆棉衬垫', '奢华材质', '舒适体验']
  },
  {
    id: 'sport',
    name: '探险项圈',
    description: '适合运动，户外专用',
    image: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
    link: '/shop?category=运动',
    icon: <Mountain className="w-6 h-6" />,
    color: 'from-green-600 to-emerald-600',
    features: ['防水设计', '耐磨材质', '户外专用']
  }
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">按类别购物</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            为您的宠物选择最适合的项圈类型，每一款都经过精心设计
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={category.link}
              className="group relative overflow-hidden rounded-2xl shadow-xl h-96 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8">
                {/* Icon Badge */}
                <div className="self-start">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${category.color} text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                    {category.icon}
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-200 mb-4 text-lg">{category.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-white font-medium group-hover:text-emerald-300 transition-colors">
                    <span className="mr-2">立即购买</span>
                    <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/shop">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <span className="mr-2">查看所有产品</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;