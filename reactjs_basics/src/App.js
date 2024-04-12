import './App.css';
import {useState, useEffect} from 'react';

//small component
const Person1 = () =>{
  return (
    <>
    <h1>Name: John</h1>
    <h2>Last Name: Doe</h2>
    <h2>Age: 30</h2>
    </>
  )
}
const Person2 = (props) =>{
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = 'John';
  const name2 = null;

  //create different ternary expressions
  const isNameShowing = false;

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(100);
  }, [])

  return (
    <div className="App">


      <h1>Hello</h1>
      <h1>Hello, {name}</h1>
      <h1>Hello, {isNameShowing ? name : 'Samruddhi'}</h1>


      {/* Rendering react fragment */}
      {name2 ? (
        <>
          test1
        </>
      ) : (
        <>
        <h1>test2</h1>
        <h3>There is no name</h3>
        </>
        
      )}



      {/* //using small components */}
      <Person1 />
      <Person2 
        name={'Samruddhi'} 
        lastName={'Somwanshi'} 
        age={22}
      />



      {/* Scenario to use the state */}
    
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

    </div>
  );
}

export default App;
