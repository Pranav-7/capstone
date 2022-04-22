import "./App.css";
import Home from "./Pages/Home/Home";
import Siteabout from "./Pages/SiteAbout/Siteabout";
import Sitegoals from "./Pages/SiteAbout/Sitegoals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Designone from "./Pages/designone/Designone";

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/siteAbout" element={<Siteabout />} />
          <Route path="/siteGoals" element={<Sitegoals />} />
          <Route path="/one" element={<Designone />} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
