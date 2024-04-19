import React from 'react'
import './addition.css'
const Addition = ({name, text, price}) => {
  return (
    <div className='addOn'>
        <div className='addOns__text'>
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
        <div className='addOns__price'>
            <h2>{price}</h2>
        </div>
    </div>
  )
}

export default Addition
