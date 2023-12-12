import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setcounter] = useState(15)
  const increaseCounter = () => {
    setcounter(counter + 1)
    console.log(counter);
  }
  const decreaseCounter = () => {
    setcounter(counter - 1)
    console.log(counter);
  }
  return (
    <>
      <h1>react with Akshat </h1>
      <h2>counter value : {counter}</h2>
      <button onClick={increaseCounter}>Add to counter</button>
      <button onClick={decreaseCounter}>remove from counter</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
