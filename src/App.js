import { useState } from 'react';
import './App.css';
import Alert from './components/Alert/Alert';
import Navbar from './components/Navbar/Navbar';
import Textbox from './components/Textbox/Textbox';
import About from './components/About/About';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggle = () => {
    if (darkMode === false) {
      setDarkMode(true);
      document.body.style.backgroundColor = '#121212';
      document.body.style.transition = 'all 0.2s linear';
      showAlert("Dark mode has been enabled!", "success");
      // document.title = 'Wordie | Home (Dark)';

      // setInterval(() => {
      //   document.title = 'Install Wordie Now';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Warning - You have a virus!';
      // }, 1500);
    }
    else {
      setDarkMode(false);
      document.body.style.backgroundColor = 'white';
      document.body.style.transition = 'all 0.2s linear';
      showAlert("Light mode has been enabled!", "success");
      // document.title = 'Wordie | Home (Light)';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Wordie" link1="Home" link2="Blog" link3="About" link4="Contact" btn="Join us" mode={darkMode} toggleMode={toggle} />
        <Alert alert={alert} />
        {/* <Textbox heading='Enter the text to analyze below' mode={darkMode} alert={showAlert} /> */}
        <Routes>
          <Route exact path="/about" element={<About mode={darkMode} />} />
          <Route exact path="/" element={<Textbox heading='Enter the text to analyze below' mode={darkMode} alert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
