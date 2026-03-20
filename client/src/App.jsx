import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminLoginPage from "./pages/admin/AdminLoginPage"
import AdminDashBoard from "./pages/admin/AdminDashBoard"


function App() {

  return (
   <>
   {/* <AdminLoginPage></AdminLoginPage> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={AdminLoginPage}></Route>
      <Route path="/admin_dashboard" Component={AdminDashBoard}></Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
