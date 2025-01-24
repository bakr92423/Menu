import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'


const Category = ({filter, allCat}) => {
const  onfilter=(cat)=>{
  filter(cat)
}
  return (
    <div className='row'>
        <div className='d-flex justify-content-center' >

          {allCat.map((all)=>{
            return(
              <Slide>
              
              <button onClick={()=>onfilter(all)} className='mx-2 btn btn-info'>{all}</button>
              </Slide >
            )

          })}

       
        
        </div>
        
      
    </div>
  )
}

export default Category
