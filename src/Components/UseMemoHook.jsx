import { useMemo } from "react";
import { useFetch } from "./CustomHook";

function computeLongestWord (arr) {
    if(!arr) {
        return [];
    }

    let longestWord = '';

    JSON.parse(arr).forEach(sentence => {
        sentence.split(" ").forEach(word => {
            if(word.length > longestWord.length) {
                longestWord = word;
            }
        });
    });

    return longestWord;
}

const UseMemoHook =() => {
    const {data} = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json');

  

    const longestWord = useMemo(() => computeLongestWord(data), [data])

    return (
        <div>
           <div> {longestWord}</div> 
        </div>
    )
};

export default UseMemoHook;
