// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Initial state of the cart
const initialState = [];

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item already exists in the cart
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        // If it exists, update the quantity
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return updatedCart;
      } else {
        // If it doesn't exist, add the item to the cart
        return [...state, action.payload];
      }
    case 'REMOVE_FROM_CART':
      // Remove the item from the cart
      return state.filter(item => item.id !== action.payload.id);
    case 'CLEAR_CART':
      // Clear the entire cart
      return [];
    default:
      return state;
  }
};

// Create Context
const CartContext = createContext();

// CartProvider component to wrap around the app
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
