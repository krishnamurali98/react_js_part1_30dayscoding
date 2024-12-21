import React from 'react'
import MobileList
 from './MobileList'

 const book1 = {
    id: 1,
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 10.99,
    image: "https://m.media-amazon.com/images/I/51UoqRAxwEL._AC_UF894,1000_QL80_.jpg"
  }
  
  const book2 = {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/51UoqRAxwEL._AC_UF894,1000_QL80_.jpg"
 }


export default function Mobile() {
  return (
    <div>
        <MobileList 
            image ={book1.image} 
            title={book1.title} 
            author={book1.author} 
            price={book1.price}
        />
        
        <MobileList 
            image ={book2.image} 
            title={book2.title} 
            author={book2.author} 
            price={book2.price}
        />
    </div>
  )
}
