import React, { useState } from 'react';
import ProductFrom from './ProductFrom';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const[products,setProducts]= useState([]);
    const handleProducts = newProduct =>{
        const newProducts =[...products,newProduct];
        setProducts(newProducts);
    }
    return (
        <div>
        <ProductFrom handleProducts={handleProducts}></ProductFrom>
        <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;