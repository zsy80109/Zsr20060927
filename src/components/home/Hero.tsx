import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3361721/pexels-photo-3361721.jpeg" 
          alt="狗狗佩戴项圈" 
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-emerald-400 mr-2" />
              <span className="text-emerald-300 font-medium">专业宠物项圈品牌</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              为您的最好朋友
              <span className="block text-emerald-400">打造时尚项圈</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              用爱手工制作，专注舒适与耐用。为每一个品种和风格打造的优质狗项圈。
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: <Shield className="w-6 h-6" />, text: '安全保障' },
                { icon: <Star className="w-6 h-6" />, text: '品质承诺' },
                { icon: <ArrowRight className="w-6 h-6" />, text: '快速配送' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                  <div className="text-emerald-400 mr-3">{feature.icon}</div>
                  <span className="text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/shop" 
                className="group inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">浏览商品</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/size-guide" 
                className="group inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-4 px-8 rounded-full transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                <span>尺寸指南</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">向下滚动探索更多</span>
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full opacity-30" />
      <div className="absolute bottom-20 right-32 w-16 h-16 border border-emerald-400/30 rounded-full opacity-50" />
    </div>
  );
};

export default Hero;