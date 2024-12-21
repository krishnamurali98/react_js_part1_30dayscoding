import React from 'react'
import './MobileList.css'

export default function MobileList() {
    const image = 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/y/c/-original-imah4sssdf9pgz3e.jpeg?q=70';
    const title = 'Samsung'
    const price = 1211
    return (
    <div className='main'>
      <img className='image' src={image} alt='Not found'/>
      <div>
        <h2>{title}</h2>
        <p>Price : ${price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
