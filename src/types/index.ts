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
  id?: string;
  productId: string;
  quantity: number;
  color: string;
  size: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  createdAt: Date;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  createdAt: Date;
  verified: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  id?: string;
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  street: string;
  postalCode: string;
  isDefault?: boolean;
}

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getCartItemCount: (productId: string) => number;
  isInCart: (productId: string, color?: string, size?: string) => boolean;
};

export type WishlistContextType = {
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
};

export type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name?: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  loading: boolean;
  error: string | null;
};

export interface FilterOptions {
  categories: string[];
  materials: string[];
  priceRange: [number, number];
  inStock: boolean;
  rating: number;
  sortBy: 'relevance' | 'price-low' | 'price-high' | 'rating' | 'newest' | 'bestseller';
}

export interface SearchFilters extends FilterOptions {
  query: string;
}