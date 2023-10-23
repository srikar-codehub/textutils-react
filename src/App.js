import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been Enabled", "primary");
    } else if (mode === "dark") {
      setMode("blue");
      document.body.style.backgroundColor = "Blue";
      showAlert("Blue mode has been Enabled", "primary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "primary");
    }
  };
  return (
    <>
      <Router>
        {/* Navbar */}
        <Navbar
          title="Textutils"
          link_1="Home"
          link_2="About"
          mode={mode}
          toggleMode={toggleMode}
        />

        {/* Alert */}
        <Alert alert={alert} />

        {/* TextForm */}
        <div className="container my-3">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          {/* 
          <TextForm
            showAlert={showAlert}
            mode={mode}
            label="Enter text for analysis"
          /> */}

          {/* About */}

          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>

          {/* TextForm */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  label="Enter text for analysis"
                />
              }
            />
          </Routes>
        </div>

        {/* About */}
        <div className="container my-4"></div>
      </Router>
    </>
  );
}

export default App;
