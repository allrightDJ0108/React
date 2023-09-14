import React, {useState, useEffect, useRef} from "react";

function Calculator(){
    const [prevVal, setInputVal] = useState("");
    const [nextVal, setNextVal] = useState("");
    const [result, setResult] = useState("");

    const addFunc = (e) => {
        if (e == 1){
            setResult(parseInt(prevVal)+parseInt(nextVal));
        } else if (e == 2){
            setResult(parseInt(prevVal)-parseInt(nextVal));
        } else if (e == 3){
            setResult(parseInt(prevVal)*parseInt(nextVal));
        } else if (e == 4){
            setResult(parseInt(prevVal)/parseInt(nextVal));
        }
        
    }


    return (
        <>
            <h1>GCU Calculator</h1>

            <p>
            <input type="number" id="num1" value={prevVal} onChange={(e) => setInputVal(e.target.value)}/>
            <input type="number" id="num2" value={nextVal} onChange={(e) => setNextVal(e.target.value)}/>
            </p>
            <p>
            {result}
            </p>
            <button onClick={()=> addFunc(1)}>
                Add
            </button>
            
            <button onClick={()=> addFunc(2)}>
                Sub
            </button>
            <button onClick={()=> addFunc(3)}>
                Mul
            </button>
            <button onClick={()=> addFunc(4)}>
                Div
            </button>
        </>
    )
    

}

export default Calculator;