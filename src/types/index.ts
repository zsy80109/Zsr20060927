export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  colors: Color[];
  sizes: Size[];
  images: string[];
  category: string;
  material: string;
  inStock: boolean;
  isNewArrival: boolean;
  isBestseller: boolean;
  rating: number;
  reviewCount: number;
}

export interface Color {
  name: string;
  value: string;
}

export interface Size {
  name: string;
  value: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  color: string;
  size: string;
}

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export type WishlistContextType = {
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
};