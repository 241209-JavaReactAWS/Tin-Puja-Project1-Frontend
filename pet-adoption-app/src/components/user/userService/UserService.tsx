import axios from "axios";

class UserService {

    async registerUsers(username : string, email : string, firstname : string, lastname : string, password : string){
        return await axios.post("http://localhost:8080/user/register",
            {
                username,
                email,
                firstname,
                lastname,
                password
            });
    }

    

}


export default UserService;