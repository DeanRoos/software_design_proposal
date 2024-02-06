import { GuessItem } from "./GuessItem"

export function GuessList({todos, toggleTodo, deleteTodo}){
  return (
    <ul className="list">
        {todos.length === 0 && "Enter a guess above!"}
        {todos.map(todo => {
          return (
            <GuessItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          
          )
        })}
      
      </ul>
  )
}

