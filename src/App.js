import React, { useState } from 'react'
import './App.css';
import Person from './Person/Person'


const App = props => {
  const [ personsState, setPersonsState ] = useState({
        persons: [
          { name: 'Max', age: 28 },
          { name: 'Garrett', age: 34 },
          { name: 'Monty', age: 50 }
        ],
        otherState: 'some value'
      });
      console.log(personsState);

      const switchNameHandler = () => {
        // console.log('Was clicked!');
        //  DONT DO THIS this.state.persons[0].name = 'Max';
        setPersonsState({
          persons: [
            { name: 'Maximillian', age: 30 },
          { name: 'Garrett', age: 34 },
          { name: 'Monty', age: 54 }
          ]})
      }
  
    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <p>This is working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}  food='peanut butter' food2='bananas'/>
        <Person name={personsState.persons[1].name}  age={personsState.persons[1].age}  food='pickles' food2='more pickles' />
        <Person name={personsState.persons[2].name}  age={personsState.persons[2].age} food='pizza' food2='mushrooms' />
      </div>
    )
  }



export default App;



// state = {
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Garrett', age: 34 },
//     { name: 'Monty', age: 50 }
//   ],
//   otherState: 'some value'
// };

