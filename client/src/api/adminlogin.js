import api from "./springapi";
const adminLogin = (email,pass) =>{
     const response = api.post("/user/login/1",{
       email,
       pass
     })
     console.log(response);
     
     return response.data;
}
export default adminLogin;