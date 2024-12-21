import React from 'react'
import './MobileList.css'

export default function MobileList(props) {
    const {image, title, author, price} = props
    return (
    <div className='main'>
      <img className='image' src={image} alt='Not found'/>
      <div>
        <h2>{title}</h2>
        <p>Author : {author}</p>
        <p>Price : ${price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
