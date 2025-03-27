import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  return (
    <div className="container mx-auto py-8 bg-background-50 min-h-screen">
      <h1 className="text-4xl font-bold text-background-950 text-center mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-secondary-500 font-medium">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="text-right mt-6 text-xl font-bold text-text-500">
            Total: <span className="text-accent-500">${getTotalPrice()}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage