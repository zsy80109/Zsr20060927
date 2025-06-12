import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">购物车是空的</h1>
        <p className="text-gray-600 mb-8">看起来您还没有添加任何商品到购物车。</p>
        <Link to="/shop">
          <Button>继续购物</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">购物车</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {cart.map((item) => {
              const product = getProductById(item.productId);
              if (!product) return null;

              const colorName = product.colors.find(c => c.value === item.color)?.name || '';
              
              return (
                <div key={`${item.productId}-${item.color}-${item.size}`} className="flex items-center p-6 border-b last:border-b-0">
                  <Link to={`/product/${product.id}`} className="flex-shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  </Link>

                  <div className="ml-6 flex-grow">
                    <Link to={`/product/${product.id}`} className="text-lg font-semibold hover:text-emerald-600">
                      {product.name}
                    </Link>
                    <div className="text-gray-600 mt-1">
                      颜色: {colorName} | 尺寸: {item.size}
                    </div>
                    <div className="text-emerald-600 font-medium mt-1">
                      ¥{product.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="flex items-center ml-6">
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value))}
                      className="rounded border-gray-300 text-gray-700 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="ml-4 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">订单摘要</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">小计</span>
                <span className="font-medium">¥{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">运费</span>
                <span className="font-medium">免费</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold">总计</span>
                  <span className="font-semibold">¥{getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Button fullWidth>
              结算
              <ArrowRight size={20} className="ml-2" />
            </Button>

            <Link to="/shop" className="block text-center mt-4 text-emerald-600 hover:text-emerald-700">
              继续购物
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;