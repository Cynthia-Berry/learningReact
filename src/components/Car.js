import React from "react";

/* Props is short for properties and They are the optional input
 can accept which is used to manupilate what the components returns in the dom/UI.

 They basicallly used for passing data from the parent component to the child components
 they are likened to HTML attributes
 */


/*
* STATES
 * Are Mutable (Can be changed).
 * Data is owned locally and updated by the component itself.
 * Can only be used inclass based component.
 * 
 * PROPS
 * Are Immutable (read-only changed).
 * Data is passed in from parent component.
 * Can be used in both functional and class based components.
 */

function Car (props) {
    return (
        <>
            <h3>The brand of this car is {props.brand}</h3>
            <h3>The model of this car is {props.model}</h3>
            <h3>The color of this car is {props.color}</h3>
            <h3>The year of this manufacture is {props.year}</h3>
        </>
    )
 }

export default Car;