import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, {useState} from "react";


function App() {
  const[mode, setMode] = useState("light");
  const toggleMode = ()=> {
    if(mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} /> 
      <div className="container my-3">
        <TextArea heading="Enter your text here" mode={mode} />
      </div>
    </>
  );
}

export default App;
