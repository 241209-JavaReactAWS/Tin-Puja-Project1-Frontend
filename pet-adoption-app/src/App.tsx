import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/admin/header/AdminHeader'
import UserHome from './components/user/home/UserHome'
// import AdminHome from './components/admin/home/AdminHome'
import AboutUs from './components/user/home/about_me/AboutUs'
import SignUp from './components/user/home/signup/SignUp'
import Pets from './components/user/home/pets/Pets'
import AdminActive from './components/admin/active/AdminActive'
import AdminArchive from './components/admin/archive/AdminArchive'
import Login from './components/user/login/Login'
import ContactUs from './components/user/home/contact/ContactUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome></UserHome>}></Route>
          {/* <Route path="/admin" element={<AdminHome></AdminHome>}></Route> */}
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/pet" element={<Pets/>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/admin/active" element={<AdminActive></AdminActive>}></Route>
          <Route path="/admin/archive" element={<AdminArchive></AdminArchive>}></Route>
          <Route path="/admin/adopted" element={<AdminActive></AdminActive>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
