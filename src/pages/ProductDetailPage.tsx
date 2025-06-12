import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Button from '../components/ui/Button';
import ProductGrid from '../components/product/ProductGrid';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  const product = getProductById(id || '');
  const relatedProducts = product ? getRelatedProducts(product) : [];
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].value);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0].value);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Button onClick={() => navigate('/shop')}>Return to Shop</Button>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (selectedColor && selectedSize) {
      addToCart({
        productId: product.id,
        quantity,
        color: selectedColor,
        size: selectedSize
      });
    }
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square overflow-hidden rounded-lg mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-emerald-600' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${
                    i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
          </div>
          
          <p className="text-2xl font-bold text-emerald-600 mb-6">
            ${product.price.toFixed(2)}
          </p>
          
          <p className="text-gray-600 mb-8">{product.description}</p>
          
          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.value
                      ? 'border-emerald-600'
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
          
          {/* Size Selection */}
          <div className="mb-8">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size.value}
                  onClick={() => setSelectedSize(size.value)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedSize === size.value
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 border-r hover:bg-gray-50"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 border-l hover:bg-gray-50"
              >
                +
              </button>
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            
            <Button
              variant="outline"
              onClick={handleWishlistToggle}
              className="p-3"
            >
              <Heart
                className={`w-5 h-5 ${
                  isWishlisted ? 'fill-red-500 text-red-500' : ''
                }`}
              />
            </Button>
          </div>
          
          {/* Features */}
          <div className="border-t pt-8">
            <h3 className="font-medium mb-4">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <ProductGrid
            products={relatedProducts}
            title="You May Also Like"
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;