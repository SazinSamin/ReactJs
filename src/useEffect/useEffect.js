import React, { useEffect, useState } from "react";


export default function UseEffectExample() {

  const [todos, setTodos] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    setTodos(json);
  }
  // If we want to console.log the data ->
  // https://github.com/SazinSamin/ReactJs/tree/main/Problem&Solution/asynchronous_fetch

  useEffect(() => {
    fetchData();
  }, []);

  

  return (<div>
    <h1>Todos</h1>
    <p>{todos && todos.map((todo) => {
      return (<p>{todo.title}</p>)
    })}</p>
  </div>)
}
