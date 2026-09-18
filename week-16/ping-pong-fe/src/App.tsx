import React, {useEffect} from 'react';

const App = () => {

  function sendMessage() {

  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onerror = () => {
      console.log("Cannot connect to the websocket");
    }
    ws.close = () => {
      console.log("Connection to the websocket closed");
    }
    ws.onopen = () => {
      console.log("Connected to the websocket");
    }
  }, []);

  return (
    <div>
      <input type="text" placeholder='message' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App