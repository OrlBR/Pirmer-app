import React from 'react'
import imagen2 from '../assets/java.jpg'
import imagen1 from '../assets/node.jpg'
import imagen3 from '../assets/starwars.jpg'
import Card from './Card'
const cards =  [

        {
            id:1,
            title: 'node',
            image:imagen1,
            instructor: 'Orlando Blancas'
        },
        {
            id:2,
            title: 'java',
            image: imagen2,
            instructor: 'Raul Blancas'
        },
        {
            id:3,
            title: 'starwars',
            image: imagen3,
            instructor: 'Omar Blancas'
        }
    ]
    export default function Cards() {
        console.log(cards)
     
  return (
    <div className='container d-flex justify-content-center align-item-center h-100'>
        <div className='row'>
            {
                cards.map( c=> (
                <div className='col-md-4' key={cards.id}>
                <Card
                key={c.id}
                id={c.id}
                title={c.title}
                image={c.image}
                instructor={c.instructor}
                />
               </div>

            ))

            }
           
            

            
        </div>
       

    </div>
  )
}
