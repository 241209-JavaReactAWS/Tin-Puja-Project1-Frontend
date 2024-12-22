import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';

function Pets() {

    const [allPets, setAllPets] = useState<any[]>([]);

    useEffect(() => {

        axios.get("http://localhost:8080/api/pet/public/fetchAll")
        // axios.get<any[]>("http://localhost:8080/fetchAll")
        .then((res) => {
            setAllPets(res.data)
        })
    }, [])
    
  return (
    <>
    <Container>
        <h1>Pets</h1>
        {/* {allPets} */}

 <div>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Select</th>
                <th>Picture</th>
                <th>Breed</th>
                <th>Name</th>
                <th>Age</th>
                <th>Condition</th>
                <th>Gender</th>
                <th>Available</th>

            </tr>
                </thead>
                <tbody>
        {allPets.map((item) => (
            <tr key={item.petId}>
            <td><input type="checkbox"/></td>
            <td><img className="photos" src="/photos/golden.jpg" alt="Golden Retriever"/></td>
            <td>{item.breed}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.petCondition}</td>
            <td>{item.gender}</td>
            <td>{item.status}</td>


        </tr>


        //   <p key={item.petId}>{item.name}</p>

        ))}
            </tbody>
        </Table>
      </div>


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

        {/* <section className="tablegroup">
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
        </section> */}
    </Container>
    
    </>
  )
}

export default Pets