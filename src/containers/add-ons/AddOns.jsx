import React from 'react'
import './addOns.css'
import Addition from '../../components/addition/Addition'

const AddOns = () => {
  return (
    <div id='addOns' className='section-padding addOns'>
      <h1 className='addOns__header'>Choose one or more of our Add-Ons</h1>
      <div className='addOns-wrapper'>
        <Addition name={'Security Suite'} price={'$1'}
        text={'Boost website security with optional malware scanning, firewall, and real-time threat detection for enhanced protection.'}/>
        <Addition name={'Priority Support'} price={'$2'}
        text={'Upgrade to priority customer service for faster responses, dedicated channels, and swift issue resolution.'}/>
        <Addition name={'SEO Optimization'} price={'$3'}
        text={'Elevate your websites visibility with tailored SEO recommendations, keyword analysis, and performance reports.'}/>
        <Addition name={'Premium Bandwidth'} price={'$4'}
        text={'Ensure optimal performance with a premium bandwidth upgrade for faster loading and smoother data transfer.'}/>
        <Addition name={'Privacy Protection'} price={'$5'}
        text={'Safeguard personal info with custom domain privacy protection, reducing spam and maintaining ownership control.'}/>
      </div>
    </div>
  )
}

export default AddOns
