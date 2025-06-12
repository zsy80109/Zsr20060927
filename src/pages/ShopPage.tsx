import React, { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Filter, X, SlidersHorizontal, Grid, List } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';
import Button from '../components/ui/Button';

const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  
  // Get current filters from URL
  const selectedCategories = searchParams.getAll('category');
  const selectedMaterials = searchParams.getAll('material');
  const minPrice = parseInt(searchParams.get('minPrice') || '0');
  const maxPrice = parseInt(searchParams.get('maxPrice') || '500');

  const categories = [
    { id: '经典', name: '经典', count: products.filter(p => p.category === '经典').length },
    { id: '运动', name: '运动', count: products.filter(p => p.category === '运动').length },
    { id: '奢华', name: '奢华', count: products.filter(p => p.category === '奢华').length },
    { id: '个性化', name: '个性化', count: products.filter(p => p.category === '个性化').length },
    { id: '环保', name: '环保', count: products.filter(p => p.category === '环保').length },
    { id: '安全', name: '安全', count: products.filter(p => p.category === '安全').length },
    { id: '智能', name: '智能', count: products.filter(p => p.category === '智能').length }
  ];

  const materials = [
    { id: '皮革', name: '皮革', count: products.filter(p => p.material === '皮革').length },
    { id: '尼龙', name: '尼龙', count: products.filter(p => p.material === '尼龙').length },
    { id: '超细纤维', name: '超细纤维', count: products.filter(p => p.material === '超细纤维').length },
    { id: '棉织物', name: '棉织物', count: products.filter(p => p.material === '棉织物').length },
    { id: '麻', name: '麻', count: products.filter(p => p.material === '麻').length },
    { id: '塑料', name: '塑料', count: products.filter(p => p.material === '塑料').length }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // Material filter
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) {
        return false;
      }

      // Price range filter
      if (product.price < minPrice || product.price > maxPrice) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        break;
      case 'bestseller':
        filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [selectedCategories, selectedMaterials, minPrice, maxPrice, sortBy]);

  const updateFilters = (type: 'category' | 'material', value: string, checked: boolean) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (type === 'category') {
      if (checked) {
        newParams.append('category', value);
      } else {
        const categories = newParams.getAll('category').filter(c => c !== value);
        newParams.delete('category');
        categories.forEach(c => newParams.append('category', c));
      }
    } else if (type === 'material') {
      if (checked) {
        newParams.append('material', value);
      } else {
        const materials = newParams.getAll('material').filter(m => m !== value);
        newParams.delete('material');
        materials.forEach(m => newParams.append('material', m));
      }
    }
    
    setSearchParams(newParams);
  };

  const updatePriceRange = (min: number, max: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('minPrice', min.toString());
    newParams.set('maxPrice', max.toString());
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
    setSortBy('relevance');
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || minPrice > 0 || maxPrice < 500;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                宠物项圈商城
              </h1>
              <p className="text-gray-600">
                发现 {filteredProducts.length} 款精选项圈产品
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="relevance">相关性排序</option>
                <option value="price-low">价格：低到高</option>
                <option value="price-high">价格：高到低</option>
                <option value="rating">评分最高</option>
                <option value="newest">最新上架</option>
                <option value="bestseller">热销商品</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 lg:hidden"
              >
                <SlidersHorizontal className="w-4 h-4" />
                筛选条件
                {hasActiveFilters && (
                  <span className="bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {selectedCategories.length + selectedMaterials.length}
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700">已选筛选条件：</span>
                
                {selectedCategories.map(category => (
                  <span
                    key={category}
                    className="inline-flex items-center bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    分类: {category}
                    <button
                      onClick={() => updateFilters('category', category, false)}
                      className="ml-2 hover:text-emerald-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                
                {selectedMaterials.map(material => (
                  <span
                    key={material}
                    className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    材质: {material}
                    <button
                      onClick={() => updateFilters('material', material, false)}
                      className="ml-2 hover:text-blue-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                
                <button
                  onClick={clearAllFilters}
                  className="text-gray-500 hover:text-gray-700 text-sm underline ml-2"
                >
                  清除所有筛选
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 flex-shrink-0`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">筛选条件</h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                  >
                    清除全部
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                  分类
                </h4>
                <div className="space-y-3">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.id)}
                          onChange={(e) => updateFilters('category', category.id, e.target.checked)}
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 focus:ring-2"
                        />
                        <span className="ml-3 text-gray-700 group-hover:text-emerald-600 transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div className="mb-8">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  材质
                </h4>
                <div className="space-y-3">
                  {materials.map(material => (
                    <label key={material.id} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedMaterials.includes(material.id)}
                          onChange={(e) => updateFilters('material', material.id, e.target.checked)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="ml-3 text-gray-700 group-hover:text-blue-600 transition-colors">
                          {material.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {material.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                  价格范围
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      placeholder="最低价"
                      value={minPrice}
                      onChange={(e) => updatePriceRange(parseInt(e.target.value) || 0, maxPrice)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder="最高价"
                      value={maxPrice}
                      onChange={(e) => updatePriceRange(minPrice, parseInt(e.target.value) || 500)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>¥{minPrice}</span>
                    <span>¥{maxPrice}</span>
                  </div>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">快速筛选</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      const newParams = new URLSearchParams();
                      newParams.append('category', '智能');
                      setSearchParams(newParams);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md transition-colors"
                  >
                    🤖 智能项圈
                  </button>
                  <button
                    onClick={() => {
                      const newParams = new URLSearchParams();
                      newParams.append('category', '奢华');
                      setSearchParams(newParams);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors"
                  >
                    👑 奢华系列
                  </button>
                  <button
                    onClick={() => {
                      const newParams = new URLSearchParams();
                      newParams.append('category', '运动');
                      setSearchParams(newParams);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors"
                  >
                    🏃 户外运动
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">未找到匹配的产品</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  尝试调整筛选条件，或者浏览我们的热门产品推荐
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={clearAllFilters}>
                    清除所有筛选
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/collections')}>
                    浏览系列产品
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;