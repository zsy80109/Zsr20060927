import React, { useState } from 'react';
import { Shield, Truck, RefreshCw, Award, X, MapPin, Package, Clock, CheckCircle } from 'lucide-react';

const features = [
  {
    id: 'quality',
    icon: <Award className="h-8 w-8 text-emerald-600" />,
    title: '品质承诺',
    description: '手工制作，优质材料，严格品控标准',
    details: {
      title: '品质承诺详情',
      content: [
        {
          title: '材料保证',
          items: [
            '意大利进口真皮，通过环保认证',
            '日本YKK拉链，10万次开合测试',
            '德国五金配件，防锈防腐蚀',
            '美国记忆棉，NASA级别材料'
          ]
        },
        {
          title: '工艺标准',
          items: [
            '手工缝制，每针间距精确到1mm',
            '三重质检，确保零缺陷出厂',
            '48小时老化测试，模拟长期使用',
            '专业工匠，平均15年制作经验'
          ]
        },
        {
          title: '质保服务',
          items: [
            '终身质保，非人为损坏免费维修',
            '30天无理由退换，满意度100%',
            '1年内免费保养服务',
            '专属客服，24小时在线支持'
          ]
        }
      ]
    }
  },
  {
    id: 'shipping',
    icon: <Truck className="h-8 w-8 text-emerald-600" />,
    title: '快速配送',
    description: '全国包邮，当日发货，次日达服务',
    details: {
      title: '配送服务详情',
      content: [
        {
          title: '包邮政策',
          items: [
            '全国范围内免费配送，无最低消费限制',
            '港澳台地区顺丰包邮',
            '海外配送支持，运费到付',
            '偏远地区额外1-2天送达'
          ]
        },
        {
          title: '配送时效',
          items: [
            '北京、上海、广州、深圳：当日达',
            '一线城市及省会城市：次日达',
            '二三线城市：2-3天送达',
            '县级城市及乡镇：3-5天送达'
          ]
        },
        {
          title: '配送范围',
          items: [
            '覆盖全国2800+城市',
            '支持送货上门服务',
            '提供代收货款服务',
            '支持指定时间配送'
          ]
        }
      ],
      addresses: [
        { city: '北京', areas: ['朝阳区', '海淀区', '西城区', '东城区', '丰台区', '石景山区'], time: '当日达' },
        { city: '上海', areas: ['浦东新区', '黄浦区', '静安区', '徐汇区', '长宁区', '普陀区'], time: '当日达' },
        { city: '广州', areas: ['天河区', '越秀区', '荔湾区', '海珠区', '白云区', '番禺区'], time: '当日达' },
        { city: '深圳', areas: ['南山区', '福田区', '罗湖区', '宝安区', '龙岗区', '盐田区'], time: '当日达' },
        { city: '杭州', areas: ['西湖区', '拱墅区', '江干区', '下城区', '上城区', '滨江区'], time: '次日达' },
        { city: '成都', areas: ['锦江区', '青羊区', '金牛区', '武侯区', '成华区', '高新区'], time: '次日达' }
      ]
    }
  },
  {
    id: 'returns',
    icon: <RefreshCw className="h-8 w-8 text-emerald-600" />,
    title: '退换保障',
    description: '30天无理由退换，满意度保证',
    details: {
      title: '退换保障详情',
      content: [
        {
          title: '退换政策',
          items: [
            '30天无理由退换，不满意全额退款',
            '商品质量问题，免费退换货',
            '尺寸不合适，免费换货服务',
            '收货7天内，支持无条件退货'
          ]
        },
        {
          title: '退换流程',
          items: [
            '在线申请退换货，1分钟完成',
            '客服审核通过，当日安排取件',
            '商品检验合格，24小时内退款',
            '换货商品，优先发货处理'
          ]
        },
        {
          title: '费用说明',
          items: [
            '质量问题退换货，运费由我们承担',
            '个人原因退货，需承担返程运费',
            '换货服务完全免费',
            '退款原路返回，3-5个工作日到账'
          ]
        }
      ]
    }
  },
  {
    id: 'safety',
    icon: <Shield className="h-8 w-8 text-emerald-600" />,
    title: '安全保障',
    description: '多重安全认证，宠物健康第一',
    details: {
      title: '安全保障详情',
      content: [
        {
          title: '材料安全',
          items: [
            'FDA食品级安全认证材料',
            '无毒无害，通过SGS检测',
            '防过敏处理，敏感肌肤适用',
            '环保染料，不含重金属'
          ]
        },
        {
          title: '设计安全',
          items: [
            '圆润边角设计，防止划伤',
            '快开卡扣，紧急情况快速脱离',
            '反光条设计，夜间安全可见',
            '透气孔设计，防止闷热不适'
          ]
        },
        {
          title: '使用安全',
          items: [
            '详细使用说明，避免误用',
            '专业客服指导，正确佩戴',
            '定期检查提醒，确保安全',
            '意外保险覆盖，安心使用'
          ]
        }
      ]
    }
  }
];

const ValueProposition: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const openModal = (featureId: string) => {
    setSelectedFeature(featureId);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  const currentFeature = features.find(f => f.id === selectedFeature);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">为什么选择我们</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们承诺为您和您的宠物提供最优质的产品和服务体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                onClick={() => openModal(feature.id)}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Click indicator */}
                  <div className="flex items-center text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">点击了解详情</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-emerald-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedFeature && currentFeature && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity bg-black bg-opacity-50"
              onClick={closeModal}
            />

            {/* Modal panel */}
            <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 px-8 py-8 text-white">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 text-white hover:text-gray-200 bg-white bg-opacity-20 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center">
                  <div className="p-3 bg-white bg-opacity-20 rounded-xl mr-4">
                    {currentFeature.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{currentFeature.details.title}</h2>
                    <p className="text-emerald-100">{currentFeature.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 py-8">
                <div className="space-y-8">
                  {currentFeature.details.content.map((section, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                        {section.title}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Special content for shipping */}
                  {selectedFeature === 'shipping' && currentFeature.details.addresses && (
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                        主要配送城市及区域
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentFeature.details.addresses.map((location, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-gray-900">{location.city}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                location.time === '当日达' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {location.time}
                              </span>
                            </div>
                            <div className="space-y-1">
                              {location.areas.map((area, areaIndex) => (
                                <div key={areaIndex} className="text-sm text-gray-600 flex items-center">
                                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                                  {area}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Shipping benefits */}
                      <div className="mt-6 grid md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 text-center">
                          <Package className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                          <h5 className="font-semibold text-gray-900 mb-1">全国包邮</h5>
                          <p className="text-sm text-gray-600">无最低消费限制</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center">
                          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <h5 className="font-semibold text-gray-900 mb-1">当日发货</h5>
                          <p className="text-sm text-gray-600">下单后24小时内</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center">
                          <Truck className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                          <h5 className="font-semibold text-gray-900 mb-1">物流跟踪</h5>
                          <p className="text-sm text-gray-600">实时查看配送状态</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    了解完毕，开始购物
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ValueProposition;