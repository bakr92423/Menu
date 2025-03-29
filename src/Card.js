
import React from 'react'
import { Zoom } from 'react-awesome-reveal';

const Card = ({state}) => {
  


  
 


    

 
   
    

  return (
    <>

   {state.length==0 ? <h3 className='text-center' >لا يوجد عناصر</h3>: state.map((item)=>{

return(
  
      <Zoom>
    <div className='row mt-5 ' >

      
    <div class="card col-12   ">

<div class="row ">
<div class="col-md-4 box-img ">
  <img src={item.image} alt="..." className='' />
</div>
<div class=" col">
  <div class="card-body flex-row d-flex  justify-content-between ">
    <h5 class="card-title"> {item.name}</h5>
    <p class="card-text price">{item.price} جنية </p>
  </div>
  <div class="card-body ">
    
    <p class="card-text">{item.description}.</p>
   
  </div>
</div>
</div>
</div>
  
</div>
</Zoom>
)

})}
   
 

    </>
  )
}

export default Card
