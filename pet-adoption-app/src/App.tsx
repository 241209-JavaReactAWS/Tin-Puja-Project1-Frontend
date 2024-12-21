import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/admin/header/AdminHeader'
import UserHome from './components/user/home/UserHome'
import AdminHome from './components/admin/home/AdminHome'
import Login from './components/user/home/Login'
import AboutUs from './components/user/home/AboutUs'
import SignUp from './components/user/home/SignUp'
import Pets from './components/user/home/Pets'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome></UserHome>}></Route>
          <Route path="/admin" element={<AdminHome></AdminHome>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/pet" element={<Pets/>}></Route>

          {/* <Route>path="/about" element={<AboutUs/>}</Route>
          <Route>path="/signup" element={<SignUp/>}</Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
