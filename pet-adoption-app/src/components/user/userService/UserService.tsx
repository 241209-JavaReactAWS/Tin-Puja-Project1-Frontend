import axios from "axios";

class UserService {

    async registerUsers(register : any){
        return await axios.post("http://localhost:8080/user/register", register)
            .then(response => {
                alert("Registration was successful")
                console.log(response.status)
            }).catch(error => {
                alert("Registration failed : please fill all fields  :  " + error)  
                console.log(error)
            })
    }

}


export default UserService;