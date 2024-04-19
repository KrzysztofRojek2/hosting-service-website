import React from 'react'
import './button.css'
const Button = ({color, content}) => {
    //klasa button jeżeli chodzi o standardowy przycisk, lub klasy button button--kolor jeżeli chcemy konkretny kolor
    const buttonClass = `button ${color ? `button--${color}` : ''}`;
  return (
    <button className={buttonClass}>{content}</button>
  )
}

export default Button
