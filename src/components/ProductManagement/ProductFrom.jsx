import React, { useState } from "react";

const ProductFrom = ({ handleProducts }) => {
  const [error, setError] = useState("");
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const prices = e.target.prices.value;
    const quantity = e.target.quantity.value;
    // console.log(name,prices,quantity);

    // validations
    if (name.length === 0) {
      setError("please give me a product name");
      return;
    } else if (prices.length === 0) {
      setError("please give me a product prices");
      return;
    } else if (prices < 0) {
      setError("please give me a valid prices");
      return;
    } else {
      setError("");
    }

    // object create
    const product = {
      name,
      prices,
      quantity,
    };
    // console.log(product);
    handleProducts(product);
  };
  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="text" name="prices" placeholder="prices" />
        <br />
        <input type="text" name="quantity" placeholder="quantity" />
        <br />
        <input type="submit" value="save" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductFrom;
