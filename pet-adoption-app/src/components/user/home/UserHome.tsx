 import React from 'react';

import "./userHome.css"
import { useState } from 'react';   
import PetService from '../../../userService/PetService'    

function UserHome (){

// let petService:PetService = new PetService();

// const [allPets, setAllPets]= useState < any[]>([]); 

// async function fetchAllPets() {
//   await petService.getAllPets().then(response =>{
//     const result =response.data;
  
//   setAllPets(result)
// }).catch(err=>console.log(err));
// }
 
  return (
    <div className="root">
      <header className="styles.headergroup">
        <h1 className="styles.title">PET ADOPTION</h1>
          <img className="styles.logo" src=""/ >
          <p>M TOO CUTE FOR THIS..........ADOPT ME NOW!!!</p>
    </header>
    <nav className="navClass"><a className="navLink" href="http://"> About Us</a>
        <a className="navLink" href="/login"> Login</a>
        <a className="navLink" href="http://"> Signup</a> 
        <a className="navLink" href="http://"> Pets</a>
        <a className="navLink" href="http://"> Filter</a>
        </nav>
        <section className="midsectiongroup">
        <h2 className="midsection"> Adopt a Life and save a Life</h2>
        <p className="midsection">Adopting these pets will bring happiness and joy in your Life. Easy Adoption process.</p>
    </section>
    <section className="buttongroup">
        <button className="button">Adopt Now</button>
    </section>
    <section className="tablegroup">
        <table className="table">
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Picture</th>
                    <th>Breed</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Condition</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td><img className="photos" src="/photos/golden.jpg" alt="Golden Retriever"/></td>
                    <td>Golden Retriever</td>
                    <td>Buddy</td>
                    <td>3</td>
                    <td>Good</td>
                    <td>F</td>

                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td><img className="photos" src="/photos/persian-cat-.webp" alt="Persian Cat" /></td>
                    <td>Persian Cat</td>
                    <td>Whiskers</td>
                    <td>2</td>
                    <td>Good</td>
                    <td>M</td>

                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td><img className="photos" src="/photos/maccao.webp" alt="Parrot" /></td>
                    <td>Parrot</td>
                    <td>Polly</td>
                    <td>1</td>
                    <td>Good</td>
                    <td>M</td>

                </tr>
            </tbody>
        </table>
    </section>
    
    <footer className="footer">
        About us 
        <p>We save pets so you can give them a Life</p>
        Contact us 
    </footer>
    </ div>
  )
}

export default UserHome

