import { useState } from "react";

const CounterFunction = () => {
  const [count, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter(count + 1)
  }

  const decreaseCount = () => {
    setCounter(count - 1)
  }

  return (
    <>
      <h3> {count} current count value</h3>
      <br />
      <small>Method 1</small><br/>
      <button onClick={() => setCounter(count + 1)} className="btn">
        Add 1
      </button>
      <button onClick={() => setCounter(count - 1)} className="btn">
        Subtract 1
      </button>

      <br/>
      <br/>
      <small>Method 2</small><br/>
      <button onClick={increaseCount} className="btn2">
        Add 1
      </button>
      <button onClick={decreaseCount} className="btn2">
        Subtract 1
      </button>
      <br/>
    </>
  )
}

export default CounterFunction;

