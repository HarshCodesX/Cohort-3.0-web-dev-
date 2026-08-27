import React from 'react'

const Input = ({onClick, type, placeholder}) => {
  return <span onClick={onClick} className={`rounded-2xl text-4xl px-32 py-8 text-whote cursor-pointer bg-blue-200`}>
    <input type={type} placeholder={placeholder} />
  </span>
}

export default Input