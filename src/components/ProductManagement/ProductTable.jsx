import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <h2>All Products :{products.length}</h2>
      <table>
        <thead>
          <td>NO</td>
          <td>name</td>
          <td>prices</td>
          <td>quantity</td>
          <td>Actions</td>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
