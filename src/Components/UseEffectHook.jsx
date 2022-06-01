import { useState } from "react";
import { useFetch } from "./CustomHook";

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

    return (
        <div>
            {!data? 'loading...' : data}
            <button onClick={() => setCount(c => c + 1)}>increament</button>
        </div>
    )
}

export default UseEffectHook;