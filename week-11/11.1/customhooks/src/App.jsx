// import React, {useState} from 'react'

// function useCounter(){
//   const [count, setCount] = useState(0);

//   function increaseCount(){
//     setCount(count + 1);
//   }
//   return {
//     count: count,
//     increaseCount: increaseCount
//   }
// }

// const App = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   )
// }

// function Counter(){
//   const {count, increaseCount} = useCounter();
//   return <div>
//     <button onClick={increaseCount}>Increase: {count}</button>
//   </div>
// }

// export default App














//useFetch custom hook
// import React, {useState, useEffect} from 'react'

// const App = () => {
//   const [post, setPost] = useState({});
//   async function getPosts(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const json = await response.json();
//     setPost(json);
//   }
//   useEffect(() => {
//     getPosts();
//   }, [])
//   return (
//     <div>
//       {post.title}
//     </div>
//   )
// }

// export default App

//ABOVE WAY WAS CUSTOM WAY OF DOING IT, NOW WE WILL MAKE USEFETCH HOOK
// import React, {useState} from 'react'
// import { useFetch, usePostTitle } from './hooks/useFetch'

// const App = () => {
//   const [currentPost, setCurrentPost] = useState(1);
//   const postTitle = usePostTitle();
//   const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);
//   return (
//     <div>
//     <button onClick={() => setCurrentPost(1)}>1</button>
//     <button onClick={() => setCurrentPost(2)}>2</button>
//     <button onClick={() => setCurrentPost(3)}>3</button>
//     <div>{postTitle}</div>
//     <div>{loading ? "loading" : finalData.body}</div>
//     </div>
//   )
// }

// export default App



















// UsePrev hook
// import React, {useState} from 'react';
// import { usePrev } from './hooks/usePrev';

// const App = () => {
//   const [state, setState] = useState(0);
//   const prev = usePrev(state);
//   return (
//     <div>
//       {state}
//       <button onClick={() => {
//         setState(curr => curr + 1)
//       }}>click me</button>
//       <p>the previous value was {prev}</p>
//     </div>
//   )
// }

// export default App













//useDebounce hook
// import React, {useRef} from 'react'
// import { useDebounce } from "./hooks/useDebounce";

//     function useDebounce(func){
//         let clock = useRef();
//         const fn = () => {
//             clearTimeout(clock.current);
//             clock.current = setTimeout(func, 500);
//         }
//         return fn;
//     }

// const App = () => {
    
//     function sendDataToBackend(){
//         fetch("api.amazon.com/search/");
//     }

//     const debouncedFn = useDebounce(sendDataToBackend);

//   return (
//     <div>
//         <input type="text" name="" onChange={debouncedFn} id="" />
//     </div>
//   )
// }

// export default App







//another version of useDebounce hook
import React, {useState, useEffect, useRef} from 'react'

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debouncedValue;

}

const App = () => {
    const [inputVal, setInputVal] = useState("");
    const debouncedValue = useDebounce(inputVal, 300);

    function change(e){
        setInputVal(e.target.value)
    }

    useEffect(() => {
        console.log("expensive operation");
    }, [debouncedValue])

  return (
    <div>
        <input type="text" onChange={change} />
    </div>
  )
}

export default App