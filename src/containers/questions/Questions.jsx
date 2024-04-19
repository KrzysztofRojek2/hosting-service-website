import React from 'react'
import './questions.css'
import Question from '../../components/question/Question'

const Questions = () => {
  return (
    <div id='questions' className='questions section-padding'>
      <h1>Common questions</h1>
      <div className="questions-wrapper">
        <Question answear={'10 GB'} question={'How much storage comes with Standard Hosting?'}/>
        <Question answear={'Dedicated IP and advanced control panel in Expanded Hosting.'} question={'Whats the main difference in features between Standard and Expanded Hosting?'}/>
        <Question answear={'Premium has 50 GB SSD storage for top performance.'} question={'Whats unique about Premium Hosting, and what type of storage does it use?'}/>
      </div>
    </div>
  )
}

export default Questions
