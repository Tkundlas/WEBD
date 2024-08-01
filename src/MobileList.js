import React from 'react'
import './MobileList.css'
export default function MobileList(props) {
 const {image,title,price}  = props;

  return (
    <div className='main'>
      <img className='image' src={image} />
      <div>
      <h1>{title}</h1>
      <p>{price}</p>
      <button>Add to cart!</button>
      </div>
    </div>
  )
}
