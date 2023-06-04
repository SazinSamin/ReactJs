import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./routing/HomePage";
import About from "./routing/About";
import Service from "./routing/Blogs";
import Error from "./routing/Error";
import Navbar from "./routing/Navbar";
import Blog from "./routing/Blog";
import Blogs from "./routing/Blogs";
import User from "./routing/User";
import Items from "./routing/Items";

export default function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/blogs/:title" element={<Blog />}/>
        {/* Route parameter route*/}
        <Route path="user/:userName" element={<User />} />
        {/* Query parameter route*/}
        <Route path="items" element={<Items />}/>
        <Route path="*" element={<Error />}/>
    </Routes>
  </BrowserRouter>;
}
