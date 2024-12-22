import axios from "axios";

class PetService {

    async getAllPets(){
        return await axios.get("http://localhost:8080/pet/fetchAll");
    }

    async adoptAPet(petId : number){
        return await axios.put("http://localhost:8080/api/pet/protected/adopt/" + petId)
    }

    

}


export default PetService;