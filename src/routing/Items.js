import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// get the query parameter through useSearchParams hook
const Items = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");

  const handleSumit = (event) => {
    event.preventDefault();
    // set a query parameter
    setSearchParams({name : name});
  };

  return (
    <div>
      <h1>Query parameters</h1>
      <form onSubmit={handleSumit}>
        <label>Put name: </label>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          type="text"
        ></input>
        <button type="submit">Find User</button>
      </form>
      {/* Find query parameter */}
      <h2>{searchParams.get("id")}</h2>
      <h2>{searchParams.get("name")}</h2>
      <h2>{searchParams.get("title")}</h2>
    </div>
  );
};

export default Items;
