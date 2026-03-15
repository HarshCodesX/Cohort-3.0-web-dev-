import React from 'react'

const Button = ({disabled, children, onClick}) => {
  return (
    <span onClick={onClick} className={`cursor-pointer rounded-2xl text-4xl px-32 py-8 text-white ${disabled ? "bg-blue-200": "bg-green-400"}`}>{children}</span>
  )
}

export default Button