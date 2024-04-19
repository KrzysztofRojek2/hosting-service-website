import React from 'react'
import Offer from '../../components/offer/Offer'
import './offers.css'
const Offers = () => {
  const standard = ['10 GB Storage', '100 GB Bandwidth', 'Shared Server Environment', 'One Domain Included', 'Basic Security Features',
  'Weekly Backups', 'Email Support', '99.9% Uptime Guarantee', 'Easy-to-Use Control Panel', 'Standard Customer Service'];

  const expanded = ['Everything in Standard Hosting', '25 GB Storage', '250 GB Bandwidth', 'Dedicated IP Address', 'Unlimited Domains', 
  'Enhanced Security Suite', 'Daily Backups', 'Priority Email Support', '24/7 Monitoring', 'Advanced Control Panel Features'];

  const premium = ['Everything in Expanded Hosting', '50 GB Storage', 'Unlimited Bandwidth', 'High-Performance SSD Storage', 'VIP Customer Support',
  'Enhanced Security Protocols', 'Malware Scanning and Removal', 'Hourly Backups', 'Content Delivery Network (CDN) Included', 'Priority Access to New Features and Updates'];

  return (
    <>
    <h1 id='offers' className='offers__header section-padding'>Offers & Pricing</h1>
    <div className='offers'>
      <Offer price={'9'} offerType={"Standard"} items={standard}/>
      <Offer price={'19'} offerType={"Expanded"} items={expanded}/>
      <Offer price={'35'} offerType={"Premium"} items={premium}/>
    </div>
    </>
    
  )
}

export default Offers
