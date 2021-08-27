import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo"


function App() {
  const [todos, setTodos] = useState([
    { id: 1, 
      task: "walk the dog", 
      completed: false} 
  ])
  return (
    <div className="App">
      {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}

        <input type="text" placeholder="Enter To Do Here..." />
    </div>
  );
}

export default App;
