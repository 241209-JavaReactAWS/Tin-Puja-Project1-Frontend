 import React, { useEffect } from 'react';

import "./userHome.css"
import Pets from './pets/Pets';
import Navbar from '../../navbar/Navbar';
import UserHomeContent from './UserHomeContent';

function UserHome (){
 
  return (
    <div className="root">
      <header className="styles.headergroup">
        <h1 className="styles.title">PET ADOPTION</h1>
          <img className="styles.logo" src=""/ >
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
    </ div>
  )
}

export default UserHome

