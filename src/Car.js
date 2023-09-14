import React, {useState } from "react";

function Car(){
    const [car, setCar] = useState({
        brand : "Ford"
        , model : ""
        , year : "1964"
        , color : "red"
    
    });

    const updateColor = () => {
        setCar(prevState => {
            return {...prevState, color: "blue"}
        });
    }

    return (
        <>
        <h1> My {car.brand}</h1>
        <p>It is a {car.color} {car.model} from {car.year}.</p>
        </>
    )
}

export default Car;