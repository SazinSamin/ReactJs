import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { dummies } from "./dummy_data";

const Blog = () => {

  const { title } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    const titleData = dummies.filter(data => data.title === title);
    console.log(titleData[0].description);
    setData(titleData[0].description);
  }, [])

  return <div>
    <h1>{title}</h1>
    <p>{data}</p>
  </div>
}

export default Blog;