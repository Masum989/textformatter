import React, { useState } from 'react'

import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom"
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
 let toggleMode =()=>{
  if(mode==='light'){
  setMode ('dark')
   document.body.style.backgroundColor="#bf7b74";
   showAlert("Dark mode has enabled","success")
  }else{
    setMode('light');
    document.body.style.backgroundColor="white";
   showAlert("Light mode has enabled", "success")
  }
 }
  return (
    <>  

    <Router>
    <Navbar title="Textformatter" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     <Routes>
      <Route exact path="/about" element={<About mode={mode}/>} />
      <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to format" mode={mode}/>} />
     </Routes>
     </div>
    </Router>
    
    </>
  );
}

export default App;
