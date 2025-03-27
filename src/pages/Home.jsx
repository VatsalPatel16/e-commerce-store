import React, { useContext } from 'react'
import { ProductContext } from "../context/ProductContext";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="container mx-auto py-8 bg-background-50 min-h-screen">
      <h1 className="text-4xl font-bold text-background-950 text-center mb-6">Products</h1>
      {products.length === 0 ? <Loader /> : <ProductList products={products} />}
    </div>
  )
}

export default Home