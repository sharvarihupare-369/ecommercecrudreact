import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editPrice } from '../redux/products/action'

const EditProduct = () => {
    const {id} = useParams()
    // console.log(id)
    const products = useSelector((store)=>store.productReducer.products)
    console.log(products)
    const [price,setPrice] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const handleEdit = () => {
      const data = {price}
      dispatch(editPrice(id,data)).then((res)=>{
        // navigate(loca)
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }

    useEffect(()=>{
    const data = products.find(el => el.id === +id)
    // console.log(data.price)
    setPrice(data.price)
    // setPrice(data.price)
    },[])



  return (
    <div>
      <h1>{id} {price}</h1>
      <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleEdit}>Submit</button>
    </div>
  )
}

export default EditProduct