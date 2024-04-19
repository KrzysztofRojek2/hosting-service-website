import React from 'react'
import './card.css'

const Card = ({imgSrc, name, text}) => {
  return (
    <div className='card'>
      <img className='card__img' src={imgSrc} alt="client" />
      <div className='card__text'>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
      
    </div>
  )
}

export default Card
