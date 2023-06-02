import React, { useState, Suspense }from "react"
import {suspense} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";

import Register from "./components/Register"
import Login from "./components/Login"
import Home2 from "./components/Home2"
import All from "./components/All"
import Admin from "./components/Admin"
import Header from "./components/Header"




function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
   <Suspense fallback={null}>
      <div>
     
     <BrowserRouter>
     <Header/>
      <Routes>
      <Route path="/" name="Login" element={<Login />} />
      <Route path="/Register" name="Register" element={<Register />} />
      
      <Route path="/Home2" name="Home2" element={<Home2 />} />
    <Route path="/All" name="All" element={<All />} />
    
    <Route path="/Admin" name="Admin" element={<Admin />} />
    
      
      
      
        
       
      
 
      </Routes>
  </BrowserRouter>
         
    
       
  
    </div>
   </Suspense>
  );
}

export default App;
