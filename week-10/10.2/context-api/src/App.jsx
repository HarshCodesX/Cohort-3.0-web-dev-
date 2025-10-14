import React, {useState, createContext, useContext} from 'react'

const BulbContext = createContext();

const App = () => {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
      }}>
        <Light />
      </BulbContext.Provider>
    </div>
  )
}


function Light(){
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb(){
  const {bulbOn} = useContext(BulbContext);
  return <div>
    {bulbOn ? "bulb on" : "bulb off"}
  </div>
}

function LightSwitch(){
  const {setBulbOn} = useContext(BulbContext);
  function toggle(){
    setBulbOn(prev => !prev);
  }

  return <div>
    <button onClick={toggle}>Toggle the buld</button>
  </div>
}

export default App

















//Hide the context using a wrapper function
// import React, {useState, createContext, useContext} from 'react'

// const BulbContext = createContext();

// function BulbProvider({children}){
//   const [bulbOn, setBulbOn] = useState(true);
//   return <BulbContext.Provider value={{
//     bulbOn: bulbOn,
//     setBulbOn: setBulbOn
//   }}>
//     {children}
//   </BulbContext.Provider>
// }

// const App = () => {
//   return (
//     <div>
//       <BulbProvider>
//         <Light />
//       </BulbProvider>
//     </div>
//   )
// }

// function Light(){
//   return <div>
//     <LightBulb />
//     <LightSwitch />
//   </div>
// }

// function LightBulb(){
//   const {bulbOn} = useContext(BulbContext);
//   return <div>
//     {bulbOn ? "bulb on" : "bulb off"}
//   </div>
// }

// function LightSwitch(){
//   const {setBulbOn} = useContext(BulbContext);
//   function toggle(){
//     setBulbOn(prev => !prev);
//   }

//   return <div>
//     <button onClick={toggle}>Toggle the buld</button>
//   </div>
// }

// export default App