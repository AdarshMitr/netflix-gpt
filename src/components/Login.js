import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=>{
    // Validation form data
    //checkValidData(email,password)
    console.log(email.current.value);
    console.log(password.current.value);
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className=" w-4/12 p-16 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Your Full Name"
            className="p-3 my-4 w-full bg-[#333] rounded-lg"
          />
        )}

        <input
        ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-3 my-4 w-full bg-[#333] rounded-lg"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-[#333] rounded-lg"
        />
        <button className="p-4 my-6 bg-red-600 w-full font-bold rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
