import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Heart, Zap, ChevronDown, Play, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import FeatureModal from '../components/modals/FeatureModal';

const LandingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeModal, setActiveModal] = useState<'smart' | 'comfort' | 'safety' | 'quality' | null>(null);

  const heroSlides = [
    {
      image: '/微信图片_20250520113745.jpg',
      title: '智能守护，安全无忧',
      subtitle: '全新AI危险警示项圈，实时保护您的宠物',
      cta: '了解智能项圈',
      link: '/product/7',
      badge: '革命性科技'
    },
    {
      image: '/微信图片_20250520145202.jpg',
      title: '奢华舒适，品质之选',
      subtitle: '记忆棉衬垫设计，给宠物最贴心的呵护',
      cta: '探索奢华系列',
      link: '/product/3',
      badge: '顶级舒适'
    },
    {
      image: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
      title: '户外探险，无畏前行',
      subtitle: '防水耐磨，陪伴每一次冒险之旅',
      cta: '查看探险系列',
      link: '/product/2',
      badge: '专业户外'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: '智能科技',
      description: 'AI驱动的危险识别系统，实时监控宠物安全状态',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50',
      image: '/微信图片_20250520113745.jpg',
      modalType: 'smart' as const,
      stats: '99.9% 准确率'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '舒适体验',
      description: '记忆棉衬垫设计，确保长时间佩戴的舒适感',
      color: 'from-pink-500 to-red-500',
      bgColor: 'from-pink-50 to-red-50',
      image: '/微信图片_20250520145202.jpg',
      modalType: 'comfort' as const,
      stats: '24小时 舒适佩戴'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '安全保障',
      description: '多重安全设计，快开卡扣，反光夜光功能',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      image: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
      modalType: 'safety' as const,
      stats: '360° 安全防护'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: '品质保证',
      description: '精选优质材料，手工制作，终身质保承诺',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      image: 'https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg',
      modalType: 'quality' as const,
      stats: '终身 质保承诺'
    }
  ];

  const testimonials = [
    {
      name: '张女士',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      text: '智能项圈真的很棒！上次我家金毛走丢了，通过GPS定位很快就找到了。',
      dogName: '金毛',
      rating: 5
    },
    {
      name: '李先生',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      text: '记忆棉项圈非常舒适，我家法斗戴了一整天都没有不适感。',
      dogName: '法斗',
      rating: 5
    },
    {
      name: '王女士',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      text: '夜光功能很实用，晚上遛狗再也不用担心安全问题了。',
      dogName: '边牧',
      rating: 5
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Slideshow */}
      <div className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>
        ))}

        {/* Enhanced Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                {/* Badge */}
                <div className="inline-flex items-center bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2 mb-6">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-emerald-300 text-sm font-medium">
                    {heroSlides[currentSlide].badge}
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={heroSlides[currentSlide].link}>
                    <Button size="lg" className="group bg-emerald-600 hover:bg-emerald-700">
                      {heroSlides[currentSlide].cta}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/collar-guide">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                      <Play className="mr-2 w-5 h-5" />
                      观看演示
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentSlide ? 'w-12 h-3' : 'w-3 h-3'
              }`}
            >
              <div className={`absolute inset-0 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/70'
              }`} />
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">向下滚动</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              为什么选择我们
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们致力于为您的宠物提供最优质、最安全、最舒适的项圈产品
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setActiveModal(feature.modalType)}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  
                  {/* Stats */}
                  <div className={`inline-flex items-center bg-gradient-to-r ${feature.bgColor} px-3 py-1 rounded-full`}>
                    <span className="text-sm font-medium text-gray-700">{feature.stats}</span>
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Product Showcase */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-emerald-300 text-sm font-medium">最新科技</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                智能项圈
                <span className="block text-emerald-400">重新定义宠物安全</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                集成AI危险识别、GPS定位、健康监测于一体的革命性产品。
                让科技守护您最珍贵的伙伴。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Shield className="w-5 h-5" />, text: '实时危险预警' },
                  { icon: <Zap className="w-5 h-5" />, text: 'GPS精准定位' },
                  { icon: <Heart className="w-5 h-5" />, text: '健康数据监测' },
                  { icon: <Star className="w-5 h-5" />, text: '7天超长续航' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/product/7">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 group">
                    立即体验
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                  onClick={() => setActiveModal('smart')}
                >
                  了解技术详情
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/微信图片_20250520113745.jpg"
                  alt="智能项圈"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold animate-pulse">
                  NEW
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-emerald-500/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">用户真实评价</h2>
            <p className="text-xl text-gray-600">听听其他宠物主人的使用体验</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.dogName}的主人</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            开始您的项圈选择之旅
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            不确定选择哪款项圈？我们的智能选择系统将为您推荐最适合的产品
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/product-selector">
              <Button size="lg" variant="secondary" className="group">
                智能选择向导
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/collar-guide">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                专业选择指南
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-emerald-500/30">
            {[
              { number: '10,000+', label: '满意客户' },
              { number: '99.9%', label: '好评率' },
              { number: '24/7', label: '客户服务' },
              { number: '终身', label: '质保承诺' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-emerald-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Modals */}
      <FeatureModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        featureType={activeModal || 'smart'}
      />
    </div>
  );
};

export default LandingPage;