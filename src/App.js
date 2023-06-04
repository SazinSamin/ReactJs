import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

import Card from "./Components/Card";
import Style from "./Components/card.module.css";


const url = "http://localhost:3001/notebooks";

export default function App() {

  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const response = await axios.get(url);
    const data = await response.data;
    setNotes(data);
  }


  useEffect(() => {
    fetchNotes();
  }, [])

  return <div>
    <h1>{notes.map(note => {
      const { id, title, author, created_at } = note;
      return <div className={Style.Cards}>
        <Card key={id} id={id} title={title} author={author} created_at={created_at}/>
      </div>
    })}</h1>
  </div>
}
