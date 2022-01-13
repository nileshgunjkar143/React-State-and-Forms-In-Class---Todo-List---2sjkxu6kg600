import React, { useState } from "react";
import "./../styles/App.css";

function App(){
    const [name,setName] = useState("");
    const [todos,setTodos] = useState([]);
    const [todosEditing,setTodosEditing] = useState(null);
    const [editingText,setEditingText] = useState("");

    const handleAdd =(event) =>{
        event.preventDefault();
        const newTodos={
          id :new Date().getTime(),
          text: name,
          completed:false
        }
        setTodos([...todos].concat(newTodos))
        setName("")
      }
      function deleteTodo (id) {
        const updateTodo = [...todos].filter((name) => name.id !== id)
        setTodos(updateTodo)
      }
      function editTodo (id) {
        const updateTodos = [...todos].map((name) => {
          if(name.id === id){
            name.text = editingText
          }
          return name
        })
        setTodos(updateTodos);
        setEditingText("");
        setTodosEditing(null);
      }

	return (
	<div id="main">
        <form onSubmit={handleAdd}>
            <textarea type="text" id="task" value={name} onChange={(e) => setName(e.target.value) } />
            <button type='submit' id="btn">add</button>
        </form>
        {todos.map((name) => <div key={name.id}>
        {todosEditing === name.id
        ? (<input type="text" onChange = {(e) => setEditingText(e.target.value)}
            value={editingText}/>) : (<span className="list">{name.text} </span>)}
        
        <button onClick={() => deleteTodo(name.id)}>  delete  </button>
        {todosEditing === name.id
        ? (<button onClick={() => editTodo(name.id)}> Submit Edit </button>)
        : (<button onClick={() => setTodosEditing(name.id)}> Edit </button>) }
        </div>)}
	</div>
	);
}


export default App;
