import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import Navbar from '../../../navbar/Navbar';
import PetService from '../../userService/PetService';

function Pets() {

    let petService = new PetService;

    const [allPets, setAllPets] = useState<any[]>([]);

    // const [adopt, setAdopt] = useState<any>({
    //     name : "",
    //     beed : "",
    //     age : "",
    //     petConditon : "",
    //     gender : "",
    //     status : ""
    // })

    function AdoptPet(petId : number){
        petService.adoptAPet(petId)
        .then((res) => {
            alert("Adoption was successful")
            console.log("Adoption was sucesful")
        }).catch(error => {
            alert("Adoption attempt failed :  " + error)
            console.log("Adoption attempt failed  :  "+ error)
        })


    }

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
                            <th>Breed</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Condition</th>
                            <th>Gender</th>
                            <th>Available</th>

                        </tr>
                            </thead>
                            <tbody>

                

                    {/* { allPets.status == active ? */}
                    
                   { allPets.map((item) => (

                        // item.status == "ACTIVE" ?

                        <tr key={item.petId}>
                        <td>
                            <Button
                                type="submit"
                                onClick={() => AdoptPet(item.petId)}
                            >    
                                Adopt
                            </Button>
                        </td>
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