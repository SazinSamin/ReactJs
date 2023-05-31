import { useReducer } from "react";
import { useState } from "react";

import {reducer} from './reducer';

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];


const Modal = (props) => {
  return <i>{props.message}</i>
}


const UseReducerExample = () => {


  const [taskState, dispatch] = useReducer(reducer, {
    tasks : initialTasks,
    isModalOpen : false,
    modalText : "",
  });

  //const [task, setTask] = useState(initialTasks);
  //const [isModalOpen, setIsModalOpen] = useState(false);
  //const [modalText, setModalText] = useState("");
  const [addTask, setAddTask] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {id: new Date().getMilliseconds().toString(), text: addTask, done : true};

    dispatch({ type: "ADD", payload: newTask });
    /*
    setTask((prevState) => {
      const newTask = {id: new Date().toString(), text: addTask};
      return [...prevState, newTask];
    });
    setIsModalOpen(true);
    setModalText("New Task added");
    */
  }

  const handleChange = (event) => {
    setAddTask(event.target.value);
  }

  const handleDelete = (id) => {
    dispatch({type : "DELETE", payload : id});
  }


  return <div>
    <h1>Tasks</h1>
    <form onSubmit={handleSubmit}>
      <label>Add new task: </label>
      <input onChange={handleChange} value={addTask} type="text"></input>
      <button type="submit">Submit</button>
    </form>
    {taskState.isModalOpen && <Modal message={taskState.modalText}/>}
    {taskState.tasks.map((task) => {
      return <article key={task.id}>
        <h3 >{task.text}</h3>
        <button onClick={() => {
          handleDelete(task.id)
        }} >Delete</button>
      </article>
    })}


  </div>
}


export default UseReducerExample;