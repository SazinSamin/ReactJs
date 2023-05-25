import React, { useEffect, useState } from "react";

const isLoadingMessage = <p>Data fetching, please wait...</p>;
const errorMessage = <p>Error in data fecting</p>;

export default function UseEffectExample() {

  const [todos, setTodos] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
   try{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    setTodos(json);
    setisLoading(false);
   } catch(e) {
    setError(e.message);
    setisLoading(false);
   }
  }
  // If we want to console.log the data ->
  // https://github.com/SazinSamin/ReactJs/tree/main/Problem&Solution/asynchronous_fetch

  useEffect(() => {
    fetchData();
  }, []);

  

  return (<div>
    <h1>Todos</h1>
    {error && errorMessage}
    {isLoading && isLoadingMessage}
    {todos && todos.map((todo) => {
      return (<p key={todo.id}>{todo.title}</p>)
    })}
  </div>)
}