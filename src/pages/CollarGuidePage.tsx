import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Activity, Moon, Zap, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

interface GuideSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  recommendations: Recommendation[];
}

interface Recommendation {
  title: string;
  description: string;
  features: string[];
  productIds: string[];
  image: string;
}

const guideSections: GuideSection[] = [
  {
    id: 'comfort',
    title: '舒适性优先',
    icon: <Heart className="w-8 h-8" />,
    description: '为您的宠物选择最舒适的项圈，确保长时间佩戴无压迫感',
    recommendations: [
      {
        title: '记忆棉衬垫项圈',
        description: '内层采用记忆棉材质，完美贴合宠物颈部曲线，避免金属直接接触皮肤',
        features: [
          '记忆海绵垫层，分散压力',
          '柔软超细纤维内衬，防过敏',
          '可调节范围大，预留3-4指空隙',
          '轻量化设计，减少颈部负担'
        ],
        productIds: ['3'],
        image: '/微信图片_20250520145202.jpg'
      },
      {
        title: '棉质衬垫尼龙项圈',
        description: '尼龙包芯设计配合棉质内衬，兼顾耐用性与舒适性',
        features: [
          '优质棉织内衬，透气舒适',
          '尼龙外层，耐磨防水',
          '宽度适中：中小型犬≤2.5cm，大型犬≤4cm',
          '防挣脱设计，安全可靠'
        ],
        productIds: ['4', '5'],
        image: 'https://images.pexels.com/photos/7210270/pexels-photo-7210270.jpeg'
      }
    ]
  },
  {
    id: 'safety',
    title: '安全性保障',
    icon: <Shield className="w-8 h-8" />,
    description: '多重安全设计，保护您的宠物在各种环境下的安全',
    recommendations: [
      {
        title: '快开卡扣设计',
        description: '紧急情况下可快速解开，参考RUFFWEAR品牌标准',
        features: [
          '一键快开卡扣，紧急脱离',
          '不锈钢五金配件，防锈耐用',
          '加固D形环，承重能力强',
          '人体工学设计，操作简便'
        ],
        productIds: ['2', '6'],
        image: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg'
      },
      {
        title: '反光夜光设计',
        description: '夜间遛狗必备，提高可见度确保安全',
        features: [
          '360°反光条设计',
          'LED灯带，三种照明模式',
          '可充电设计，续航10小时',
          '防水等级IP67，全天候使用'
        ],
        productIds: ['6'],
        image: 'https://images.pexels.com/photos/2951921/pexels-photo-2951921.jpeg'
      },
      {
        title: '防挣脱Y字型设计',
        description: '特别适合短鼻犬种（如法斗），有效防止脱落',
        features: [
          'Y字型胸背设计，分散拉力',
          '多点固定，防挣脱',
          '适合短鼻犬种体型',
          '减少颈部压迫，保护气管'
        ],
        productIds: ['3', '7'],
        image: '/微信图片_20250520145202.jpg'
      }
    ]
  },
  {
    id: 'adventure',
    title: '户外探险专用',
    icon: <Activity className="w-8 h-8" />,
    description: '专为户外活动设计，耐磨防水，承重能力强',
    recommendations: [
      {
        title: '登山扣防水项圈',
        description: '采用登山级扣具和防水涂层，适合各种户外环境',
        features: [
          '登山级铝合金扣具',
          '涤纶涂层防水材质',
          '耐磨损，抗撕裂',
          '快干设计，易清洁'
        ],
        productIds: ['2'],
        image: 'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg'
      },
      {
        title: '重载牵引项圈',
        description: '专为大型犬和强力牵引设计，承重能力超强',
        features: [
          '加厚尼龙织带，承重50kg+',
          '双重缝线加固',
          '防滑手柄设计',
          '适合训练和户外探险'
        ],
        productIds: ['1', '2'],
        image: 'https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg'
      }
    ]
  },
  {
    id: 'smart',
    title: '智能科技',
    icon: <Zap className="w-8 h-8" />,
    description: '集成先进科技，实时监控宠物状态和安全',
    recommendations: [
      {
        title: '危险警示智能项圈',
        description: 'AI驱动的危险识别系统，实时保护宠物安全',
        features: [
          'AI危险识别传感器',
          '实时GPS定位追踪',
          'APP远程监控预警',
          '高清OLED显示屏'
        ],
        productIds: ['7'],
        image: '/微信图片_20250520113745.jpg'
      }
    ]
  }
];

const CollarGuidePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('comfort');
  const [selectedDogSize, setSelectedDogSize] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');

  const currentSection = guideSections.find(section => section.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            专业项圈选择指南
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            根据舒适性、安全性和功能需求，为您的宠物选择最适合的项圈
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Assessment */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">快速评估</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                您的狗狗体型
              </label>
              <select
                value={selectedDogSize}
                onChange={(e) => setSelectedDogSize(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              >
                <option value="">请选择</option>
                <option value="small">小型犬 (5-15kg)</option>
                <option value="medium">中型犬 (15-30kg)</option>
                <option value="large">大型犬 (30kg+)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                主要活动场景
              </label>
              <select
                value={selectedActivity}
                onChange={(e) => setSelectedActivity(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              >
                <option value="">请选择</option>
                <option value="daily">日常散步</option>
                <option value="outdoor">户外探险</option>
                <option value="training">训练运动</option>
                <option value="night">夜间活动</option>
              </select>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg shadow-md p-2">
          {guideSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-6 py-3 rounded-md transition-all ${
                activeSection === section.id
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {section.icon}
              <span className="ml-2 font-medium">{section.title}</span>
            </button>
          ))}
        </div>

        {/* Content Section */}
        {currentSection && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-8">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-600 text-white p-3 rounded-lg mr-4">
                  {currentSection.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{currentSection.title}</h2>
                  <p className="text-gray-600 mt-2">{currentSection.description}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-12">
                {currentSection.recommendations.map((rec, index) => (
                  <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                      <img
                        src={rec.image}
                        alt={rec.title}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                    </div>
                    <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{rec.title}</h3>
                      <p className="text-gray-600 mb-6">{rec.description}</p>
                      <ul className="space-y-3 mb-6">
                        {rec.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        {rec.productIds.map((productId) => (
                          <Link key={productId} to={`/product/${productId}`}>
                            <Button variant="outline" size="sm">
                              查看产品
                            </Button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Size Guide Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">尺寸测量指南</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.pexels.com/photos/5255204/pexels-photo-5255204.jpeg"
                alt="测量指南"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">正确测量步骤</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  <span>使用软尺测量狗狗颈部最细处周长</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  <span>预留3-4指空隙，确保舒适度</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  <span>考虑成长空间（幼犬需额外预留）</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  <span>选择合适宽度：小型犬≤2.5cm，大型犬≤4cm</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">还有疑问？</h2>
          <p className="mb-6">我们的专业团队随时为您提供个性化建议</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/product-selector">
              <Button variant="secondary">
                智能选择向导
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                浏览所有产品
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollarGuidePage;