import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Dark Mode
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  //Alert State
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    //alert is an object
    setalert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  return (
    <>
      <Router>
        {/* Navbar */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        {/* Alerts */}
        <Alert alert={alert} />
        {/* Content */}
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextArea
                  heading="Enter your text here"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
