import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { selectProducts } from '../features/admin/adminSlice'; 

function ProductList() {
  const products = useSelector(selectProducts);  

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
