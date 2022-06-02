import { memo } from "react";
import { useCountRenders } from "./CustomHook";

const Hello = memo(({increment}) => {
    useCountRenders();

    return <button onClick={increment}>hello</button>;
})

export default Hello;