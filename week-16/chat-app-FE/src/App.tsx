// fe for chat app
import React, {useState, useEffect, useRef} from 'react';

const App = () => {
  const [messages, setMessages] = useState(["hi there", "hello"]);
  const wsRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    wsRef.current = ws;
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    }
    // hardcoding the joining room logic for now, will change later
    ws.onopen = (event) => {
        ws.send(JSON.stringify({
          type: "join",
          payload: {
            roomId: "green"
          }
        }))
    }
  }, []);

  return (
    <div className="h-screen bg-black">
      <br />
      <div className='h-[85vh]'>
        {messages.map((message) => <div className='m-8'>
          <span className='text-black bg-white rounded p-4'>{message}</span>
          </div>)}
      </div>
      <div className='w-full bg-white flex'>
        <input id='message' type="text" className='flex-1 p-4' />
        <button onClick={() => {
          const message = document.getElementById('message')?.value;
          wsRef.current.send(JSON.stringify({
            type: "chat",
            payload: {
              message: message
            }
          }));
        }} className='bg-purple-600 text-white p-4'>Send message</button>
      </div>
    </div>
  )
}

export default App