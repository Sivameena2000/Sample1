import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Nomatchfound from './Nomatchfound'
// import HOME1 from './HOME1'
// import Navcontainer from './Navcontainer'
// import RegisterContainer from './RegisterContainer'
// import REGISTER from './REGISTER'
// import Conditional from './Conditional'
// import REGISTER from './REGISTER'
// import Products from './Products'
// import Registerform from './Registerform'
// import New from './New'
// import Featured from './Featured'
//  import Reg from './Reg'
import Usercard from "./Usercard";
import Users from "./Users";
import Nav1 from "./Nav1";
import UserDetails from "./UserDetails";
import Propsdrilling from "./Propsdrilling";
import UseContext from "./UseContext";
import Admin from "./Admin";
import Weddingpackage from "./Weddingpackage";
import LOGIN from "./LOGIN";
import Reg from "./Reg";
import Dashboard from "./Dashboard";
import User from "./User";
import StudioPackage from "./StudioPackage";
import Settings from "./Settings";
import Babyshower from "./Babyshower";
import Maternity from "./Maternity";
import Index from "./Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navcontainer/> */}

      <Routes>
        {/* <Route path="/" element={<HOME1/>}></Route> */}
        {/* <Route path='/Register' element={<REGISTER/>}></Route>  */}
        {/* <Route path="*" element={<Nomatchfound/>}></Route> */}
        {/* <Route path="/" element={<Navcontainer/>}> </Route> */}
        {/* <Route path="/Registerform" element={<Registerform/>}></Route> */}
        {/* <Route path='/' element={<RegisterContainer/>}></Route> */}
        {/* <Route path="/" element={<Reg/>}></Route> */}
        {/* <Route path="/user/:id" element={<Usercard/>}></Route> */}
        {/* <Route path="/user/:id" element={<UserDetails />}></Route> */}
        {/* <Route path="/props" element={<Propsdrilling />}></Route> */}
        {/* <Route path="/usecontext" element={<UseContext />}></Route> */}
        {/* <Route path='/' element={<Users/>}></Route> */}
        {/* <Route path="/user" element={<Users />}></Route> */}
        {/* <Route path='/user/:id' element={<Usercard} */}

        <Route path="/" element={<Nav1 />}>
          <Route path="home" element={<Index />}></Route>
          <Route path="/weddingphotoshoot" element={<Weddingpackage />}></Route>
          <Route path="/Babyshowerphotoshoot" element={<Babyshower />}></Route>
          <Route path="/Maternityphotoshoot" element={<Maternity />}></Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="user" element={<User />}></Route>
          <Route path="package" element={<StudioPackage />}></Route>
          <Route path="Settings" element={<Settings />}></Route>
        </Route>
        <Route path="/Registerform" element={<Reg />}></Route>
        <Route path="/Login" element={<LOGIN />}></Route>

        {/* <Route path="/Home1" element={<HOME1/>}></Route>
      <Route path="/Register" element={<REGISTER/>}></Route>
      <Route path="/Products" element={<Products/>}>
        <Route path="New" element={<New/>}></Route>
        <Route path="Featured" element={<Featured/>}></Route>
      </Route> */}
        {/* <Route path="Conditional" element={<Conditional/>}></Route> */}
      </Routes>
      {/* <div>                               
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
