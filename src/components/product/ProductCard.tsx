import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  showQuickAdd?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showQuickAdd = false }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      productId: product.id,
      quantity: 1,
      color: product.colors[0].value,
      size: product.sizes[0].value
    });
  };

  const formatPrice = (price: number) => {
    return `¥${price.toFixed(2)}`;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={`${
              i < Math.floor(rating) 
                ? "fill-amber-400 text-amber-400" 
                : i < rating 
                ? "fill-amber-200 text-amber-200" 
                : "text-gray-300"
            }`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-gray-50 aspect-square">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNewArrival && (
              <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                新品
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                热销
              </span>
            )}
            {!product.inStock && (
              <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                缺货
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{product.category} • {product.material}</p>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {renderStars(product.rating)}
              <span className="text-xs text-gray-500">({product.reviewCount})</span>
            </div>
            <p className="text-lg font-bold text-emerald-600">{formatPrice(product.price)}</p>
          </div>
          
          {/* Color Options Preview */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={color.name}
                  className="w-4 h-4 rounded-full border border-gray-200 shadow-sm"
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 4}</span>
              )}
            </div>
            
            <div className="text-xs text-gray-500">
              {product.sizes.length} 个尺寸
            </div>
          </div>
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={handleWishlistToggle}
          className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all hover:scale-110"
          title={isWishlisted ? "从心愿单移除" : "添加到心愿单"}
        >
          <Heart 
            size={18} 
            className={`transition-colors ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600 hover:text-red-500"
            }`} 
          />
        </button>
        
        {showQuickAdd && product.inStock && (
          <button 
            onClick={handleQuickAdd}
            className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow-md transition-all hover:scale-110"
            title="快速添加到购物车"
          >
            <ShoppingBag size={18} />
          </button>
        )}
      </div>

      {/* Quick View on Hover */}
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <Link 
          to={`/product/${product.id}`}
          className="block w-full bg-white bg-opacity-95 hover:bg-opacity-100 text-center py-2 px-4 rounded-lg text-sm font-medium text-gray-900 hover:text-emerald-600 transition-colors shadow-md"
        >
          查看详情
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;