import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
// import Usercard from './Usercard.jsx'
import Nav1 from './Nav1.jsx'
// import Loginpage from './Loginpage.jsx'
// import Indexpage from './Indexpage.jsx'

  
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   

  // </React.StrictMode>,
  <BrowserRouter>
  <App/>
  {/* <Usercard/> */}
  {/* <Nav1/> */}
  {/* <Loginpage/> */}
  {/* <Indexpage/> */}
  </BrowserRouter>
)
