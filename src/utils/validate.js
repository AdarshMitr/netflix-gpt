
export const checkValidData=(email,password,username)=>{
const isEmailValid=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
const isNameValid=/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(username);
if(!isNameValid) return "Username is not valid";
if(!isEmailValid) return "Email Id is not valid";
if(!isPasswordValid) return "Password is not valid";
 return null;

}
