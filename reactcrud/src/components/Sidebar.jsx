import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
const Sidebar = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    let initialCategory = searchParams.getAll("category")
    let initialGender = searchParams.getAll("gender")
    let initialOrder = searchParams.get("order")
    const [category,setCategory] = useState(initialCategory || [])
    const [gender,setGender] = useState(initialGender || [])
    const [order,setOrder] = useState(initialOrder ||  "")

    useEffect(()=>{
        let params = {
            gender,
            category
        }
        order && (params.order = order)
        setSearchParams(params)
    },[category,gender,order])

    const handleCategory = (e) => {
        const {value} = e.target
        // console.log(value)
        let newCategory = [...category]
        if(newCategory.includes(value)){
            newCategory = newCategory.filter(el => el !== value)
        }else{
            newCategory.push(value)
        }
        // setCategory(prev => [...prev,value])
        // console.log(category)
        setCategory(newCategory)
    }

    const handleGender = (e) => {
        const {value} = e.target;
        let newGender = [...gender]
        if(newGender.includes(value)){
            newGender = newGender.filter((el)=>el !== value);
        }else{
            newGender.push(value)
        }
        setGender(newGender)
    }
  
    const handleOrder = (e) => {
        const {value,name} = e.target
        // console.log(value,name)
        setOrder(value)
    }


  
    // console.log(category)
    //  console.log(gender)
  return (
    <DIV>
       <h3>Filter By Category</h3>
       <div> 
        <input type='checkbox' value={"top-wear"}    onChange={(e)=>handleCategory(e)} checked={category.includes("top-wear")} />
        <label>Top Wear</label> 
       </div> 
       <div> 
        <input type='checkbox' value={"bottom-wear"} onChange={(e)=>handleCategory(e)} checked={category.includes("bottom-wear")} />
        <label>Bottom Wear</label> 
       </div> 
       <div> 
        <input type='checkbox' value={"foot-wear"} onChange={(e)=>handleCategory(e)} checked={category.includes("foot-wear")}  />
        <label>Footwear</label> 
       </div> 
       <br/>
       <h3>Filter By Gender</h3>
       <div>
        <input type='checkbox' value={"male"} onChange={(e)=>handleGender(e)} checked={gender.includes("male")} />
        <label>Male</label> 
       </div> 
       <div>
        <input type='checkbox' value={"female"} onChange={(e)=>handleGender(e)} checked={gender.includes("female")} />
        <label>Female</label> 
       </div> 
       <div>
        <input type='checkbox' value={"kids"} onChange={(e)=>handleGender(e)} checked={gender.includes("kids")} />
        <label>Kids</label> 
       </div> 
       <br/>
       <h3>Sort by price</h3>
       <div onChange={handleOrder}>
         <div>
          <input type='radio' name='order' value={'asc'} defaultChecked={order == "asc"}  />
          <label>Ascending</label> 
         </div> 
         <div> 
          <input type='radio' name='order' value={'desc'} defaultChecked={order == "desc"}  />
          <label>Descending</label>
         </div>
       </div>
    </DIV>
  )
}

export default Sidebar;

const DIV = styled.div`
   display: flex;
   flex-direction: column;
   align-items: baseline;
   padding-left: 15px;
   border-right: 2px solid grey;
   min-height : 80vh;
`;