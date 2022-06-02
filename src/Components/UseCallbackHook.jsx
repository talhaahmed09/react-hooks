import { memo, useCallback, useState } from "react";
import Hello from "./Hello";
import Square from "./Square";

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const numbers = [7,21,36]
  const increment = useCallback(() => {
      setCount(c => c + 1);
  },[setCount])
  
  return(
      <div>
          <Hello increment={increment} />
      <div>count: {count}</div>
      {numbers.map((n) => {
          return <Square increment={increment} n={n} key={n}/>
      })}
      </div>
      );
};

export default UseCallbackHook;