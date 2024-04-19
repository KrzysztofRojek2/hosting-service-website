import React,{ useState } from 'react';
import './question.css'

const Question = ({question, answear}) => {
  
const [isAnswerVisible, setIsAnswerVisible] = useState(false);

const toggleAnswer = () => {
  setIsAnswerVisible(!isAnswerVisible);
};

    return (
      <div onClick={toggleAnswer} className={`question ${isAnswerVisible ? 'active' : ''}`}>
          <h3 className='question__header'>{question}</h3>
          <div className='question__answear'>
            <p>{answear}</p>
          </div>
        </div>
      );
}

export default Question
