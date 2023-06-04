import { Helmet } from "react-helmet";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";


export default function App() {

  return <div>
    <Helmet>
      <title>Log in </title>
    </Helmet>

    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage title="HomePage"/>} />
      </Routes>
    </BrowserRouter>

  </div>
}
