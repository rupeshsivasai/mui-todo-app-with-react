import React, { useState} from 'react';
import './App.css';
import Button from '@mui/material/Button'; // Importing Material UI Button component
import TextField from '@mui/material/TextField'; // Importing Material UI TextField component
import Todo from './Todo'; // Importing the Todo component

function App() {

  const [todos, setTodos] = useState(['Learn React', 'Build a Todo App']);
  const [input, setInput] = useState(''); 


  const AddTodo = (event) => {
    // this will fire when the button is clicked
    event.preventDefault();  // will stop the page frome refreshing
 

    console.log('👽','Im Working...');
    setTodos([...todos, input]);
    setInput('');  // clear the input after Clicking Add TODO button
  }

  
  return (
    <div className="App">
      <h1>Welcome To RSS Programmer🚀</h1>
      <form >
        {/* <input placeholder="✅ Write Todo" value={input} onChange={event => setInput(event.target.value)} /> */}
        <TextField id="standard-basic" label="✅ Write Todo" value={input} variant="standard" onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} type='submit' onClick={AddTodo} variant="contained" color="secondary">Add Todo</Button>
        {/* <button disabled={!input} onClick={AddTodo} >Add Todo</button> */}
        

      </form>
      <ul>
        {todos.map((todo, index) => (
          <Todo text={todo} />
          // <li key={index}>
          //   {todo}
          // </li>
          
        ))}
      </ul>
    </div>
  );
}

export default App;


