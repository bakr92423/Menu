import React, { useState } from 'react'

const Nav = ({search}) => {

  const[searchVal,setsearchVal]= useState('')
  const onSeach=()=>{
   
    search(searchVal)
    setsearchVal('')
 
    
    
    

  }

  return (
    <div className='row'>
           <nav class="navbar bg-dark   px-5 ">
  <div class="container">
    <a class="navbar-brand brand  " >مطعم جديد</a>
    <form class="d-flex" role="search">
      <input onChange={(e)=>setsearchVal(e.target.value)  } value={searchVal} type="search" placeholder="بحث...." aria-label="Search"  className='px-5' />
      <button onClick={()=>onSeach()} class="btn btn-outline-success mx-2"  type='button' >بحث</button>
    </form>
  </div>
</nav>
      
    </div>
  )
}

export default Nav
