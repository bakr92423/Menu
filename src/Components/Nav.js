import React, { useState } from 'react'

const Nav = ({word,dataSearch,setword}) => {

  const [Data,setData]=useState(" ")




  return (
    <div  className='row nav' >
        <nav class="navbar navbar-dark bg-dark col ">
  <div class="container-fluid">
    <h2 class="navbar-brand brand ">مطعم جديد</h2>
    <form class="d-flex">
      <input onChange={(e)=>setword(e.target.value)} value={word} class=" me-2" type="search" placeholder="بحث ..." aria-label="Search"  />
      <button onClick={()=>dataSearch()} class="btn bg-light mx-2" type="button">بحث</button>
    </form>
  </div>
</nav>
      
    </div>
  )
}

export default Nav
