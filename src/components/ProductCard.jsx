import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ProductCard = ({product}) => {

  const {addToCart} = useContext(CartContext);
  return (
    <div className="bg-background-800 p-4 shadow-lg rounded-xl border border-primary-400 flex flex-col h-full cursor-pointer">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4 bg-background-700 p-2 rounded-lg" />
      <h2 className="text-xl font-bold text-text-200 leading-tight">{product.title}</h2>
      <p className="text-accent-400 font-semibold text-base mt-1">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto w-full bg-primary-500 text-background-950 py-2 rounded-lg hover:bg-primary-400 transition-all"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard