import { useState } from "react";
import adminLogin from "../../api/adminlogin";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handlelogin = () =>{
   const res = adminLogin(email,pass)
   if(res == "Login Sucess"){
      console.log("sucess");
      
   }
   else{
    console.log("error");
    
   }
  }
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
