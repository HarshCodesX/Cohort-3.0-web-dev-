import React, {useState, useEffect} from 'react';

const App = () => {

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
  }, []);

  return (
    <div className="h-screen bg-black">
      <div className='h-[95vh]'></div>
      <div className='w-full bg-white flex'>
        <input type="text" className='flex-1 p-4' />
        <button className='bg-purple-600 text-white p-4'>Send message</button>
      </div>
    </div>
  )
}

export default App