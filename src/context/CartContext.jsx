import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prevCart) => {
            const isItemInCart = prevCart.find((item) => item.id === product.id);

            if(isItemInCart) {
                console.log("Item already in the cart");
                return prevCart;
            } else {
                console.log("Item added successfully in the cart");
                return [...prevCart, product];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        console.log("Item removed from cart");
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    }
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, getTotalPrice}}>
        {children}
    </CartContext.Provider>
  )
}

export { CartProvider };