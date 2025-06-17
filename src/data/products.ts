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
      { name: '小号 (30-35cm)', value: 'S' },
      { name: '中号 (35-45cm)', value: 'M' },
      { name: '大号 (45-55cm)', value: 'L' }
    ],
    images: [
      'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
      '/微信图片_20250520113745.jpg',
      'https://images.pexels.com/photos/5255204/pexels-photo-5255204.jpeg'
    ],
    category: '智能',
    material: '高科技复合材料',
    inStock: true,
    isNewArrival: true,
    isBestseller: false,
    rating: 4.9,
    reviewCount: 28
  },
  {
    id: '1',
    name: '经典皮革项圈',
    price: 89.99,
    description: '手工制作的优质皮革项圈，将耐用性与永恒的风格完美结合。采用意大利进口头层牛皮，经过传统鞣制工艺处理，质地柔软且极其耐用。适合日常佩戴和特殊场合，是追求品质生活的宠物主人的首选。',
    features: [
      '意大利进口头层牛皮，质地柔软耐用',
      '黄铜五金配件，防锈防腐蚀',
      '手工缝制边缘，工艺精湛',
      '可调节长度设计，适应不同体型',
      '加固D形环，承重能力强',
      '天然皮革香味，无化学异味',
      '越用越有光泽，展现独特魅力'
    ],
    colors: [
      { name: '栗子棕', value: '#8B4513' },
      { name: '午夜黑', value: '#0A0A0A' },
      { name: '马鞍棕', value: '#A76F30' },
      { name: '深红棕', value: '#654321' }
    ],
    sizes: [
      { name: '小号 (25-30cm)', value: 'S' },
      { name: '中号 (30-40cm)', value: 'M' },
      { name: '大号 (40-50cm)', value: 'L' },
      { name: '特大号 (50-60cm)', value: 'XL' }
    ],
    images: [
      'https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg',
      'https://images.pexels.com/photos/5255202/pexels-photo-5255202.jpeg',
      'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg'
    ],
    category: '经典',
    material: '意大利头层牛皮',
    inStock: true,
    isNewArrival: false,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: '2',
    name: '探险防水项圈',
    price: 119.99,
    description: '专为活跃的狗狗设计的耐用防水项圈。采用军用级尼龙材质和防水涂层技术，完美适合户外探险、游泳和雨天散步。经过严格的耐磨测试，能够承受各种恶劣环境的考验。',
    features: [
      '军用级尼龙材质，强度是普通尼龙的3倍',
      '纳米防水涂层，IPX7级防水',
      '快干材料，30秒内表面干燥',
      '316不锈钢配件，海水环境适用',
      '3M反光缝线，夜间安全可见',
      '抗菌防臭处理，长期使用无异味',
      '耐温范围-40°C至80°C'
    ],
    colors: [
      { name: '森林绿', value: '#2C5E1A' },
      { name: '海洋蓝', value: '#0077B6' },
      { name: '日落橙', value: '#FF7F50' },
      { name: '沙漠棕', value: '#D2B48C' }
    ],
    sizes: [
      { name: '小号 (25-30cm)', value: 'S' },
      { name: '中号 (30-40cm)', value: 'M' },
      { name: '大号 (40-50cm)', value: 'L' },
      { name: '特大号 (50-65cm)', value: 'XL' }
    ],
    images: [
      'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg',
      'https://images.pexels.com/photos/5255204/pexels-photo-5255204.jpeg',
      'https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg'
    ],
    category: '运动',
    material: '军用级尼龙',
    inStock: true,
    isNewArrival: true,
    isBestseller: false,
    rating: 4.6,
    reviewCount: 89
  },
  {
    id: '3',
    name: '豪华记忆棉项圈',
    price: 159.99,
    description: '超舒适的记忆棉项圈，防止磨损和刺激。采用NASA级记忆棉技术，能够根据宠物体温自动调节软硬度，提供个性化的舒适体验。将奢华与实用舒适完美结合，是高端宠物用品的典范。',
    features: [
      'NASA级记忆棉内芯，温感自适应',
      '奥地利超细纤维外层，触感丝滑',
      '手工刺绣装饰，彰显尊贵身份',
      '24K镀金配件，永不褪色',
      '医用级防过敏材料，敏感肌肤适用',
      '可拆卸清洗设计，保持卫生',
      '人体工学弧度设计，完美贴合颈部'
    ],
    colors: [
      { name: '皇家紫', value: '#7851A9' },
      { name: '香槟金', value: '#F7E7CE' },
      { name: '玫瑰粉', value: '#FF9999' },
      { name: '珍珠白', value: '#F8F8FF' }
    ],
    sizes: [
      { name: '特小号 (20-25cm)', value: 'XS' },
      { name: '小号 (25-30cm)', value: 'S' },
      { name: '中号 (30-40cm)', value: 'M' },
      { name: '大号 (40-50cm)', value: 'L' }
    ],
    images: [
      '/微信图片_20250520145202.jpg',
      'https://images.pexels.com/photos/7210544/pexels-photo-7210544.jpeg',
      'https://images.pexels.com/photos/6568950/pexels-photo-6568950.jpeg'
    ],
    category: '奢华',
    material: '记忆棉+超细纤维',
    inStock: true,
    isNewArrival: false,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: '4',
    name: '个性化铭牌项圈',
    price: 79.99,
    description: '带有定制刻字铭牌的个性化项圈。采用激光雕刻技术，可刻制宠物姓名、主人联系方式等信息。时尚实用的身份识别解决方案，无需悬挂标牌，避免噪音和丢失风险。',
    features: [
      '激光雕刻定制铭牌，字迹清晰持久',
      '优质棉帆布织带，透气舒适',
      '316L不锈钢铭牌，防锈防腐蚀',
      '多种字体和图案选择',
      '可刻制中英文、数字、符号',
      '铭牌可单独更换，经济实用',
      '快速扣设计，佩戴方便'
    ],
    colors: [
      { name: '海军蓝', value: '#000080' },
      { name: '酒红色', value: '#800020' },
      { name: '森林绿', value: '#228B22' },
      { name: '深灰色', value: '#696969' }
    ],
    sizes: [
      { name: '小号 (25-30cm)', value: 'S' },
      { name: '中号 (30-40cm)', value: 'M' },
      { name: '大号 (40-50cm)', value: 'L' }
    ],
    images: [
      'https://images.pexels.com/photos/7210270/pexels-photo-7210270.jpeg',
      'https://images.pexels.com/photos/5255536/pexels-photo-5255536.jpeg',
      'https://images.pexels.com/photos/5255223/pexels-photo-5255223.jpeg'
    ],
    category: '个性化',
    material: '棉帆布+不锈钢',
    inStock: true,
    isNewArrival: true,
    isBestseller: false,
    rating: 4.7,
    reviewCount: 73
  },
  {
    id: '5',
    name: '环保有机麻项圈',
    price: 69.99,
    description: '可持续环保的有机麻制项圈。采用100%有机麻纤维，通过GOTS有机认证。天然抗菌防螨，特别适合敏感皮肤的狗狗。体现环保理念的同时，为宠物提供天然舒适的佩戴体验。',
    features: [
      '100%有机麻纤维，GOTS认证',
      '天然抗菌防螨，无化学处理',
      '植物染料着色，无毒无害',
      '回收再生金属配件',
      '可生物降解包装材料',
      '低过敏性，敏感肌肤适用',
      '透气性极佳，夏季舒适'
    ],
    colors: [
      { name: '自然原色', value: '#F5F5DC' },
      { name: '鼠尾草绿', value: '#B2AC88' },
      { name: '赤陶橙', value: '#E2725B' },
      { name: '薰衣草紫', value: '#E6E6FA' }
    ],
    sizes: [
      { name: '特小号 (20-25cm)', value: 'XS' },
      { name: '小号 (25-30cm)', value: 'S' },
      { name: '中号 (30-40cm)', value: 'M' },
      { name: '大号 (40-50cm)', value: 'L' },
      { name: '特大号 (50-60cm)', value: 'XL' }
    ],
    images: [
      'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
      'https://images.pexels.com/photos/8434754/pexels-photo-8434754.jpeg',
      'https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg'
    ],
    category: '环保',
    material: '有机麻纤维',
    inStock: true,
    isNewArrival: false,
    isBestseller: false,
    rating: 4.5,
    reviewCount: 42
  },
  {
    id: '6',
    name: 'LED智能安全项圈',
    price: 99.99,
    description: '带有可充电LED技术的智能发光项圈，提高夜间散步时的可见度。配备三种照明模式和智能光感应器，能够根据环境光线自动调节亮度。USB-C快充技术，续航时间长达15小时。',
    features: [
      '高亮度LED灯带，可见距离500米',
      '三种照明模式：常亮、闪烁、呼吸',
      '智能光感应器，自动调节亮度',
      'IPX8级防水设计，可水下1米',
      'USB-C快充，2小时充满',
      '15小时超长续航时间',
      '低电量提醒功能'
    ],
    colors: [
      { name: '炫酷红', value: '#FF0000' },
      { name: '科技蓝', value: '#0000FF' },
      { name: '活力绿', value: '#00FF00' },
      { name: '警示橙', value: '#FFA500' }
    ],
    sizes: [
      { name: '小号 (25-30cm)', value: 'S' },
      { name: '中号 (30-40cm)', value: 'M' },
      { name: '大号 (40-50cm)', value: 'L' }
    ],
    images: [
      'https://images.pexels.com/photos/2951921/pexels-photo-2951921.jpeg',
      'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg',
      'https://images.pexels.com/photos/1852914/pexels-photo-1852914.jpeg'
    ],
    category: '安全',
    material: '硅胶+LED模块',
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

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByMaterial = (material: string): Product[] => {
  return products.filter(product => product.material === material);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.isBestseller);
};

export const getNewArrivalProducts = (): Product[] => {
  return products.filter(product => product.isNewArrival);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.material.toLowerCase().includes(lowercaseQuery) ||
    product.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};