import React from 'react'
import './offer.css'
import Button from '../button/Button'
const Offer = ({price, offerType, items}) => {
  return (
    <div className='offer'>
      <h3>{offerType}</h3>
      <h2 className='offer__price'>
        $
        <span className='price-number'>{price} </span>
        /month
      </h2>
      <div className='offer__advantages'>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
        

      </div>
      <Button color={'green'} content={'Start Now!'} />
    </div>
  )
}

export default Offer
