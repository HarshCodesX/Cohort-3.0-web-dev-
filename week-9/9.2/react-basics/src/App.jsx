import React from 'react'
import { useState, useEffect } from 'react';

const App = () => {
  let [counterVisible, setCounterVisible] = useState(true);
  useEffect(function(){
    setInterval(function(){
      setCounterVisible(prev => !prev);
    }, 5000);
  }, [])
  return (
    <>
    {counterVisible ? <Counter></Counter> : null}
    {/* {counterVisible && <Counter></Counter>} */}
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("on mount");
    let clock = setInterval(function(){
      console.log("from inside of setinterval");
      // setCount(count + 1); //this wont work
      // setCount(prev => prev + 1);
      // setCount(function(count){
      //   return count + 1;
      // })
    }, 1000);
    return function(){
        console.log("component unmounted");
        clearInterval(clock);
      }
  }, [])

  function increaseCount(){
    setCount(count + 1);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
  </div>
}

export default App