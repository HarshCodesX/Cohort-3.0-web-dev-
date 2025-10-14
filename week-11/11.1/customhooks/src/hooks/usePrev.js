import { useEffect, useRef } from "react"

export const usePrev = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value])
    return ref.current;
}

//in react it returns first, and then effect runs