import React, {useEffect, useRef, useState} from 'react';

const App = () => {
  const [socket, setSocket] = useState();
  const inuputRef = useRef();

  function sendMessage() {
    if(!socket){
      return;
    }
    const message = inuputRef.current.value;
    //@ts-expect-error
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onerror = () => {
      console.log("Cannot connect to the websocket");
    }
    ws.close = () => {
      console.log("Connection to the websocket closed");
    }
    ws.onopen = () => {
      console.log("Connected to the websocket");
    }
    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, []);

  return (
    <div>
      <input ref={inuputRef} type="text" placeholder='message' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App