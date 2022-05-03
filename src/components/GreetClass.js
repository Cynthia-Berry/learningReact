import React, {Component} from "react";

/* CLASS BASE COMPONENT */
class GreetClass extends Component {
    render() {
       return( 
       <div>
           <h2>How are you</h2>
           <p>{this.props.messgae}</p>
       </div>)
    }
}

export default GreetClass;