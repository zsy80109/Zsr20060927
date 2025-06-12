import { Product } from '../types';

export const products: Product[] = [
  {
    id: '7',
    name: '宠物危险警示项圈',
    price: 299.99,
    description: '智能危险预警项圈，配备先进传感器，能在宠物遇到潜在威胁时立即发出警示。通过APP实时监控，让主人及时察觉并采取措施，比人眼观察更快速地发现潜在危险，全方位保障宠物安全。配备高清OLED显示屏，实时显示宠物状态、电量和连接信息。',
    features: [
      '先进危险识别传感器，可检测异常行为和环境威胁',
      'APP实时监控预警，支持iOS和Android',
      '智能震动和声音提醒系统',
      'LED警示灯带，夜间可视',
      'IP67级防水防尘设计',
      '续航时间长达7天',
      '舒适贴合材质，三种尺寸可选',
      '高清OLED显示屏',
      'USB-C快速充电',
      '蓝牙5.0连接',
      '支持OTA固件升级',
      '实时定位追踪'
    ],
    colors: [
      { name: '深空灰', value: '#343434' },
      { name: '极光白', value: '#FFFFFF' },
      { name: '星夜蓝', value: '#1B3759' },
      { name: '荧光绿', value: '#7FFF00' }
    ],
    sizes: [
      { name: '小号', value: 'S' },
      { name: '中号', value: 'M' },
      { name: '大号', value: 'L' }
    ],
    images: [
      'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
      '/微信图片_20250520113745.jpg',
      'https://images.pexels.com/photos/5255204/pexels-photo-5255204.jpeg'
    ],
    category: '智能',
    material: '塑料',
    inStock: true,
    isNewArrival: true,
    isBestseller: false,
    rating: 4.9,
    reviewCount: 28
  },
  {
    id: '1',
    name: '经典皮革项圈',
    price: 29.99,
    description: '手工制作的优质皮革项圈，将耐用性与永恒的风格完美结合。适合日常佩戴和特殊场合。',
    features: [
      '优质全粒面皮革',
      '黄铜五金配件',
      '手工缝制边缘',
      '可调节长度',
      '加固D形环'
    ],
    colors: [
      { name: '栗子棕', value: '#8B4513' },
      { name: '午夜黑', value: '#0A0A0A' },
      { name: '马鞍棕', value: '#A76F30' }
    ],
    sizes: [
      { name: '小号', value: 'S' },
      { name: '中号', value: 'M' },
      { name: '大号', value: 'L' }
    ],
    images: [
      'https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg',
      'https://images.pexels.com/photos/5255202/pexels-photo-5255202.jpeg',
      'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg'
    ],
    category: '经典',
    material: '皮革',
    inStock: true,
    isNewArrival: false,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: '2',
    name: '探险防水项圈',
    price: 34.99,
    description: '专为活跃的狗狗设计的耐用防水项圈。完美适合户外探险、游泳和雨天散步。',
    features: [
      '防水涂层',
      '快干材料',
      '不锈钢配件',
      '反光缝线',
      '防异味'
    ],
    colors: [
      { name: '森林绿', value: '#2C5E1A' },
      { name: '海洋蓝', value: '#0077B6' },
      { name: '日落橙', value: '#FF7F50' }
    ],
    sizes: [
      { name: '小号', value: 'S' },
      { name: '中号', value: 'M' },
      { name: '大号', value: 'L' },
      { name: '特大号', value: 'XL' }
    ],
    images: [
      'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
      'https://images.pexels.com/photos/5255204/pexels-photo-5255204.jpeg',
      'https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg'
    ],
    category: '运动',
    material: '尼龙',
    inStock: true,
    isNewArrival: true,
    isBestseller: false,
    rating: 4.6,
    reviewCount: 89
  },
  {
    id: '3',
    name: '豪华软垫项圈',
    price: 39.99,
    description: '超舒适的软垫项圈，防止磨损和刺激。将奢华与实用舒适完美结合。',
    features: [
      '记忆海绵垫',
      '柔软超细纤维内衬',
      '刺绣细节',
      '镀金配件',
      '防过敏材料'
    ],
    colors: [
      { name: '皇家紫', value: '#7851A9' },
      { name: '香槟金', value: '#F7E7CE' },
      { name: '玫瑰粉', value: '#FF9999' }
    ],
    sizes: [
      { name: '特小号', value: 'XS' },
      { name: '小号', value: 'S' },
      { name: '中号', value: 'M' },
      { name: '大号', value: 'L' }
    ],
    images: [
      '/微信图片_20250520145202.jpg',
      'https://images.pexels.com/photos/7210544/pexels-photo-7210544.jpeg',
      'https://images.pexels.com/photos/6568950/pexels-photo-6568950.jpeg'
    ],
    category: '奢华',
    material: '超细纤维',
    inStock: true,
    isNewArrival: false,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: '4',
    name: '个性化铭牌项圈',
    price: 42.99,
    description: '带有刻字铭牌的定制项圈。时尚实用的身份识别，无需悬挂标牌。',
    features: [
      '定制刻字铭牌',
      '优质棉织带',
      '防锈五金件',
      '多种字体选择',
      '铭牌上的联系信息'
    ],
    colors: [
      { name: '海军蓝', value: '#000080' },
      { name: '酒红色', value: '#800020' },
      { name: '森林绿', value: '#228B22' }
    ],
    sizes: [
      { name: '小号', value: 'S' },
      { name: '中号', value: 'M' },
      { name: '大号', value: 'L' }
    ],
    images: [
      'https://images.pexels.com/photos/7210270/pexels-photo-7210270.jpeg',
      'https://images.pexels.com/photos/5255536/pexels-photo-5255536.jpeg',
      'https://images.pexels.com/photos/5255223/pexels-photo-5255223.jpeg'
    ],
    category: '个性化',
    material: '棉织物',
    inStock: true,
    isNewArrival: true,
    isBestseller: false,
    rating: 4.7,
    reviewCount: 73
  },
  {
    id: '5',
    name: '环保麻质项圈',
    price: 24.99,
    description: '可持续环保的有机麻制项圈。耐用、天然抗菌，特别适合敏感皮肤的狗狗。',
    features: [
      '有机麻材料',
      '环保染料',
      '回收金属配件',
      '可生物降解包装',
      '低过敏性'
    ],
    colors: [
      { name: '自然色', value: '#F5F5DC' },
      { name: '鼠尾草绿', value: '#B2AC88' },
      { name: '赤陶色', value: '#E2725B' }
    ],
    sizes: [
      { name: '特小号', value: 'XS' },
      { name: '小号', value: 'S' },
      { name: '中号', value: 'M' },
      { name: '大号', value: 'L' },
      { name: '特大号', value: 'XL' }
    ],
    images: [
      'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
      'https://images.pexels.com/photos/8434754/pexels-photo-8434754.jpeg',
      'https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg'
    ],
    category: '环保',
    material: '麻',
    inStock: true,
    isNewArrival: false,
    isBestseller: false,
    rating: 4.5,
    reviewCount: 42
  },
  {
    id: '6',
    name: 'LED安全项圈',
    price: 32.99,
    description: '带有可充电LED技术的发光项圈，提高夜间散步时的可见度。三种照明模式适应不同环境。',
    features: [
      '可充电LED灯',
      '三种照明模式',
      '防水设计',
      'USB充电端口',
      '10小时续航'
    ],
    colors: [
      { name: '红色', value: '#FF0000' },
      { name: '蓝色', value: '#0000FF' },
      { name: '绿色', value: '#00FF00' }
    ],
    sizes: [
      { name: '小号', value: 'S' },
      { name: '中号', value: 'M' },
      { name: '大号', value: 'L' }
    ],
    images: [
      'https://images.pexels.com/photos/2951921/pexels-photo-2951921.jpeg',
      'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg',
      'https://images.pexels.com/photos/1852914/pexels-photo-1852914.jpeg'
    ],
    category: '安全',
    material: '尼龙',
    inStock: true,
    isNewArrival: true,
    isBestseller: false,
    rating: 4.4,
    reviewCount: 67
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, limit);
};