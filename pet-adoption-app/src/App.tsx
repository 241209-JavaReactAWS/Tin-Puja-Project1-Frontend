import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/admin/header/AdminHeader'
import UserHome from './components/user/home/UserHome'
import AdminHome from './components/admin/home/AdminHome'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome></UserHome>}></Route>
          <Route path="/admin" element={<AdminHome></AdminHome>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
