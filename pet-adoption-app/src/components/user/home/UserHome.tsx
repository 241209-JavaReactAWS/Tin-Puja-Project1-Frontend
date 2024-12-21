 import React, { useEffect } from 'react';

import "./userHome.css"
import Pets from './pets/Pets';
import Navbar from '../../navbar/Navbar';
import UserHomeContent from './UserHomeContent';

function UserHome (){
 
  return (
    <>
      <header className="headergroup">
        <h1 className="title">PET ADOPTION</h1>
          <img className="logo" src=""/>
          <p>M TOO CUTE FOR THIS..........ADOPT ME NOW!!!</p>
    </header>

    <Navbar/>

    <UserHomeContent/>

    <Pets/>

    <footer className="footer">
        About us 
        <p>We save pets so you can give them a Life</p>
        Contact us 
    </footer>
    </>
  )
}

export default UserHome

