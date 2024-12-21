import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/admin/header/AdminHeader'
import UserHome from './components/user/home/UserHome'
import AdminHome from './components/admin/active/AdminActive'
import AdminActive from './components/admin/active/AdminActive'
import AdminArchive from './components/admin/archive/AdminArchive'
import Login from './components/user/login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome></UserHome>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/admin/active" element={<AdminActive></AdminActive>}></Route>
          <Route path="/admin/archive" element={<AdminArchive></AdminArchive>}></Route>
          <Route path="/admin/adopted" element={<AdminActive></AdminActive>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
