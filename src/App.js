
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {ApiPage} from "./pages/ApiPage";
import { Navbar } from "./Navbar";
import { createContext,useState } from "react";

export const AppContext=createContext();
function App() {
  const [value,setValue]=useState("hello")

  

  return (
    <>
      <AppContext.Provider value={{value,setValue}}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/api" element={<ApiPage />} />
          
        </Routes>
        </Router>
        </AppContext.Provider>


    </>
  );
}

export default App;
