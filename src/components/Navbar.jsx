import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {cart} = useContext(CartContext);
  return (
    <nav className='bg-primary-500 text-white p-4 shadow-md flex items-center justify-between sticky top-0'>
        <Link to="/" className='text-2xl font-bold font-heading'>E-comm Store</Link>        
        <Link to="/cart" className='text-lg font-body'>Cart ({cart.length})</Link>
    </nav>
  )
}

export default Navbar