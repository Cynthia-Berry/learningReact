import './App.css';
import Book from './components/Book';
import Button from './components/Button';
import Car from './components/Car';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import GreetClass from './components/GreetClass';
import GreetFunction from './components/GreetFunction';

const parentHello = () => {
  console.log("From Parent, HELLO!")
}

// FUNCTIONAL COMPONENT
function App() {
  return (
    <div className="App">
      {/* Component based component */}
      <GreetFunction greeting="My name is Cynthia"/>
      <br />
      <br />

      {/* Class based component */}
      <GreetClass messgae="This message was passed down using props" />
      <br />
      <br />

      {/* Props */}
      <Car  brand="Toyota" model="Avensis" color="Blue" year="2022" />
      <br />
      <br />

      {/* States */}
      <Book />
      <br />
      <br />

      {/* Event Handling */}
      <Button parentHello={parentHello}/>
      <br />
      <br />
     
     
      {/* Event Handling + State */}
      <CounterClass />
      <br />
      <br />

      {/* <CounterFunction /> */}
      <br />
      <br />
      <CounterFunction />


    </div>
  );
}


export default App;
