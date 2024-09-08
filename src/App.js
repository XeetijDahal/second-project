import React, { useEffect, useState } from 'react';

const TodoApp = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    name: '',
    age: '',
    rollnumber: '',
  });
  useEffect( () => {
    localStorage.setItem('kshitij',JSON.stringify(todos))},[todos]
  )
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const addTodo = () => {
    if (newTodo.name.trim() === '' || newTodo.age.trim() === '' || newTodo.rollnumber.trim() === '') {
      return;
    }

    const newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        name: newTodo.name,
        age: newTodo.age,
        rollnumber: newTodo.rollnumber,
      },
    ];

    setTodos(newTodos);
    setNewTodo({
      name: '',
      age: '',
      rollnumber: '',
    });
  };

  const editTodos = (id) => {
    let changeContent = prompt("What thing do you want to change? ");
    let value;
    if (changeContent === "name") {
      value = prompt("Enter the name: ");
    } else if (changeContent === "age") {
      value = prompt("Enter the Age: ");
    } else if (changeContent === "rollnumber") {
      value = prompt("Enter the rollnumber: ");
    }
    editTodo(id, changeContent, value);
  };

  const editTodo = (id, fieldName, newValue) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, [fieldName]: newValue } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  

  return (
    <div>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={newTodo.name} onChange={handleInputChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={newTodo.age} onChange={handleInputChange} />
        </label>
        <label>
          Roll Number:
          <input type="text" name="rollnumber" value={newTodo.rollnumber} onChange={handleInputChange} />
        </label>
        <button onClick={addTodo}>Add Student</button>
      </div>
      <h1>Student Information</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>Name:</strong> {todo.name}<br/>
             <strong>Age:</strong> {todo.age}<br/>
            <strong>Roll Number:</strong> {todo.rollnumber}<br/>
            <button onClick={() => editTodos(todo.id)}>
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};


export default TodoApp;
