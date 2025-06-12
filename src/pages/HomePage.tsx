import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';
import ValueProposition from '../components/home/ValueProposition';
import Testimonials from '../components/home/Testimonials';

const HomePage: React.FC = () => {
  // Get smart collar first
  const smartCollar = products.find(product => product.id === '7');
  const smartCollarArray = smartCollar ? [smartCollar] : [];
  
  // Get bestsellers
  const bestsellers = products.filter(product => product.isBestseller);
  
  // Get new arrivals
  const newArrivals = products.filter(product => product.isNewArrival);
  
  return (
    <div>
      <Hero />
      {smartCollarArray.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <ProductGrid products={smartCollarArray} title="智能守护 - 宠物危险警示项圈" />
        </div>
      )}
      <FeaturedCategories />
      <div className="container mx-auto px-4 py-12">
        <ProductGrid products={bestsellers} title="畅销商品" />
      </div>
      <ValueProposition />
      <div className="container mx-auto px-4 py-12">
        <ProductGrid products={newArrivals} title="新品上市" />
      </div>
      <Testimonials />
      <section className="py-16 bg-emerald-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">加入我们的宠物社区</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            订阅获取特别优惠、免费赠品和新产品发布信息。
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="请输入您的邮箱地址" 
              className="flex-grow px-4 py-3 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-900 hover:bg-emerald-800 px-6 py-3 rounded-r-md font-medium transition-colors">
              订阅
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;