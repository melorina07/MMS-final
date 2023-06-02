import React,{ useState }  from 'react';
import Logo from '../assets/logo.jpg';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
//import { useHistory } from 'react-router-dom';


import { useTranslation } from "react-i18next";

const Register = () =>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('api/v2/registration', { name,email, password ,department})
    .then(res => {
      console.log(res.data);
      navigate("/Login");
    })
      .catch(err => console.log(err));
  };

  // const navigate = useNavigate();
  // const handleClick = () => navigate(-1);

  // const navigation = useNavigate()
  // const toLogin=()=>{
  //   alert(navigation);
  // setTimeout(()=>{
  //   navigate('/Login')
  // },400)

  // }
  const { t } = useTranslation(["common", "Login"]);
    return(
        <div className='bg-[#f5f1f1]'>

     
        <div>
           <img src={Logo} alt='Logo Image' style={{ width: '2000px' ,height:'198px' }} />
         </div>

         <div className=" bg-[#c9e5f3] ">
     <p className=' font-extrabold text-center text-[30px] text-black'>{t("Login:welcome")}</p>
     
</div>
<div className=' bg-[#c9e5f3]  flex justify-center items-center p-[50px] h-screen  scrollbar-width: none  '>
      <div className="  bg-[#b0d4ed]  h-[460px] w-[500px] flex items-center justify-center py-60 sm:px-99 lg:px-20 rounded-xl">
        <div className="w-[400px] space-y-9">
          <div>
            <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-900">{t("Login:register")}</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              </p>
          </div>
          
          
         <form  onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="sr-only text-gray-800"
                        >
                            {t("Login:first")}
                        </label>
                        <input
                        name="name"
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            
                    className="appearance-none rounded-none relative block
                    w-full px-3 py-2 border border-gray-300
                    placeholder-gray-500 text-gray-900 rounded-t-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                
                    placeholder={t("Login:first")}
                        />
                    </div>
                    
              </div>
              
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
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
              <label
                            htmlFor="department"
                            className="sr-only text-gray-800"
                        >
                            {t("Login:last")}
                        </label>
                        <input
                            name="department"
                            type="department"
                            value={department} onChange={(e) => setDepartment(e.target.value)}
                            
                    className="appearance-none rounded-none relative block
                    w-full px-3 py-2 border border-gray-300
                    placeholder-gray-500 text-gray-900 rounded-t-md
                    focus:outline-none focus:ring-indigo-500
                    focus:border-indigo-500 focus:z-10 sm:text-sm"
                
                    placeholder={t("Login:last")}
                        /></div>
              </div>


            <div>
              <button type="button" onClick={handleClick}
// type="submit" 
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                        {t("Login:register")}
             {/* <Link  onClick={()=>{navigation.navigate(" Login")}}
               >  Register</Link>  */}
              </button>
            </div>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
                    
                    {t("Login:already")}&nbsp;&nbsp;
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                       <Link to="/Login">{t("Login:login")}</Link> 
                    </a>
                </p>
            </form>
            </div>
            </div>
            </div>
            </div>
          
  );
}
export default Register;