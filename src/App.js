import "./App.css";
import "./Start.css";
import Contacts from "./Contacts";
import About from "./About";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="start">
        <NavLink to="/About" className={"navlink"}>
          About
        </NavLink>
        <NavLink to="/Contacts" className={"navlink"}>
          Contacts
        </NavLink>
      </div>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
