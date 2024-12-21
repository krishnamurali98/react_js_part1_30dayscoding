import React from 'react'
import './MobileList.css'

export default function MobileList(props) {

    return (
    <div className='main'>
      <img className='image' src={props.image} alt='Not found'/>
      <div>
        <h2>{props.title}</h2>
        <p>Author : {props.author}</p>
        <p>Price : ${props.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
