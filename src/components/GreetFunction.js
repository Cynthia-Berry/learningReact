import React from "react";

/* FUCTIONAL BASE COMPONENT */
/* 1. BASIC WAY */
// function GreetFunction() {
//     return (
//         <h2>Welcome to React!</h2>
//     )
// }

/* 2. ARROW FUNCTIONS WAY */
// const GreetFunction = () => {
//     return(
//         <h2>Welcome to React!</h2>
//     )
// }

/* 3. USING PROPS TO PASS VALUE IN A FUNCTIONAL COMPONENT */
// const GreetFunction = (props) => {
//     return(
//         <div>
//             <h2>Welcome to React!</h2>
//             <p>{props.greeting}</p>
//         </div>
//     )
// }

const GreetFunction = ({greeting}) => {
    return(
        <div>
            <h2>Welcome to React!</h2>
            <p>{greeting}</p>
        </div>
    )
}


export default GreetFunction;