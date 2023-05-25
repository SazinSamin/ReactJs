import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const isLoadingMessage = <p>Data fetching, please wait...</p>;
const url = "https://jsonplaceholder.typicode.com/todos";


export default function UseEffectExample() {


  const {data, isLoading, error} = useFetch(url);

  return (<div>
    <h1>Todos</h1>
    {error && <p>{error}</p>}
    {isLoading && isLoadingMessage}
    {data && data.map((d) => {
      return (<p key={d.id}>{d.title}</p>)
    })}
  </div>)
}