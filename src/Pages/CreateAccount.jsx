// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import Logo from "../assets/Fixitlogo.png";
// import { login, signUp } from "../api/data";
// // import Google from "../assets/googleIcon.png";
// import { FcGoogle } from "react-icons/fc";
// import { MdOutlineRemoveRedEye } from "react-icons/md";
// import { LuEyeClosed } from "react-icons/lu";
// import { ToastContainer, toast } from "react-toastify";
// import Reset from "./Reset";
// import { Link } from "react-router";
// import Cookies from "js-cookie";
// import { GoogleLogin } from "@react-oauth/google";
// // import { useGoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

// // import { TextField, IconButton, InputAdornment } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

// const CreateAccount = () => {
//   const [values, setValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     // address: '',
//     password: "",
//     confirmPassword: "",
//   });

//   const navigate = useNavigate();

//   const [errors, setErrors] = useState({});
//   const [isLogin, setIsLogin] = useState(true);
//   const [isVisible, setIsVisible] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!isLogin) {
//       if (!values.firstName.trim()) {
//         newErrors.firstName = "First name is required";
//       }
//       if (!values.lastName.trim()) {
//         newErrors.lastName = "Last name is required";
//       }
//       // if (!values.address.trim()) {
//       //   newErrors.address = 'Address is required';
//       // }
//       if (!values.confirmPassword.trim()) {
//         newErrors.confirmPassword = "Confirm Password is required";
//       } else if (values.confirmPassword !== values.password) {
//         newErrors.confirmPassword = "Passwords do not match";
//       }
//     }

//     if (!values.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!values.password.trim()) {
//       newErrors.password = "Password is required";
//     } else if (!isLogin && values.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     } else if (
//       !isLogin &&
//       !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(values.password)
//     ) {
//       newErrors.password =
//         "Password must include uppercase, lowercase, number, and special character";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       setLoading(true);
//       if (isLogin) {
//         // Login API call here
//         // console.log(FormData, values);
//         const { email, password } = values;
//         const newValues = { email, password };
//         console.log("Form submitted:", newValues);
//         login(newValues)
//           .then((response) => {
//             console.log("Login API response:", response.data);
//             Cookies.set("token", response.data.token, { expires: 3 });
//             toast.success(response.data.message);
//             setTimeout(() => {
//               navigate("/UserPage");
//             }, 3000);
//           })
//           .catch((error) => {
//             Cookies.set("email",)

//             console.log("Login API error:", error);
//           })
//           .finally(() => setLoading(false));
//         try {
//           // const response = await fetch('https://fixitbackend-7zrf.onrender.com/api/v1/user/login', {
//           //   method: 'POST',
//           //   headers: { 'Content-Type': 'application/json' },
//           //   body: JSON.stringify({
//           //     email: values.email,
//           //     password: values.password,
//           //   }),
//           // });
//           // const data = await response.json();
//           // console.log('Login API response:', data);
//         } catch (error) {
//           console.error("Login API error:", error);
//         }
//       } else {
//         // Signup API call here
//         console.log("Form submitted:", values);
//         signUp(values)
//           .then((response) => {
//             console.log("Signup API response:", response);
//             Cookies.set("response", response.data.token, { expires: 3 });
//             toast.success(response?.data?.message);
//             setTimeout(() => {
//               navigate("/Verify");
//             }, 3000);
//           })
//           .catch((error) => {
//             console.log("Signup API error:", error);
//             toast.error(
//               error.response?.data?.message || "An error occurred during signup"
//             );
//           })
//           .finally(() => setLoading(false));
//         // try {
//         //   const response = await fetch('https://fixitbackend-7zrf.onrender.com/api/v1/user/signup', {
//         //     method: 'POST',
//         //     headers: { 'Content-Type': 'application/json' },
//         //     body: JSON.stringify(values),
//         //   });
//         //   const data = await response.json();
//         //   console.log('Signup API response:', data);
//         // } catch (error) {
//         //   console.error('Signup API error:', error);
//         // }
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center bg-[#FCFCFC] w-full min-h-screen">
//       <ToastContainer />
//       <form onSubmit={handleSubmit} className="p-4 w-full max-w-[496px]">
//         <div className="">
//           <Link to={"/"}>
//             <img src={Logo} alt="Fixit Logo" />
//           </Link>
//         </div>

//         <div className="flex  mt-8 bg-[#fcfcfc]  border border-[#E6E5F9] rounded-l-[16px]">
//           <h2
//             className={`cursor-pointer hover:bg-[#A1EEAF] flex-1 h-[48px] flex justify-center items-center rounded-l-[16px] transition ${
//               !isLogin
//                 ? "bg-[#1A1A1A] text-white "
//                 : "bg-[#E6E5F9] text-[#4B4B4B]"
//             }`}
//             onClick={() => setIsLogin(false)}
//           >
//             Create an Account
//           </h2>
//           <h2
//             className={`cursor-pointer hover:bg-[#A1EEAF] flex-1 h-[48px]  flex justify-center items-center rounded-[16px] transition ${
//               isLogin
//                 ? "bg-[#1A1A1A] text-white"
//                 : "bg-[#E6E5F9] text-[#4B4B4B]"
//             }`}
//             onClick={() => setIsLogin(true)}
//           >
//             Log In
//           </h2>
//         </div>

//         {/* Sign up tab here */}

//         {!isLogin && (
//           <div className="mt-[29px] mb-[14px]">
//             <div>
//               <label htmlFor="firstName" className="font-poppins">
//                 First Name
//               </label>
//               <input
//                 onChange={handleChange}
//                 className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="Enter your first name"
//               />
//               {errors.firstName && (
//                 <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
//               )}
//             </div>

//             <div className="mt-[14px] ">
//               <label htmlFor="lastName" className="font-poppins mt-[14px]">
//                 Last Name
//               </label>
//               <input
//                 onChange={handleChange}
//                 className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Enter your last name"
//               />
//               {errors.lastName && (
//                 <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
//               )}
//             </div>

//             <div className="mt-[14px] ">
//               <label htmlFor="email" className="font-poppins mt-[14px]">
//                 Email
//               </label>
//               <input
//                 onChange={handleChange}
//                 className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email address"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>
//             <div className="mt-[14px] relative ">
//               <label htmlFor="password" className="font-poppins mt-[14px]">
//                 Password{" "}
//               </label>
//               <input
//                 onChange={handleChange}
//                 className="  w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
//                 type={visible ? "text" : "password"}
//                 id="password"
//                 name="password"
//                 placeholder="Enter Password"
//               />

//               <div className=" absolute top-1/2 right-3 mt-[14px]  -translate-y-1/2  cursor-pointer">
//                 {visible ? (
//                   <MdOutlineRemoveRedEye
//                     onClick={() => setVisible(false)}
//                     className="text-[#ABABAB] text-[24px]"
//                   />
//                 ) : (
//                   <LuEyeClosed
//                     onClick={() => setVisible(true)}
//                     className="text-[#ABABAB] text-[24px]"
//                   />
//                 )}
//               </div>
//             </div>
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//             )}

//             <div className="mt-[14px] relative">
//               <label
//                 htmlFor="confirmPassword"
//                 className="font-poppins mt-[14px]"
//               >
//                 Confirm Password{" "}
//               </label>
//               <input
//                 onChange={handleChange}
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 className="  w-full h-[48px] rounded-[16px] border pl-4 pr-[10px] mt-2 bg-white"
//                 type={isVisible ? "text" : "password"}
//                 placeholder="Confirm Enter Password"
//               />
//               <div className=" absolute top-1/2 right-3 mt-[14px]  -translate-y-1/2  cursor-pointer">
//                 {isVisible ? (
//                   <MdOutlineRemoveRedEye
//                     onClick={() => setIsVisible(false)}
//                     className="text-[#ABABAB] text-[24px]"
//                   />
//                 ) : (
//                   <LuEyeClosed
//                     onClick={() => setIsVisible(true)}
//                     className="text-[#ABABAB] text-[24px]"
//                   />
//                 )}
//               </div>
//             </div>
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.confirmPassword}
//               </p>
//             )}
//             <div>
//               <button
//                 type="submit"
//                 className="cursor-pointer w-full h-[56px] bg-[#15803D] rounded-[16px] text-white mt-6 hover:bg-green-700 transition"
//                 disabled={loading}
//               >
//                 {loading ? "Loading..." : "Create Account"}
//               </button>
//             </div>
//             <div className=" mt-[24px] ">
//               <p className="font-poppins mt-6 text-[#4B4B4B] font-poppins font-[500] text-[12px] sm:text[14px] leading-[24px]  ">
//                 By signing up, you agree to Fixitnaija’s
//                 <span className="text-[#15803D] pl-[2px] underline cursor-pointer">
//                   terms of service
//                 </span>
//               </p>
//             </div>
//             <div className="flex justify-between sm:justify-around items-center mt-[24px]">
//               <hr className="w-[98px] border border-[#D1D5DB] " />
//               <div className="flex justify-center ">Or Continue with</div>
//               <hr className=" w-[98px] border border-[#D1D5DB] " />
//             </div>
//             <div className="cursor-pointer flex justify-center items-center align-middle w-full h-[48px] bg-[#DDDDDD] rounded-[16px] text-white mt-6">
//               <FcGoogle className="h-[32px] w-[32px] "
//                 onSuccess={(credentialResponse) => {
//                   if (credentialResponse.credential) {
//     // Decode the JWT token to get user information
//     const user = jwtDecode(credentialResponse.credential);
//                    // handle the response, e.g., send token to your backend
//     console.log("Decoded user info",user);}}
//                   }
//                   onError={(error) => {
//                   console.error("Login Failed:", error);}}

//               />

//               </div>
//               {/* // Google Login component  */}
//               <GoogleLogin
//                 onSuccess={(credentialResponse) => {
//                   if (credentialResponse.credential) {
//                     try{
//                       const res = await axios.post('                      await axios.post('https://your-backend.com/api/auth/google', { token: credentialResponse.credential });520912190280-qrqi24j6n2mql9et0h5usdgt40370alg.apps.googleusercontent.com'), {
//                       token: credentialResponse.credential,
//         });
//   // Save token/user info as needed
//         Cookies.set("token", res.data.token, { expires: 3 });
//         toast.success("Login successful!");
//         navigate("/UserPage");
//       } catch (err) {
//         toast.error("Google login failed");
//         console.error(err);
//       }
//     }
//   }
//   onError={(error) => {
//     console.error("Login Failed:", error);
//     toast.error("Google login failed");

//     // Decode the JWT token to get user information
//     const user = jwtDecode(credentialResponse.credential);
//                    // handle the response, e.g., send token to your backend
//     console.log("Decoded user info",user);}}
//                   }
//                   onError={(error) => {
//                   console.error("Login Failed:", error);}}
//                   />
//           </div>
//         )}

//         {/* Login tab here */}
//         {isLogin && (
//           <div className="min-h-[400px]">
//             <div className="mt-[14px] ">
//               <label htmlFor=" lastName" className="font-poppins mt-[14px]">
//                 Email
//               </label>
//               <input
//                 onChange={handleChange}
//                 className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email address"
//               />
//             </div>
//             <div className="mt-[14px] ">
//               <label htmlFor=" lastName" className="font-poppins mt-[14px]">
//                 Password{" "}
//               </label>
//               <div className="relative w-full h-[48px] rounded-[16px] border border-[#DDDDDD] overflow-hidden mt-2">
//                 <input
//                   // className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
//                   className="w-full h-full bg-white p-4 outline-none"
//                   onChange={handleChange}
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   name="password"
//                   placeholder="Enter Password"
//                 />
//                 <div className="absolute  top-1/2 -translate-y-1/2 right-[12px] cursor-pointer">
//                   {showPassword ? (
//                     <MdOutlineRemoveRedEye
//                       onClick={() => setShowPassword(false)}
//                       className="text-[#ABABAB] text-[24px]"
//                     />
//                   ) : (
//                     <LuEyeClosed
//                       onClick={() => setShowPassword(true)}
//                       className="text-[#ABABAB] text-[24px]"
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full h-[56px]  bg-[#15803D] rounded-[16px] text-white mt-6 hover:bg-green-700 transition cursor-pointer"
//                 disabled={loading}
//               >
//                 {loading ? "Loading..." : "Log In"}
//               </button>
//             </div>
//             <div className=" flex justify-end cursor-pointer ">
//               <Link to="/Reset" className="flex  text-[#15803D]">
//                 Forgot Password?
//               </Link>
//             </div>
//             <div className="flex justify-around items-center mt-[24px]">
//               <hr className="w-[98px] border border-[#D1D5DB] " />
//               <div className="sm:w-[201px] sm:h-[34px] w-[134px] h-[20px] ">
//                 Or Continue with
//               </div>
//               <hr className=" w-[98px] border border-[#D1D5DB] " />
//             </div>
//             {/* <div className=" flex justify-center items-center align-middle w-full h-[48px] bg-[#DDDDDD] rounded-[16px] text-white mt-6 cursor-pointer">
//             <FcGoogle className="h-[32px] w-[32px] " />
//             </div> */}

//             <div className="flex justify-center w-full mt-4 cursor-pointer">
//               <GoogleLogin
//                 onSuccess={async (credentialResponse) => {
//                   console.log("Credential Response:", credentialResponse);
//                   if (credentialResponse.credential) {
//                     try {
//                       const res = await axios.post(
//                         "https://fixitbackend-7zrf.onrender.com/api/auth/google", // <-- Replace with your backend endpoint
//                         { token: credentialResponse.credential }
//                       );
//                       Cookies.set("token", res.data.token, { expires: 3 });
//                       toast.success("Login successful!");
//                       navigate("/UserPage");
//                     } catch (error) {
//                       toast.error("Google login failed");
//                       console.error(error);
//                     }
//                   }
//                 }}
//                 onError={() => {
//                   toast.error("Google login failed");
//                 }}
//               />
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default CreateAccount;

import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../assets/Fixitlogo.png";
import { login, signUp } from "../api/data";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router";
import Cookies from "js-cookie";
import { GoogleLogin } from "@react-oauth/google";
import { baseInstance } from "../api/base";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

const CreateAccount = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!isLogin) {
      if (!values.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }
      if (!values.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }
      if (!values.confirmPassword.trim()) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (values.confirmPassword !== values.password) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!values.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!isLogin && values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !isLogin &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(values.password)
    ) {
      newErrors.password =
        "Password must include uppercase, lowercase, number, and special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      if (isLogin) {
        const { email, password } = values;
        const newValues = { email, password };
        login(newValues)
          .then((response) => {
            Cookies.set("token", response.data.token, { expires: 3 });
            toast.success(response.data.message);
            setTimeout(() => {
              navigate("/UserPage");
            }, 3000);
          })
          .catch((error) => {
            toast.error(
              error.response?.data?.message || "An error occurred during login"
            );
          })
          .finally(() => setLoading(false));
      } else {
        signUp(values)
          .then((response) => {
            Cookies.set("email", response.data.email, { expires: 1 });
            toast.success(response?.data?.message);
            // console.log("Signup API response:", response);
            setTimeout(() => {
              navigate(`/OtpVerify`);
            }, 3000);
          })
          .catch((error) => {
            toast.error(
              error.response?.data?.message || "An error occurred during signup"
            );
          })
          .finally(() => setLoading(false));
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#FCFCFC] w-full min-h-screen">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="p-4 w-full max-w-[496px]">
        <div className="">
          <Link to={"/"}>
            <img src={Logo} alt="Fixit Logo" />
          </Link>
        </div>

        <div className="flex  mt-8 bg-[#fcfcfc]  border border-[#E6E5F9] rounded-l-[16px]">
          <h2
            className={`cursor-pointer hover:bg-[#A1EEAF] flex-1 h-[48px] flex justify-center items-center rounded-l-[16px] transition ${
              !isLogin
                ? "bg-[#1A1A1A] text-white "
                : "bg-[#E6E5F9] text-[#4B4B4B]"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Create an Account
          </h2>
          <h2
            className={`cursor-pointer hover:bg-[#A1EEAF] flex-1 h-[48px]  flex justify-center items-center rounded-[16px] transition ${
              isLogin
                ? "bg-[#1A1A1A] text-white"
                : "bg-[#E6E5F9] text-[#4B4B4B]"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </h2>
        </div>

        {/* Sign up tab here */}

        {!isLogin && (
          <div className="mt-[29px] mb-[14px]">
            <div>
              <label htmlFor="firstName" className="font-poppins">
                First Name
              </label>
              <input
                onChange={handleChange}
                className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div className="mt-[14px] ">
              <label htmlFor="lastName" className="font-poppins mt-[14px]">
                Last Name
              </label>
              <input
                onChange={handleChange}
                className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            <div className="mt-[14px] ">
              <label htmlFor="email" className="font-poppins mt-[14px]">
                Email
              </label>
              <input
                onChange={handleChange}
                className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mt-[14px] relative ">
              <label htmlFor="password" className="font-poppins mt-[14px]">
                Password{" "}
              </label>
              <input
                onChange={handleChange}
                className="  w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                type={visible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter Password"
              />

              <div className=" absolute top-1/2 right-3 mt-[14px]  -translate-y-1/2  cursor-pointer">
                {visible ? (
                  <MdOutlineRemoveRedEye
                    onClick={() => setVisible(false)}
                    className="text-[#ABABAB] text-[24px]"
                  />
                ) : (
                  <LuEyeClosed
                    onClick={() => setVisible(true)}
                    className="text-[#ABABAB] text-[24px]"
                  />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

            <div className="mt-[14px] relative">
              <label
                htmlFor="confirmPassword"
                className="font-poppins mt-[14px]"
              >
                Confirm Password{" "}
              </label>
              <input
                onChange={handleChange}
                id="confirmPassword"
                name="confirmPassword"
                className="  w-full h-[48px] rounded-[16px] border pl-4 pr-[10px] mt-2 bg-white"
                type={isVisible ? "text" : "password"}
                placeholder="Confirm Enter Password"
              />
              <div className=" absolute top-1/2 right-3 mt-[14px]  -translate-y-1/2  cursor-pointer">
                {isVisible ? (
                  <MdOutlineRemoveRedEye
                    onClick={() => setIsVisible(false)}
                    className="text-[#ABABAB] text-[24px]"
                  />
                ) : (
                  <LuEyeClosed
                    onClick={() => setIsVisible(true)}
                    className="text-[#ABABAB] text-[24px]"
                  />
                )}
              </div>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
            <div>
              <button
                type="submit"
                className="cursor-pointer w-full h-[56px] bg-[#15803D] rounded-[8px] text-white mt-6 hover:bg-green-700 transition"
                disabled={loading}
              >
                {loading ? "Loading..." : "Create Account"}
              </button>
            </div>
            <div className=" mt-[24px] ">
              <p className="font-poppins mt-6 text-[#4B4B4B] font-poppins font-[500] text-[12px] sm:text[14px] leading-[24px]  ">
                By signing up, you agree to Fixitnaija’s
                <span className="text-[#15803D] pl-[2px] underline cursor-pointer">
                  terms of service
                </span>
              </p>
            </div>
            <div className="flex justify-between sm:justify-around items-center mt-[24px]">
              <hr className="w-[98px] border border-[#D1D5DB] " />
              <div className="flex justify-center ">Or Continue with</div>
              <hr className=" w-[98px] border border-[#D1D5DB] " />
            </div>
            {/* Only show the icon for display, not for login
            <div className="cursor-pointer flex justify-center items-center align-middle w-full h-[48px] bg-[#DDDDDD] rounded-[16px] text-white mt-6">
              <FcGoogle className="h-[32px] w-[32px] " />
            </div> */}
            {/* Google Login component */}
            <div className="flex justify-center mt-4">
              <GoogleLogin
                className=" h-[32px] w-[32px] "
                onSuccess={async (credentialResponse) => {
                  if (credentialResponse.credential) {
                    try {
                      // Send credential to your backend for verification
                      const res = await baseInstance.get("/auth/google", {
                        params: { token: credentialResponse.credential },
                      });
                      Cookies.set("token", res.data.token, { expires: 3 });
                      toast.success("Login successful!");
                      navigate("/UserPage");
                    } catch (err) {
                      toast.error("Google login failed");
                      console.error(err);
                    }
                  }
                }}
                onError={() => {
                  toast.error("Google login failed");
                }}
              />
            </div>
          </div>
        )}

        {/* Login tab here */}
        {isLogin && (
          <div className="min-h-[400px]">
            <div className="mt-[14px] ">
              <label htmlFor=" lastName" className="font-poppins mt-[14px]">
                Email
              </label>
              <input
                onChange={handleChange}
                className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mt-[14px] ">
              <label htmlFor=" lastName" className="font-poppins mt-[14px]">
                Password{" "}
              </label>
              <div className="relative w-full h-[48px] rounded-[16px] border border-[#DDDDDD] overflow-hidden mt-2">
                <input
                  className="w-full h-full bg-white p-4 outline-none"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                />
                <div className="absolute  top-1/2 -translate-y-1/2 right-[12px] cursor-pointer">
                  {showPassword ? (
                    <MdOutlineRemoveRedEye
                      onClick={() => setShowPassword(false)}
                      className="text-[#ABABAB] text-[24px]"
                    />
                  ) : (
                    <LuEyeClosed
                      onClick={() => setShowPassword(true)}
                      className="text-[#ABABAB] text-[24px]"
                    />
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full h-[56px]  bg-[#15803D] rounded-[16px] text-white mt-6 hover:bg-green-700 transition cursor-pointer"
                disabled={loading}
              >
                {loading ? "Loading..." : "Log In"}
              </button>
            </div>
            <div className=" flex justify-end cursor-pointer ">
              <Link to="/Reset" className="flex  text-[#15803D]">
                Forgot Password?
              </Link>
            </div>
            <div className="flex justify-around items-center mt-[24px]">
              <hr className="w-[67px] sm:w-[98px] border border-[#D1D5DB] " />
              <div className=" ">Or Continue with</div>
              <hr className=" w-[67px] sm:w-[98px] border border-[#D1D5DB] " />
            </div>
            {/* <div className=" flex justify-center items-center align-middle w-full h-[48px] bg-[#DDDDDD] rounded-[16px] text-white mt-6 cursor-pointer">
            <FcGoogle className="h-[32px] w-[32px] " />
            </div> */}

            <div className=" w-full mt-4 cursor-pointer">
              <GoogleLogin
                className="h-[32px] w-full rounded-[16px]"
                onSuccess={async (credentialResponse) => {
                  console.log("Credential Response:", credentialResponse);
                  if (credentialResponse.credential) {
                    try {
                      const res = await baseInstance.get("/auth/google", {
                        token: credentialResponse.credential,
                      });
                      Cookies.set("token", res.data.token, { expires: 3 });
                      toast.success("Login successful!");
                      navigate("/UserPage");
                    } catch (error) {
                      toast.error("Google login failed");
                      console.error(error);
                    }
                  }
                }}
                onError={() => {
                  toast.error("Google login failed");
                }}
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateAccount;
