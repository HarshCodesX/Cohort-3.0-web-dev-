import React, {useState} from 'react'

const App = () => {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  )
}

function Light({bulbOn, setBulbOn}){
  return <div>
    <LightBulb bulbOn={bulbOn} />
    <LightSwitch setBulbOn={setBulbOn} />
  </div>
}

function LightBulb({bulbOn}){
  return <div>
    {bulbOn ? "bulb on" : "bulb off"}
  </div>
}

function LightSwitch({setBulbOn}){

  function toggle(){
    setBulbOn(prev => !prev)
  }

  return <div>
    <button onClick={toggle}>Toggle the buld</button>
  </div>
}

export default App