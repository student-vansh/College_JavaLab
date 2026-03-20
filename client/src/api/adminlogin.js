import api from "./springapi";
const adminLogin = (email,pass) =>{
     const response = api.post("/admin/login",{
       email,
       pass
     })
     return response.data;
}
export default adminLogin;