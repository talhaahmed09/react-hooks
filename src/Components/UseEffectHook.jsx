import { useEffect, useRef, useState } from "react";
import { useFetch } from "./CustomHook";
import { UseLayoutEffectHook } from "./UseLayoutEffectHook";
const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

    useEffect(() => {
        console.log('loading')
    },[data]);

    useEffect(() => {
        const onMouseMove = (e) => {
            
            console.log('Mouse moving?','yes')
        }
        window.addEventListener("mousemove",onMouseMove);

        return () => {window.removeEventListener("mousemove",onMouseMove); console.log('unmount')}
    },[]);

    const divRef = useRef();

    const rect = UseLayoutEffectHook(divRef,[data])

    return (
        <div>
            <div style={{display: 'flex', justifyContent:'center', marginBottom:'10px'}}>
            <div ref={divRef}> {!data? 'loading...' : data} </div>
            </div>
            <button onClick={() => setCount(c => c + 1)}>increament</button>

            <pre>{JSON.stringify(rect,null,2)}</pre>
           
        </div>

        
    )
}

export default UseEffectHook;