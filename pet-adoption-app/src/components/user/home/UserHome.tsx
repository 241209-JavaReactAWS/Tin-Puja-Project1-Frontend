 import React, { useEffect } from 'react';

import "./userHome.css"
import Navbar from '../../navbar/Navbar';
import HomeContent from './content/HomeContent';
import UserHeader from './user_header/UserHeader';
import UserFooter from './user_footer/UserFooter';

function UserHome (){
 
  return (
    <>
      <UserHeader/>

    
    <Navbar/>

    <HomeContent/>

    <UserFooter/>

    
    </>
  )
}

export default UserHome

