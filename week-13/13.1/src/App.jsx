import React from 'react';
import Button from './components/Button'; 
import Input from './components/Input';
import Otp from './components/Otp';
const App = () => {
  return (
    <div className='h-screen bg-black'>
      <br />
      <br />
      {/* <Input type="text" placeholder="Enter your username" />
      <Button disabled={false} onClick={() => alert("clicked")}>Login</Button> */}
      <Otp/>
    </div>
  )
}

export default App