 import React, { useEffect } from 'react';

import "./userHome.css"
import { useState } from 'react';   
import axios from "axios";
import {Link } from 'react-router-dom';

// import PetService from '../../../userService/PetService'    

function UserHome (){

// let petService:PetService = new PetService();

    const [allPets, setAllPets] = useState<any[]>([]);

    // async function getAllPets(){
    //     await axios.get('http:/localhost:8080/pet/fetchAll').then(res => {
    //         console.log(res.data)
    //         setAllPets(res.data)
    //     }).catch(err => {
    //         // Error Handling here
    //         console.log(err)
    //         // return res.status(401).send(err.message);
    //         // https://www.geeksforgeeks.org/getting-error-handler-data-from-post-request-in-axios/
    //     })
    // }

    useEffect(() => {

        axios.get<any[]>("http://localhost:8080/fetchAll")
        .then((res) => {
            setAllPets(res.data)
        })
    }, [])

    // async function getAllPets(){
    //     try {
    //         const response = await axios.get('http:/localhost:8080/pet/fetchAll');
    //         setAllPets(response.data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    // }
    


    // useEffect(() => {
    //     getAllPets()
    // }, [])


 
  return (
    <>
      <header className="headergroup">
        <h1 className="title">PET ADOPTION</h1>
          <img className="logo" src=""/>
          <p>M TOO CUTE FOR THIS..........ADOPT ME NOW!!!</p>
    </header>
    <nav className="navClass">
        <Link className="navLink" to="/about"> About Us</Link>
        <Link className="navLink" to="/login"> Login</Link>
        <Link className="navLink" to="/signup"> Sign Up</Link>
        <Link className="navLink" to="/pets"> Pets</Link>
        </nav>
        <section className="midsectiongroup">
        <h2 className="midsection"> Adopt a Life and save a Life</h2>
        <p className="midsection">Adopting these pets will bring happiness and joy in your Life. Easy Adoption process.</p>
    </section>
    <section className="buttongroup">
        <button className="button">Adopt Now</button>
    </section>

{allPets}
    {/* <div>
      {allPets.map((item) => (
        <p key={item.petId}>{item.name}</p>
      ))}
    </div> */}


    {/* <div>
        <h1>Fetching all pets stuff -- temp</h1>

        
        {
            allPets.map( (pet) => {
                return (
                    <div key={pet.petId}>
                       <p>{pet.name}</p>
                    </div>
                )
            }

            )
        }
        
    </div> */}

    {/* <div>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div> */}


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
    </>
  )
}

export default UserHome

