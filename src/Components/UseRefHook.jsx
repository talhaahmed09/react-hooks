import { useRef, useState} from "react";
import { useFetch } from "./CustomHook";
const UseRefHook = () => {
    const {data, loading} = useFetch('http://numbersapi.com/1/trivia');
      const inputRef = useRef();
      const renders = useRef(0);

      const [show, setShow] = useState(true)
    return (
        <div>

        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          ref={inputRef}
        />

        <button onClick={() => {inputRef.current.focus()}}>focus</button>

        <button onClick={() => {console.log("Renders", renders.current++)}}>Render</button>

        <br />
        <br />

        {show && data}

        <button onClick={() => setShow(!show)}>Toggle</button>

      </div>
    )
}

export default UseRefHook;