import { useState } from "react";
import { dummies } from "./dummy_data";
import { Link } from "react-router-dom";

const Blogs = () => {


  const [data, setData] = useState(dummies);

  const truncateArticle = (desc) => {
    if(desc.length >= 30) {
      return desc.slice(0, 30) + " ...";
    } else {
      return desc;
    }
  }

  return <div>
    <h2>Blogs</h2>
    <div className="blog">
    {data.map(data => {
      const {id, title, description} = data;
      return <div className="article" key={id}>
        <h3>{title}</h3>
        <p>{truncateArticle(description)}</p>
        <Link to={title}>Read More</Link>
      </div>
    })}
    </div>
  </div>
}

export default Blogs;