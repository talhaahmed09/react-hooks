import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
    const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
        isCurrent.current = false;
        console.log('unmounted')
    }
  },[])

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setTimeout(() => {
            if(isCurrent){
                setState({ data: y, loading: false });
            }
   
        }, 100);
      });
  }, [url, setState]);

  return state;
};
