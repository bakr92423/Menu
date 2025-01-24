import React, { useState } from 'react'
import './App.css';
import Nav from './Componentes/Nav';
import Header from './Componentes/Header';
import Category from './Componentes/Category';
import Cart from './Componentes/Cart';
import { list } from './data';


const App = () => {

const [state,setstate]=useState(list)

const allCat=['الكل', ...new Set(list.map((i)=>i.category))]



const filterByCategory=(cat)=>{

  if(cat==='الكل'){
    setstate(list)
  }else{
    
  const newArray=list.filter((item)=>item.category===cat)
  setstate(newArray)

  }


}

const search= (word)=>{
   
  if(word !== ""){
    const newArr= list.filter((item)=>item.title === word)
    setstate(newArr)
  }
}

  return (

    <>
      <Nav search={search} />
        <div className='container' >

          <Header />
          <Category filter={filterByCategory} allCat={allCat} />
          <Cart list={state} />






  
    
      
    
      
    </div>
    </>
  )
}

export default App
