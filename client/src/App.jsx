import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminLoginPage from "./pages/admin/AdminLoginPage"
import AdminDashBoard from "./pages/admin/AdminDashBoard"
import FourOFour from "./pages/FourOFour"


function App() {

  return (
   <>
   {/* <AdminLoginPage></AdminLoginPage> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={AdminLoginPage}></Route>
      <Route path="/admin_dashboard" Component={AdminDashBoard}></Route>
      <Route path="/*" Component={FourOFour}></Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
