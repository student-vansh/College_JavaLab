import { useState } from "react";
import adminLogin from "../../api/adminlogin";
import {useNavigate} from "react-router-dom";

const AdminLoginPage = () => {
  const nav = useNavigate()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handlelogin = () =>{
   const res = adminLogin(email,pass)
   console.log(res);
   
   if(res == "Login Success"){
      console.log("sucess");
      nav("/admin_dashboard")
   }
   else{
    console.log("error");
    nav("/jhdygduy")
    
   }
  }

  // cntrl + shift+O  to import a file in java
  return (
    <div>
      <form action="" onSubmit={handlelogin}>
        <input
          type="email"
          name="adminEmail"
          id=""
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="adminPass"
          id=""
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <button type="submit">Login Now</button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
