import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext";

const CartItem = ({item}) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center p-4 border-b bg-background-100">
      <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
      <h3 className="text-lg font-semibold text-text-900">{item.title}</h3>
      <p className="text-secondary-500">${item.price}</p>
      <button
      onClick={() => removeFromCart(item.id)}
      className="bg-secondary-500 text-white px-3 py-1 rounded hover:bg-secondary-600">
        Remove
      </button>
    </div>
  )
}

export default CartItem