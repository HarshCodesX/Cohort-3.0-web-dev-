// Button component to render the button on the otp page
import React from 'react'

const Button = ({disabled, children, onClick}) => {
  // button component to render the button on the otp page
  return (
    <span onClick={onClick} className={`cursor-pointer rounded-xl text-xl px-6 py-3 text-white ${disabled ? "bg-blue-200": "bg-green-400"}`}>{children}</span>
  )
}

export default Button