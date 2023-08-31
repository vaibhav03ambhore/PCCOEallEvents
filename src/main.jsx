import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Bg from './Images/Background.jpg'
const myStyle={
  backgroundImage:
"url('./Images/Background.jpg')",
  height:'100vh',
  marginTop:'-70px',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
)
