// import React from 'react'
// import Logo from '../assets/Fixit-logo.png'
// import { useState } from 'react'


// const CreateAccount = () => {
// const [values, setValues]= useState({
//   firstname:'',
//   lastname: '',
//   email:'',
//   address:'',
//   password:'',
//   confirmPassword:'',
// })
// const [errors, setErrors] = useState({});
// const handleChange = (e) =>{
//   console.log(e)***//this line wasnt included
//   setValues({...values, [e.target.name]:e.target.value});
// };
// const validate = () => {
//   const newErrors = {};

//   if(!values.firstname.trim()){
//     newErrors.firstname = 'First name is required'
//   }
//   if(!values.lastname.trim()){
//     newErrors.lastname = 'Last name is required'
//   }
//   if(!values.email.trim()){
//     newErrors.email = ' Email is required';
//   }
//   else if(!/\S+@\S+\.S+/.test(values.email)){
  //       newErrors.email = 'invalid email format';
//}

//   if(!values.address.trim()){
//     newErrors.address = 'Address is required'
//   }

//   if(!values.password.trim()){
//     newErrors.password = ' Password is required'
  
//   }
//   else if(values.password.length<8) 
//     newErrors= 'Password must be at least 8 characters';
//   else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(values.password)){
  
//   if(!values.confirmPassword.trim()){
  //     newErrors.confirmPassword = ' Password is required'
//} else if (values.confirmPassword !== values.password) {
//      newErrors.confirmPassword = 'Passwords do not match';

//   }
//  setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log('Form submitted:', values);
      // submit logic here
//     }
//   };
// }


//   return (

//     <div className=' flex flex-col justify-center items-center bg-[#FCFCFC] w-[1240px] '>
//         <form  className= ''>
//         <div>
//           <img src={Logo} alt="" srcset="" />
//         </div>
//           <div className='flex  gap-[44px] mt-[32px] '>
//             <h2 className='bg-[#1A1A1A] w-[227px] h-[48px] flex justify-center py-[10px] align-center text-white rounded-[16px] '> Create an Account </h2>
//             <h2 className='bg-[#E6E5F9] w-[227px] h-[48px] flex justify-center py-[10px] align-center text-[#4B4B4B] rounded-[16px]' > Log In</h2>
//           </div>
//             <div className='flex flex-col justify-center  mt-[28px]'>
//             <label className='mt-[14px] font-poppins' htmlFor="firstName ">First Name</label>
//             <input
//              onChange={handleChange}  className='w-[496px] h-[48px] rounded-[16px] border pl-[14px] mt-[14px] bg-[#FCFCFC]  ' type='text' id='firstName' name='firstName' placeholder='Enter your first name' required />
//             </div>
           
//             <div className='flex flex-col justify-center mt-[14px]'>
//             <label className='mt-[14px] font-poppins' htmlFor="lastName ">Last Name (Surname)</label>
//             <input  onChange={handleChange} className='w-[496px] h-[48px] rounded-[16px] border pl-[14px] mt-[14px] bg-[#FCFCFC]  ' type='text' id='lastName' name='lastName' placeholder='Enter your last Name' required />
//             </div>
//             <div className='flex flex-col justify-center mt-[14px]'>
//             <label className='mt-[14px] font-poppins' htmlFor="Confirm Password "> Address</label>
//             <input  onChange={handleChange}  className='w-[496px] h-[48px] rounded-[16px] border pl-[14px] mt-[14px] bg-[Neutral/neutral black 100]  ' type='text' id=' address' name='address' placeholder='address' required />
//             </div>
//             <div className='flex flex-col justify-center mt-[14px] '>
//             <label className='mt-[14px] font-poppins' htmlFor="Email"> Email</label>
//             <input  onChange={handleChange}   className='w-[496px] h-[48px] rounded-[16px] border pl-[14px] mt-[14px]   ' type='email' id='Email' name='email' placeholder='Enter your email address' required />
//             </div>
//             <div className='flex flex-col justify-center mt-[14px]'>
//             <label className='mt-[14px] font-poppins' htmlFor="Password "> Enter Password</label>
//             <input  onChange={handleChange}  className='w-[496px] h-[48px] rounded-[16px] border pl-[14px] mt-[14px] bg-[Neutral/neutral black 100]  ' type='password' id='Password' name='password' placeholder='Enter password' required />
//             </div>
//             <div className='flex flex-col justify-center mt-[14px]'>
//             <label className='mt-[14px] font-poppins' htmlFor="Confirm Password "> Confirm  Password</label>
//             <input  onChange={handleChange}  className='w-[496px] h-[48px] rounded-[16px] border pl-[14px] mt-[14px] bg-[Neutral/neutral black 100]  ' type='passwword' id=' Confirm Password' name=' confirmPassword' placeholder='Confirm password' required />
//             </div>
           
//             <div>

//             <p className='font-poppins mt-[32px]'>
//               By signing up you agree to Fixitnaija <span className='text-[#15803D]'>terms of service </span>
//             </p>
//             </div>
//             <button className='w-full h-[56px] bg-[#15803D] rounded-[16px] text-white mt-[32px]'> Create Account </button>
//         </form>
//     </div>
//   )
// }

// export default CreateAccount



import React, { useState } from 'react';
import Logo from '../assets/Fixit-logo.png';

const CreateAccount = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!values.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!values.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!values.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!values.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (values.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(values.password)) {
      newErrors.password = 'Password must include uppercase, lowercase, number, and special character';
    }

    if (!values.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword !== values.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', values);
      // submit logic here
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#FCFCFC] w-[1240px]">
      <form onSubmit={handleSubmit} className="p-4 w-full max-w-[500px]">
        <div className="">
          <img src={Logo} alt="Fixit Logo" />
        </div>

        <div className="flex gap-4 mt-8">
          <h2 className=" cursor-pointer  bg-[#1A1A1A] flex-1 h-[48px] flex justify-center items-center text-white rounded-[16px]">
            Create an Account
          </h2>
          <h2 className="bg-[#E6E5F9] flex-1 h-[48px] flex justify-center items-center text-[#4B4B4B] rounded-[16px]">
            Log In
          </h2>
        </div>

        {/* First Name */}
        <div className="mt-4">
          <label htmlFor="firstName" className="font-poppins">First Name</label>
          <input
            onChange={handleChange}
            className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div className="mt-4">
          <label htmlFor="lastName" className="font-poppins">Last Name (Surname)</label>
          <input
            onChange={handleChange}
            className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>

        {/* Address */}
        <div className="mt-4">
          <label htmlFor="address" className="font-poppins">Address</label>
          <input
            onChange={handleChange}
            className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        {/* Email */}
        <div className="mt-4">
          <label htmlFor="email" className="font-poppins">Email</label>
          <input
            onChange={handleChange}
            className="w-full h-[48px] rounded-[16px] border pl-4 mt-2"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mt-4">
          <label htmlFor="password" className="font-poppins">Enter Password</label>
          <input
            onChange={handleChange}
            className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mt-4">
          <label htmlFor="confirmPassword" className="font-poppins">Confirm Password</label>
          <input
            onChange={handleChange}
            className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        <p className="font-poppins mt-6 text-sm">
          By signing up, you agree to Fixitnaija’s{' '}
          <span className="text-[#15803D] underline cursor-pointer">terms of service</span>
        </p>

        <button
          type="submit"
          className="w-full h-[56px] bg-[#15803D] rounded-[16px] text-white mt-6 hover:bg-green-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
