import axios from "axios";

class PetService {

    async getAllPets(){
        return await axios.get("http://localhost:8080/pet/fetchAll");
    }

}


export default PetService;