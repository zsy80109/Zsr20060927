import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Mountain, Leaf, Sparkles } from 'lucide-react';

const collections = [
  {
    id: 'luxury',
    name: 'Luxury Collection',
    chineseName: '奢华系列',
    description: 'Premium handcrafted collars for the distinguished dog',
    chineseDescription: '为尊贵宠物打造的顶级手工项圈',
    image: '/微信图片_20250520145202.jpg',
    link: '/shop?category=奢华',
    icon: <Crown className="w-8 h-8" />,
    color: 'from-purple-600 to-pink-600',
    features: ['记忆棉衬垫', '奢华材质', '手工制作'],
    badge: '顶级舒适'
  },
  {
    id: 'adventure',
    name: 'Adventure Series',
    chineseName: '探险系列',
    description: 'Durable, weather-resistant collars for outdoor enthusiasts',
    chineseDescription: '为户外爱好者设计的耐用防水项圈',
    image: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
    link: '/shop?category=运动',
    icon: <Mountain className="w-8 h-8" />,
    color: 'from-green-600 to-emerald-600',
    features: ['防水设计', '耐磨材质', '户外专用'],
    badge: '专业户外'
  },
  {
    id: 'classic',
    name: 'Classic Collection',
    chineseName: '经典系列',
    description: 'Timeless designs crafted from premium leather',
    chineseDescription: '采用优质皮革制作的永恒经典设计',
    image: 'https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg',
    link: '/shop?material=皮革',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'from-amber-600 to-orange-600',
    features: ['优质皮革', '经典设计', '手工缝制'],
    badge: '经典传承'
  },
  {
    id: 'eco',
    name: 'Eco-Friendly Collection',
    chineseName: '环保系列',
    description: 'Sustainable materials, responsible craftsmanship',
    chineseDescription: '可持续材料，负责任的工艺制作',
    image: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
    link: '/shop?category=环保',
    icon: <Leaf className="w-8 h-8" />,
    color: 'from-green-500 to-teal-600',
    features: ['环保材料', '可持续', '天然材质'],
    badge: '绿色环保'
  }
];

const CollectionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Collections</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">我们的系列</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our carefully curated collections, each designed with specific needs and lifestyles in mind
          </p>
          <p className="text-lg mt-2 max-w-3xl mx-auto text-emerald-100">
            探索我们精心策划的系列，每一个都针对特定需求和生活方式而设计
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {collections.map((collection, index) => (
            <Link 
              key={collection.id}
              to={collection.link}
              className="group relative overflow-hidden rounded-2xl shadow-xl h-[500px] transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8">
                {/* Top Badge */}
                <div className="self-start">
                  <div className="flex items-center gap-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${collection.color} text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                      {collection.icon}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white text-sm font-medium">{collection.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-12px]">
                  <h2 className="text-3xl font-bold text-white mb-2">{collection.name}</h2>
                  <h3 className="text-2xl font-bold text-emerald-300 mb-4">{collection.chineseName}</h3>
                  <p className="text-gray-200 mb-2 text-lg">{collection.description}</p>
                  <p className="text-gray-300 mb-6">{collection.chineseDescription}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {collection.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-white font-semibold text-lg group-hover:text-emerald-300 transition-colors">
                    <span className="mr-3">View Collection</span>
                    <span className="mr-3">查看系列</span>
                    <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-3" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-20 h-20 border-2 border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">找不到合适的系列？</h2>
          <p className="text-xl text-gray-300 mb-8">
            我们的专业团队可以为您提供个性化建议
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/product-selector">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                <span className="mr-2">智能选择向导</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/collar-guide">
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
                <span className="mr-2">专业选择指南</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;