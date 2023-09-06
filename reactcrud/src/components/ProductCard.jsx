 import React from 'react'
import { Link } from 'react-router-dom';
 import styled from 'styled-components'
 
 const ProductCard = ({id,image,price,brand,name,category,gender}) => {
   return (
     <DIV>
     {/* <div> */}
        <img src={image} style={{width:"100%"}} alt="product-image" />
     {/* </div> */}
        <h3>{name}</h3>
        <p>Price : {price}</p>
        <p>Brand : {brand}</p>
        <p>Category : {category}</p>
        <p>Gender:{gender}</p>
        <button>
            <Link to={`/edit/${id}`}>Edit</Link>
        </button>
     </DIV>
   )
 }
 
 export default ProductCard;

 const DIV = styled.div`
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
 `;