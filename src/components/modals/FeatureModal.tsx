import React from 'react';
import { X, ArrowRight, CheckCircle, Star, Shield, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureType: 'smart' | 'comfort' | 'safety' | 'quality';
}

const featureData = {
  smart: {
    icon: <Zap className="w-12 h-12" />,
    title: '智能科技',
    subtitle: 'AI驱动的危险识别系统，实时监控宠物安全状态',
    color: 'from-blue-500 to-purple-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50',
    heroImage: '/微信图片_20250520113745.jpg',
    sections: [
      {
        title: 'AI危险识别技术',
        description: '采用先进的机器学习算法，能够识别多种潜在威胁',
        image: 'https://images.pexels.com/photos/2951921/pexels-photo-2951921.jpeg',
        features: [
          '实时环境威胁检测',
          '异常行为模式识别',
          '智能预警系统',
          '多传感器融合技术'
        ]
      },
      {
        title: 'GPS精准定位',
        description: '高精度定位系统，确保您随时了解宠物位置',
        image: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg',
        features: [
          '室内外双重定位',
          '历史轨迹记录',
          '安全区域设置',
          '实时位置共享'
        ]
      },
      {
        title: '健康监测',
        description: '全天候监测宠物生理指标，关爱每一个细节',
        image: 'https://images.pexels.com/photos/1852914/pexels-photo-1852914.jpeg',
        features: [
          '心率监测',
          '活动量统计',
          '睡眠质量分析',
          '健康报告生成'
        ]
      }
    ],
    products: ['7'],
    cta: '体验智能项圈'
  },
  comfort: {
    icon: <Heart className="w-12 h-12" />,
    title: '舒适体验',
    subtitle: '记忆棉衬垫设计，确保长时间佩戴的舒适感',
    color: 'from-pink-500 to-red-500',
    bgColor: 'bg-gradient-to-br from-pink-50 to-red-50',
    heroImage: '/微信图片_20250520145202.jpg',
    sections: [
      {
        title: '记忆棉科技',
        description: '采用NASA级记忆棉材料，完美贴合宠物颈部曲线',
        image: '/微信图片_20250520145202.jpg',
        features: [
          '温感记忆棉内衬',
          '压力均匀分散',
          '防过敏材质',
          '透气性设计'
        ]
      },
      {
        title: '人体工学设计',
        description: '基于宠物解剖学设计，确保最佳佩戴体验',
        image: 'https://images.pexels.com/photos/7210544/pexels-photo-7210544.jpeg',
        features: [
          '颈部曲线贴合',
          '重量分布优化',
          '活动自由度保证',
          '长时间佩戴无压迫'
        ]
      },
      {
        title: '高级材质',
        description: '精选优质材料，触感柔软，经久耐用',
        image: 'https://images.pexels.com/photos/6568950/pexels-photo-6568950.jpeg',
        features: [
          '超细纤维外层',
          '抗菌防臭处理',
          '易清洁维护',
          '色彩持久不褪'
        ]
      }
    ],
    products: ['3', '5'],
    cta: '选择舒适项圈'
  },
  safety: {
    icon: <Shield className="w-12 h-12" />,
    title: '安全保障',
    subtitle: '多重安全设计，快开卡扣，反光夜光功能',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    heroImage: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
    sections: [
      {
        title: '快开安全卡扣',
        description: '紧急情况下一键快速解开，保护宠物安全',
        image: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
        features: [
          '一键快速释放',
          '防意外开启',
          '耐用金属材质',
          '人体工学操作'
        ]
      },
      {
        title: '夜间安全系统',
        description: '多重夜间可见性设计，确保夜间遛狗安全',
        image: 'https://images.pexels.com/photos/2951921/pexels-photo-2951921.jpeg',
        features: [
          '360°反光条',
          'LED警示灯',
          '可充电设计',
          '防水防尘'
        ]
      },
      {
        title: '防挣脱设计',
        description: '特别适合活跃宠物，有效防止意外脱落',
        image: 'https://images.pexels.com/photos/5255204/pexels-photo-5255204.jpeg',
        features: [
          '双重锁定机制',
          '强化连接点',
          '拉力测试认证',
          '适合各种体型'
        ]
      }
    ],
    products: ['2', '6', '7'],
    cta: '了解安全功能'
  },
  quality: {
    icon: <Star className="w-12 h-12" />,
    title: '品质保证',
    subtitle: '精选优质材料，手工制作，终身质保承诺',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
    heroImage: 'https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg',
    sections: [
      {
        title: '手工制作工艺',
        description: '每一个项圈都由经验丰富的工匠精心制作',
        image: 'https://images.pexels.com/photos/7210544/pexels-photo-7210544.jpeg',
        features: [
          '传统手工技艺',
          '精细缝制工艺',
          '严格质量控制',
          '个性化定制'
        ]
      },
      {
        title: '优质材料选择',
        description: '严格筛选全球优质原材料，确保产品品质',
        image: 'https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg',
        features: [
          '意大利进口皮革',
          '日本YKK拉链',
          '德国五金配件',
          '环保认证材料'
        ]
      },
      {
        title: '质量保证体系',
        description: '完善的质量保证体系，让您购买无忧',
        image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg',
        features: [
          '终身质保承诺',
          '30天无理由退换',
          '免费维修服务',
          '品质追溯系统'
        ]
      }
    ],
    products: ['1', '3', '4'],
    cta: '了解品质承诺'
  }
};

const FeatureModal: React.FC<FeatureModalProps> = ({ isOpen, onClose, featureType }) => {
  if (!isOpen) return null;

  const feature = featureData[featureType];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-black bg-opacity-50"
          onClick={onClose}
        />

        {/* Modal panel */}
        <div className="inline-block w-full max-w-6xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {/* Header */}
          <div className={`relative ${feature.bgColor} px-8 py-12`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 bg-white rounded-full shadow-md"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex items-center mb-6">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mr-6`}>
                {feature.icon}
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">{feature.title}</h2>
                <p className="text-xl text-gray-600">{feature.subtitle}</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={feature.heroImage}
                alt={feature.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-8">
            <div className="space-y-12">
              {feature.sections.map((section, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{section.description}</p>
                    <ul className="space-y-3">
                      {section.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className={`mt-12 p-8 rounded-2xl ${feature.bgColor}`}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  体验{feature.title}的魅力
                </h3>
                <p className="text-gray-600 mb-6">
                  查看我们精心设计的相关产品，为您的宠物选择最适合的项圈
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {feature.products.map((productId) => (
                    <Link key={productId} to={`/product/${productId}`}>
                      <Button 
                        onClick={onClose}
                        className="group"
                      >
                        {feature.cta}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ))}
                  <Link to="/shop">
                    <Button 
                      variant="outline" 
                      onClick={onClose}
                    >
                      浏览所有产品
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;