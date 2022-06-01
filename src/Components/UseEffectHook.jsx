import { useEffect, useState } from "react";
import { useFetch } from "./CustomHook";

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
    let display = '';

    useEffect(() => {
        console.log('loading')
    },[data]);

    useEffect(() => {
        const onMouseMove = (e) => {
            display = 'Mouse Moving'
            console.log(display,'yes')
        }
        window.addEventListener("mousemove",onMouseMove);

        return () => {window.removeEventListener("mousemove",onMouseMove); console.log('unmount')}
    },[])

    return (
        <div>
            {!data? 'loading...' : data}
            <button onClick={() => setCount(c => c + 1)}>increament</button>
        </div>
    )
}

export default UseEffectHook;