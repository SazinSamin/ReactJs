import { useRef } from "react";
// ref is used to access and modify the DOM element directly 
// without using React or React state
// That's why it is called Uncontrolled element
// ref is slow.

const Ref = () => {

  const nameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    nameRef.current.focus();
    console.log(nameRef.current.value);
  }

  return <div>
    <h1>useRef</h1>
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input ref={nameRef}  type="text"></input>
      <button type="submit">Submit</button>
    </form>
  </div>
}

export default Ref;