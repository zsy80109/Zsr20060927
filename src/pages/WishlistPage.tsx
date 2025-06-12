import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';
import Button from '../components/ui/Button';

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const wishlistProducts = wishlist.map(id => getProductById(id)).filter(Boolean);

  const handleAddToCart = (productId: string) => {
    const product = getProductById(productId);
    if (product) {
      addToCart({
        productId,
        quantity: 1,
        color: product.colors[0].value,
        size: product.sizes[0].value
      });
    }
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">您的心愿单是空的</h1>
            <p className="text-gray-600 mb-8">
              浏览我们的产品，点击心形图标将喜欢的项圈添加到心愿单
            </p>
            <Link to="/shop">
              <Button>开始购物</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-red-500 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">我的心愿单</h1>
                <p className="text-gray-600">{wishlist.length} 个心仪的产品</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">分享您的心愿单</p>
              <div className="flex gap-2 mt-2">
                <button className="text-blue-600 hover:text-blue-700 text-sm">微信</button>
                <button className="text-green-600 hover:text-green-700 text-sm">微博</button>
              </div>
            </div>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 bg-white bg-opacity-90 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
                {(product.isNewArrival || product.isBestseller) && (
                  <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium text-white rounded-full ${
                    product.isNewArrival ? 'bg-blue-500' : 'bg-amber-500'
                  }`}>
                    {product.isNewArrival ? 'New' : 'Bestseller'}
                  </div>
                )}
              </div>

              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-emerald-600">
                    ¥{product.price.toFixed(2)}
                  </span>
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

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product.id)}
                    className="flex-1 flex items-center justify-center"
                  >
                    <ShoppingBag className="w-4 h-4 mr-1" />
                    加入购物车
                  </Button>
                  <Link to={`/product/${product.id}`} className="flex-1">
                    <Button variant="outline" size="sm" fullWidth>
                      查看详情
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">您可能还喜欢</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Show some recommended products */}
            <Link to="/shop" className="text-center p-4 border border-gray-200 rounded-lg hover:border-emerald-300 transition-colors">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-sm font-medium">发现更多</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;