import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { Zoom } from 'react-awesome-reveal'





const Category = ({showData,showMale} ) => {



  const [cat,setcat]=useState([])
  


  const showCat = async ()=>{

    const res=await axios.get('https://mune-node-bakr92423s-projects.vercel.app/api/category')
    setcat(res.data.data)


  }

  useEffect(()=>{
    showCat()
  },[])




  

  return (
    <div className='row'>
      <Zoom>

      
      <div className='d-flex justify-content-center category' >

      <button  className='btn mx-2 mb-3 ' onClick={()=>showMale() }  >الكل</button>

        {cat.map((item)=>
           <button  className='btn mx-2 mb-3 '  onClick={()=>showData(item._id)}  >{item.name}</button>

        )}
     
      
      </div>
      </Zoom>
      
      
    </div>
  )
}

export default Category
