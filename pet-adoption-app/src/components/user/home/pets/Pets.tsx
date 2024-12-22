import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import Navbar from '../../../navbar/Navbar';

function Pets() {

    const [allPets, setAllPets] = useState<any[]>([]);

    useEffect(() => {

        axios.get("http://localhost:8080/api/pet/public/fetchAll")
        .then((res) => {
            setAllPets(res.data)
        })
    }, [])
    
  return (
    <div className='root'>
        <Navbar/>
        <Container>
            <h1>Pets</h1>
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
                    ))}
                        </tbody>
                    </Table>
                </div>
        </Container>
    </div>
  )
}

export default Pets