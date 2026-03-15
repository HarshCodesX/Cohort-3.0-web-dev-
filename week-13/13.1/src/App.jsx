import React from 'react';
import Button from './components/Button'; 
const App = () => {
  return (
    <>
    <div className='bg-red-500'>App</div>
    <Button disabled={false} onClick={() => alert("clicked")}>Login</Button>
    </>
  )
}

export default App