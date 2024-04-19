import React from 'react'
import './clients.css'
import Card from '../../components/card/Card'
import Slider from '../../components/slider/Slider'

const Clients = () => {
  return (
    <div id='clients' className='section-padding clients-section'>
      <h1 className='clients-section__header'>Client Reviews</h1>
      <Slider/>
    </div>
  )
}

export default Clients
