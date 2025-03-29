import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import './App.css';
import Header from './Components/Header';
import Category from './Components/Category';
import Card from './Card';
import {list} from './Components/data'
import axios from 'axios';



const App = () => {

  const [state,setstate]=useState([])
  const [word,setword]=useState()

  const showMale=async()=>{
    const res=await axios.get('https://mune-node-bakr92423s-projects.vercel.app/api/meal')
    const dataMale =res.data.data
    setstate(dataMale)
    
  }
  useEffect(()=>{
    showMale()
  },[])


  const showData= async(id)=>{
  
    console.log(id);
  
   
    
    const dataFilter= await axios.get(`https://mune-node-bakr92423s-projects.vercel.app/api/category/${id}/meals`) 
    

    setstate(dataFilter.data.data)
    
    
    
  }

  const dataSearch= async ()=>{

    const res = await axios.get(`https://mune-node-bakr92423s-projects.vercel.app/api/meal?keyWord=${word}`)

    setstate(res.data.data)

    setword('')
    


  }





  
  return (
    <div>

      <Nav word={word} setword={setword} dataSearch={dataSearch} />
      <div className='container' >

      <Header  />
      
      <Category showData={showData} showMale={showMale} />
      <Card state={state} />
      
    
      

      </div>
      
      
    </div>
  )
}

export default App