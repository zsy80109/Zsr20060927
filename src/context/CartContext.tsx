import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { CartContextType, CartItem } from '../types';
import { getProductById } from '../data/products';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<CartItem[]>('cart', []);

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      // Check if item already exists in cart with same product, color, and size
      const existingItemIndex = prevCart.findIndex(
        cartItem => 
          cartItem.productId === item.productId && 
          cartItem.color === item.color && 
          cartItem.size === item.size
      );

      if (existingItemIndex !== -1) {
        // Update quantity of existing item
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + item.quantity
        };
        return updatedCart;
      } else {
        // Add new item to cart
        return [...prevCart, { ...item, id: `${item.productId}-${item.color}-${item.size}` }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => 
      `${item.productId}-${item.color}-${item.size}` !== itemId
    ));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart(prevCart => 
      prevCart.map(item => 
        `${item.productId}-${item.color}-${item.size}` === itemId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const product = getProductById(item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const getCartItemCount = (productId: string) => {
    return cart
      .filter(item => item.productId === productId)
      .reduce((total, item) => total + item.quantity, 0);
  };

  const isInCart = (productId: string, color?: string, size?: string) => {
    return cart.some(item => 
      item.productId === productId &&
      (!color || item.color === color) &&
      (!size || item.size === size)
    );
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getCartItemCount,
    isInCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};