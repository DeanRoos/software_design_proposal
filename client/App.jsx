import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewForm";
import { GuessList } from "./GuessList";
//import { getCities, getCity } from "../database";

export default function App() {
  const [message, setMessage] = useState("");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })

  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed}
        }

        return todo;
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Cities</h1>
      <GuessList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <div className="App">
      <h1>{message}</h1>
    </div>
    </>
  )
}

