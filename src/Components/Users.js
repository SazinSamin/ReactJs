import { useState } from "react";
import User from "./User";

const Users = () => {

  const [name, setName] = useState("Akash");
  const [id, setId] = useState(200);

  const [subject, setSubject] = useState({
    subject1: "Electronics",
    subject2: "Programming"
  });

  const [student, setStudent] = useState({
    studentName: "Akash",
    studentId: 200,
  });

  

  return (<div>
    <User name={name} id={id} subject={subject} student={student} />
  </div>)
}


export default Users;