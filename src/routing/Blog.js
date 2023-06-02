import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { dummies } from "./dummy_data";

const Blog = () => {

  const { title } = useParams();
  const locationObj = useLocation();
  const description = locationObj.state;

  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}

export default Blog;