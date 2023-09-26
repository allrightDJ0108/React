//App.js

import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

import styled from "styled-components";
import Counter from "./Counter";

const StyleButton = styled.button`
    padding : 8px 16px;
`;

const StyleTextarea = styled.input`

`;

const numState1 = atom({
    key : "numState1",
    default : ""
});

const numState2 = atom({
    key : "numState2",
    default : ""
});

const num1State = selector({
    key:"num1State",
    get : ({get}) => {
        const text = get(numState1);
        return text;
    }
});

const num2State = selector({
    key:"num2State",
    get : ({get}) => {
        const text = get(numState2);
        return text;
    }
});

function NumInput1(){
    const [num1, setNum1] = useRecoilState(numState1);

    const onChangeNum1 = (event) => {
        setNum1(event.target.value);
    };

    return (
        <div>
            Number1
            <input type="number" value={num1} onChange={onChangeNum1}/>
            <br/>
        </div>
    );
}

function NumInput2(){
    const [num2, setNum2] = useRecoilState(numState2);

    const onChangeNum2 = (event) => {
        setNum2(event.target.value);
    };

    return (
        <div>
            Number2
            <input type="number" value={num2} onChange={onChangeNum2}/>
            <br/>
        </div>
    );
}

function NumAdd(){
    const num1 = useRecoilValue(num1State);
    const num2 = useRecoilValue(num2State);

    return (
        <>
            <StyleTextarea value={Number.parseInt(num1) + Number.parseInt(num2)}/>
            <br/>
        </>
    );
}

function NumMinus(){
    const num1 = useRecoilValue(num1State);
    const num2 = useRecoilValue(num2State);

    return (
        <>
            <StyleTextarea value={Number.parseInt(num1) - Number.parseInt(num2)}/>
            <br/>
        </>
    );
}

function NumMulti(){
    const num1 = useRecoilValue(num1State);
    const num2 = useRecoilValue(num2State);

    return (
        <>
            <StyleTextarea value={Number.parseInt(num1) * Number.parseInt(num2)}/>
            <br/>
        </>
    );
}

function NumDivid(){
    const num1 = useRecoilValue(num1State);
    const num2 = useRecoilValue(num2State);

    return (
        <>
            <StyleTextarea value={Number.parseInt(num1) / Number.parseInt(num2)}/>
            <br/>
        </>
    );
}

function NumCal(){
    return(
        <div>
            <table style={{marginLeft:"auto", marginRight:"auto"}}>
                <thead>
                    <tr>
                        <th>
                            <h1>Opreator</h1>
                        </th>
                        <th>
                            <h1>result</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <StyleButton type="button">+</StyleButton>
                        </td>
                        <td>
                            <NumAdd/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <StyleButton type="button">-</StyleButton>
                        </td>
                        <td>
                            <NumMinus/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <StyleButton type="button">*</StyleButton>
                        </td>
                        <td>
                            <NumMulti/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <StyleButton type="button">/</StyleButton>
                        </td>
                        <td>
                            <NumDivid/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function App() {
    return (
      // <Counter/>
        <RecoilRoot>
         <div className='App' style={{textAlign:"center"}}>
            <h1 style={{background:"", textAlign:"center"}}>
              DJ's GCU Calculator
            </h1>
            <NumInput1/>
            <NumInput2/>
            <hr></hr>
            <NumCal/>
  
         </div>
      </RecoilRoot>
    );
}
export default App;