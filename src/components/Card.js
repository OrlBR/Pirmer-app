import React from 'react'
//import image1 from '../assets/java.jpg'
export default function Card({id, title, image, instructor}) {
  return (
    <div className='card text-center bg-dark'>
        <div className='card-body text-light'>
            <img src={image} alt='java'/>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-seconday'>
                instructor: {instructor}
            </p>
            <a href='#!' className='btn btn-outline-secondary rounded-0'>
                ir la sitio web
            </a>
            
             </div>


    </div>
  )
}
