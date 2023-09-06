import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postProduct } from "../redux/products/action";

const initialState = {
  image: "",
  price: "",
  brand: "",
  name: "",
  category: "",
  gender: "",
};

const Admins = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    //   console.log(name,value)
    setProduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(product)
    dispatch(postProduct(product));
  };

  return (
    <DIV>
      <h1>Add Products</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={(e) => handleChange(e)}
          placeholder="image"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={(e) => handleChange(e)}
          placeholder="price"
        />
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={(e) => handleChange(e)}
          placeholder="brand"
        />
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={(e) => handleChange(e)}
          placeholder="name"
        />
        <select
          name="category"
          value={product.category}
          onChange={(e) => handleChange(e)}
        >
          <option value={""}>Select Category</option>
          <option value={"top-wear"}>Top Wear</option>
          <option value={"bottom-wear"}>Bottom Wear</option>
          <option value={"foot-wear"}>Shoes</option>
        </select>
        <select
          name="gender"
          value={product.gender}
          onChange={(e) => handleChange(e)}
        >
          <option value={""}>Select Gender</option>
          <option value={"male"}>Male</option>
          <option value={"female"}>Female</option>
          <option value={"kids"}>Kids</option>
        </select>
        <button type="submit">Add Products</button>
      </form>
    </DIV>
  );
};

export default Admins;

const DIV = styled.div`
  width: 500px;
  margin: 20px auto;
  border: 1px solid gray;
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  input {
    height: 40px;
    font-size: larger;
    width: 90%;
  }
  select {
    height: 40px;
    font-size: larger;
    width: 90%;
  }
  button {
    width: 50%;
    height: 30px;
    cursor: pointer;
    border: none;
  }
`;
