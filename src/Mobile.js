import React from 'react'
import MobileList
 from './MobileList'

 const books = [{
    id: 1,
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 10.99,
    image: "https://m.media-amazon.com/images/I/51UoqRAxwEL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/51UoqRAxwEL._AC_UF894,1000_QL80_.jpg"
 }]


export default function Mobile() {
  return (
    <div>
        {books.map((ele) => {
            return (
                <MobileList 
                    image ={ele.image} 
                    title={ele.title} 
                    author={ele.author} 
                    price={ele.price}
                />
            )
        })}
    </div>
  )
}
