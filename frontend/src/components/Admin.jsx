import React from 'react';
import Logo2 from "../assets/logo2.jpg"
import { Button } from 'react-scroll';


function Admin() {
 return (
  <div className='bg-[#ffffff]'>

<div className="flex-0.2">
        <img src={Logo2} alt='Logo Image' style={{ width:1800 ,height:150 }} />
      </div>

      <h1>Wellcom to Admins page</h1>
      </div>
 );
}
export default Admin;


import React, { useState } from 'react';
import Logo2 from '../assets/logo2.jpg';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
//import { useNavigation } from 'react-navigation/native';
 

// import { useTranslation } from "react-i18next";

// const users = [
//   {
//     username: 'admin',
//     password: 'admin123',
//     role: 'superadmin',
//     // features: ['dashboard', 'users', 'reports']
//   },
//   {
//       username: 'staff',
//       password: 'staff123',
//       role: 'staffmember',
//       // features: ['dashboard', 'users', 'reports']
//     },
  
// ];



const Login = () =>{
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const { t } = useTranslation(["common", "Login"]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:6000/api/v2/login', { email, password })
      .then(res => {
        console.log(res.data);
        
      })
      .catch(err => console.log(err));
  };

  
return(
  
        <div className='bg-[#f5f1f1]'>

     
<div className="flex-0.2">
        <img src={Logo2} alt='Logo Image' style={{ width:1800 ,height:150 }} />
      </div>
      
      <div className=" bg-[#c9e5f3] ">
     <p className=' font-extrabold text-center text-[30px] text-black'>{t("Login:welcome")}</p>
     
</div>
    

<div className=' bg-[#c9e5f3]  flex justify-center items-center p-[20px] h-screen'>
      <div className="  bg-[#b0d4ed] h-auto w-auto flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 rounded-xl">
        <div className="max-w-md w-auto space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{t("Login:login")}</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              </p>
          </div>
          
          
         <form  onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST" >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                {t("Login:email")}
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder= {t("Login:email")}
                />
              </div>
              </div>

              <div className="rounded-md shadow-sm -space-y-px">
            
              <div>
                <label htmlFor="password" className="sr-only">
                {t("Login:password")}
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                 
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={t("Login:password")}
                />
                
              </div>
              
            </div>
            

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                {t("Login:remember")}
                </label>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  <Link to="/password/forgot" ><p>{t("Login:forgot")}</p></Link>
                </a>
              </div>
            </div>    
            <div>
            {/* onClick={handleClick} */}
              <button type="submit" 
                
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                      {t("Login:log")}
               
                </button>
            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    {t("Login:noaccount")}{" "}
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                       <Link to="/Register">{t("Login:register")}</Link> 
                    </a>
                </p>
               

      
			
		{/* </nav> */}

            </form>
            </div>
            </div>
            
            </div>
            </div>
         
  );
}
export default Login;