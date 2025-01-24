import React from 'react'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'

const Cart = ({list}) => {
  return (
    <>

{
       list.length  ? (list.map((item)=>{
        return(

          <Zoom cascade damping={0.6} >
            <div className='row'>
  
            <div className='col'>
            <div class="card d-flex flex-row mt-5 " >
               
                    <img src={item.img} class="card-img-top" alt=""  />
                  
                  <div className='card-body'>
                    <div class=" d-flex flex-row justify-content-between   ">
                    <h5 class=""> {item.title} </h5>
                    <h5 class="price">  {item.price} جنية</h5>
                      
                    
                    </div>
                    <div class=" d-flex  align-items-center ">
                      
                      <p class="card-text py-4 ">{item.des}</p>
                    </div>
    
                    </div>
     
      
                </div>
               
    
            </div>
          
        </div>

        </Zoom>
            
        )
    })):  <h3 className=' d-flex justify-content-center  align-items-center pt-5 ' > لا يوجد وجبات متاحة الان </h3>
}
   

    </>
  )
}

export default Cart
