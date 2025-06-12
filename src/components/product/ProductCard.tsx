import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../../types';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
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

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="overflow-hidden rounded-lg bg-gray-100 aspect-square">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Wishlist button */}
        <button 
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 bg-white bg-opacity-70 p-2 rounded-full shadow-sm transition-all hover:bg-opacity-100"
        >
          <Heart 
            size={20} 
            className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"} 
          />
        </button>

        {/* Badge */}
        {(product.isNewArrival || product.isBestseller) && (
          <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium text-white rounded-full ${
            product.isNewArrival ? 'bg-blue-500' : 'bg-amber-500'
          }`}>
            {product.isNewArrival ? 'New' : 'Bestseller'}
          </div>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          
          <div className="mt-1 flex items-center justify-between">
            <p className="text-lg font-semibold text-emerald-700">${product.price.toFixed(2)}</p>
            
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-xs ${
                    i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'
                  }`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
            </div>
          </div>
          
          <div className="mt-2 flex items-center space-x-2">
            {product.colors.slice(0, 3).map((color) => (
              <span 
                key={color.name}
                className="h-4 w-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;