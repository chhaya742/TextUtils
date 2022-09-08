// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

// import {
  // BrowserRouter as Router,
  // Routes,
  // Route,
  // Link
// } from "react-router-dom";
// import Document from './components/Document';
// import { useState } from "react";

function App() {
  const [mode ,setMode]=useState('light');
  // const [greyMode ,setGreyMode]=useState('light');
  const [alert ,setAlert]=useState(null);
  var showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null)
    },1500)
  }
  var toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042742';
      showAlert("dark mode has been enabled","success")
      document.title='TextUtils dark-mode'
      // setInterval(()=>{
      //   document.title="Download now";

      // },1000)
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success")
      document.title='TextUtils light-mode'
    }
  }
  var toggleGreyMode=()=>{
    if(mode==='light'){
      setMode('grey')
      document.body.style.backgroundColor='grey';
      showAlert("grey mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <NavBar Title="Text-Utils" About="About Us" mode={mode} toggleMode={toggleMode} toggleGreyMode={toggleGreyMode}/>
  <Alert alert={alert}/>
    <div className='container'>
    {/* <Routes> */}
          {/* <Route exact path="/about"element={ <About />} /> */}
          {/* <Route exact path="/" element={  */}
             <TextForm heading="Enter the text to analyce below" mode={mode} showAlert={showAlert} />
             {/* }/> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    
    
    </>
  );
}

export default App;
