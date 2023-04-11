import { useState } from 'react'
import './App.css'



function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editing, setEditing] = useState(false);
  let viewMode = {};
  let editMode = {};
  editMode.className = "editing"
  if (editing) {
    viewMode.display = 'none';
    
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const toggleEdit = () => {
    setEditing(!editing);
    handleUpdatedDone();
  };
  const updateTodo = (updatedTodo, id) => {
    setTodos(
      todos.map((todo) =>{
        if(todo.id === id) {
          todo = updatedTodo;
        }
        return recipe;
      })
    )
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>X</button>
            <button onClick={() => toggleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App