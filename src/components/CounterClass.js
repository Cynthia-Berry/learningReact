import {Component} from 'react'


class CounterClass extends Component{
    constructor(props){
        super(props);

        // this.state is used to store property values
        // (Values that belong to the component, i.e variables that can change)
        this.state = {
            counterValue: 0
        }

        // this.increaseCount = this.increaseCount.bind(this);
        // this.decreaseCount = this.decreaseCount.bind(this);
    }

        /*
        * TO USE THIS UNCOMMENT THE BINDING DONE IN THE CONSTRUCTOR
        *ARROW FUNCTION AUTOMATICAL BINDS A METHOD
         */

    // increaseCount () {
    //     this.setState(
    //         (prevState) => ({counterValue: prevState.counterValue + 1})
    //     )
    // }

    // decreaseCount () {
    //     this.setState (
    //         (prevState) => ({counterValue: prevState.counterValue - 1})
    //     )
    // }


    /**ARROW FUNCTION AUTOMATICAL BINDS A METHOD */
    increaseCount = () => {
        this.setState(
            (prevState) => ({counterValue: prevState.counterValue + 1})
        )
    }

    decreaseCount = () => {
        this.setState (
            (prevState) => ({counterValue: prevState.counterValue - 1})
        )
    }

    render() {
        return (
            <>
                <h3>Counter current value is {this.state.counterValue}</h3>
                <br/>
                <button onClick={this.increaseCount} className="btn2">Add 1</button>
                <button onClick={this.decreaseCount} className="btn2">Deduct 1</button>
            </>
        )
    }
}

export default CounterClass;