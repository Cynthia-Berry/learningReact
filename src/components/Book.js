import React, {Component} from "react";
/*
States are like vatiables that exists inside a component.
They are managed by the component directly.
It represents the part a component that can change

States are internal and are private to that components, They cannot be accessed by a parent component.
States can only be used in a class based component

CLASS BASED COMPONENTS can make use of STATE and PROPS

but
FUNCTION BASED COMPONENT only makes use of PROPS
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

class Book extends Component{
    constructor(props){
        super(props);

        // this.state is used to store property values
        // (Values that belong to the component, i.e variables that can change)
        this.state = {
            title: "Things fall apart.",
            author: "China Achebe",
            publishers: "Oxford"
        }
    }

    render() {
        return (
            <>
                <h3>the title of this book is {this.state.title}</h3>
                <h3>the author of this book is {this.state.author}</h3>
                <h3>the publisher of this book is {this.state.publishers}</h3>
            </>
        )
    }
}

export default Book;