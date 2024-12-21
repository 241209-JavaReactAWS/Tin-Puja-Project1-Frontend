import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UserHomeContent() {

    const [allPets, setAllPets] = useState<any[]>([]);

    useEffect(() => {

        axios.get("http://localhost:8080/fetchAll")
        // axios.get<any[]>("http://localhost:8080/fetchAll")
        .then((res) => {
            setAllPets(res.data)
        })
    }, [])

  return (
    <>
    <section className="midsectiongroup">
        <h2 className="midsection"> Adopt a Life and save a Life</h2>
        <p className="midsection">Adopting these pets will bring happiness and joy in your Life. Easy Adoption process.</p>

    {allPets}
    </section>
    <section className="buttongroup">
        <button className="button">Adopt Now</button>
    </section>

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
    </>
  )
}

export default UserHomeContent