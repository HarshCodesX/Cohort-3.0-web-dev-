import React, {useState} from 'react'

const App = () => {
  return (
    <div>
      <LightBulb/>
    </div>
  )
}

function LightBulb(){
  const [bulbOn, setBulbOn] = useState(true);
  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState setBulbOn={setBulbOn} />
  </div>
}

function BulbState({bulbOn}){
  return <div>
    {bulbOn ? "bulb on" : "bulb off"}
  </div>
}

function ToggleBulbState({setBulbOn}){

  function toggle(){
    setBulbOn(prev => !prev)
  }

  return <div>
    <button onClick={toggle}>Toggle the buld</button>
  </div>
}

export default App