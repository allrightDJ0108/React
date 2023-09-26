

import {useState, useEffect, useRef} from "react";

function useRefPrev(){
    const [inputVal, setInputVal] = useState("");
    const previousInputVal = useRef("");

    useEffect(() => {
        previousInputVal.current = inputVal;
    }, [inputVal]);

    return (
        <>
            <input type="text" value ={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            />

            <h2>Current Value:{inputValue}</h2>
            <h2>Previous Value:
                {previousInputVal.current}
            </h2>
        </>
    )
}