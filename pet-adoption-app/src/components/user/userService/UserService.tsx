import axios from "axios";

class UserService {

    async registerUsers(register : any){
        return await axios.post("http://localhost:8080/user/register", register)
            .then(response => {
                console.log(response.status)
            }).catch(error => console.log(error))
    }

    

}


export default UserService;