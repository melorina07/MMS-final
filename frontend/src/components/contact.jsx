import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}


//ye heaman login lay yeneberew
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { t } = useTranslation(["common", "Login"]);

//   function handleUsernameChange(event) {
//     setUsername(event.target.value);
//     console.log(username);
//   }

//   function handlePasswordChange(event) {
//     setPassword(event.target.value);
//     console.log(password);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (users.length > 0) {
//     const user = users.find(user => user.username === username && user.password === password);
//     console.log(user);
//     if (user) {
//       console.log('Login successful');
//       switch (user.role) {
//          case 'superadmin':
//             navigate("/Admin");
//             break;       
//          case 'staffmember':
//             navigate("/Home2");
//             break;
         
//             default:
//           navigate('/');
          
//       }
//     } 
//       else {
//       alert('Incorrect username or password');
//       console.log('Login failed');

//     }
//   }
//   else {
//     alert('No users found');
//     console.log('No users found');
//   }
// }


//   // const handleClick = () => navigate('/Home2');

export default Contact