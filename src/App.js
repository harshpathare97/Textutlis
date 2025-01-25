import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import React from "react";

function App() {
  const [mode,setMode]=useState(`light`);
  const [alert,setAlert]=useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode = () => {
    if(mode==='dark'){
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.background='#343a40';
      showAlert("Dark mode has enabled","success");
    }
  }
  return (
    <>
      <Navbar title='Textutils' mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/><br/>
      <Textarea heading='Enter the text below' mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
