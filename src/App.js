import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./routing/HomePage";
import About from "./routing/About";
import Service from "./routing/Service";
import Error from "./routing/Error";

export default function App() {
  return <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="*" element={<Error />}/>
    </Routes>
  </BrowserRouter>;
}
