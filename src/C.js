import React from 'react'

export default function C(props) {
    console.log(props);
    
    return (
    <div>
      {props.greet}
    </div>
  )
}
