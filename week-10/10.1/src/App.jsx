// import React from 'react'
// import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";

// const App = () => {
//   return <div>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//         <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
//         <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
//         <Route path='/' element={<Landing />} />
//         <Route path='*' element={<ErrorPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </div>
// }

// function Layout(){
//   return <div>
//     <Link to="/">Allen</Link> | 
//     <Link to="/neet/online-coaching-class-11">class 11</Link> | 
//     <Link to="/neet/online-coaching-class-12">Class 12</Link>
//       <Outlet />
//     footer
//   </div>
// }

// function ErrorPage(){
//   return <div>
//     Page not found
//   </div>
// }

// function Landing(){
//   return <div>
//     Welcome to allen
//   </div>
// }

// function Class11Program(){
//   return <div>
//     NEET programs for class 11th
//   </div>
// }

// function Class12Program(){
//   const navigate = useNavigate();
//   return <div>
//     NEET programs for class 12th
//     <br />
//     <button onClick={() => {
//       navigate("/");
//     }}>Go back to landing page</button>
//   </div>
// }

// export default App

//useRef hook

// import React, {useRef} from 'react'

// const App = () => {
//   const inputRef = useRef();
//   const inputRefSecond = useRef();

//   function focusOnInput(){
//     inputRef.current.focus();
//   }

//   function focusOnInputSecond(){
//     inputRefSecond.current.focus();
//   }
//   return (
//     <div>
//       signup
//       <input ref={inputRef} type="text" />
//       <input ref={inputRefSecond} type="text" />
//       <button onClick={focusOnInput}>submit</button>
//       <button onClick={focusOnInputSecond}>submit2</button>
//     </div>
//   )
// }

// export default App







//useRef continued with example (building a clock with start and stop button)

import React, {useState, useRef} from 'react'

const App = () => {
  const [currentCount, setCurrentCount] = useState(1);
  // const [timer, setTimer] = useState(0); //here 2 re-renders are being done as this state is also being changed every second
  const timer = useRef();
  function startClock(){
    let value = setInterval(function(){
      setCurrentCount(prev => prev + 1);
    }, 1000);
    // setTimer(value);
    timer.current = value;
  }

  function stopClock(){
    console.log(timer);
    clearInterval(timer.current);
  }
  
  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  )
}

export default App