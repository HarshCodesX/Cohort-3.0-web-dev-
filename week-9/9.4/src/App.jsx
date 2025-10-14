// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Card children={"hi there"}/>
//       <Card>
//         <div style={{color: "green"}}>
//           what do you want to post? <br />
//           <input style={{marginTop: 8}} type="text" placeholder='enter text here' name="" id="" />
//         </div>
//       </Card>
//     </div>
//   )
// }

// function Card({children}){
//   console.log(children)
//   return (
//   <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//     {children}
//   </div>
//   )
// }

// export default App


//List and keys

// import React from 'react'

// const App = () => {
//   const todos = [{
//     title: "go to gym",
//     done: false
//   }, {
//     title: "Eat food",
//     done: true
//   }];
//   const todosComponents = todos.map(todo => <Todo title={todo.title} done={todo.done} />)
//   return (
//     <div>{todosComponents}</div>
//   )
// }

// function Todo({title, done}){
//   return <div>
//     {title} - {done ? "Done!" : "Not done!"}
//   </div>
// }

// export default App






//class based components vs functional components

// import React, { Component } from "react";

// const App = () => {
//   return (
//     <div>
//       <ClassCounter />
//     </div>
//   )
// }

// class ClassCounter extends Component{
//   state = {count: 0};

//   increment = () => {
//     this.setState({count: this.state.count + 1});
//   };

//   render(){
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// export default App












//Lifecycle events

//in functional based components
// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [isComponentShown, setIsComponentShown] = useState(true);
//   return (
//     <div>
//       {isComponentShown && <MyComponent />}
//     </div>
//   )
// }

// function MyComponent(){
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Component mounted or count updated");
//   }, [count]);

//   useEffect(() => {
//     console.log("component mounted");
//     return () => {
//       console.log("component unmounted");
//     }
//   }, []);

//   return (
//     <div>
//       <p style={{color: "black"}}>Count: {count}</p>
//       <button style={{backgroundColor: "white"}} onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// export default App;

//lifecycle events in class based components

// import React, {useState} from "react";

// const App = () => {
//   const [isComponentShown, setIsComponentShown] = useState(true);
//   return (
//     <div>
//       {isComponentShown && <MyComponent />}
//     </div>
//   )
// }

// class MyComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {count: 0}
//     }

//     componentDidMount(){
//         console.log("component mounted");
//     }

//     componentDidUpdate(prevProps, prevState){
//         console.log("component updated");
//     }

//     componentWillUnmount(){
//         console.log("component unmounted");
//     }

//     render(){
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
//             </div>
//         )
//     }
// }

// export default App;












//error boundary

import React, {useState, useEffect} from 'react'

const App = () => {
    const [isComponentShown, setIsComponentShown] = useState(true);
  return (
    <div>
        <ErrorBoundry>
            <Card1 />
        </ErrorBoundry>
        <ErrorBoundry>
            <Card2 />
        </ErrorBoundry>
    </div>
  )
}

function Card1(){
    throw new Error("error while rendering");
    return <div style={{background: "green", borderRadius: 20, padding: 20, margin: 10}}>
        hi there
    </div>
}

function Card2(){
    return <div style={{background: "green", borderRadius: 20, padding: 20, margin: 10}}>
        hello there
    </div>
}

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    componentDidCatch(error, info){
        console.error("Error caught: ", error, info);
    }

    render(){
        if(this.state.hasError){
            return <div style={{background: "green", borderRadius: 20, padding: 20, margin: 10}}>
        something went wrong
    </div>
        }
        return this.props.children;
    }
}

export default App;