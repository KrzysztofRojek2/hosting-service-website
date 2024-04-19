import React from 'react'
import './slider.css'
import Card from '../card/Card'

const Slider = () => {
  return (
    <div className='slider'>
          <Card imgSrc={'src/assets/client1.jpg'} name={"John Anderson"}
          text={"Reliable hosting! Quick support and minimal downtime. Highly recommend!"}/>

          <Card imgSrc={'src/assets/client2.jpg'} name={"Maya Smith"}
          text={"Great value! User-friendly platform with excellent customer service."}/>

          <Card imgSrc={'src/assets/client3.jpg'} name={"Hans Becker"}
          text={"Impressive performance! Fast servers and responsive support."}/>

          <Card imgSrc={'src/assets/client4.jpg'} name={"Astrid Gustaffson"}
          text={"Outstanding service! High performance, intuitive control panel, 5 stars!"}/>
          
    </div>
  )
}


export default Slider
