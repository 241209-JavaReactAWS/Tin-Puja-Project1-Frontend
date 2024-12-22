import React, { useState } from 'react'
import "../userHome.css"

import Navbar from '../../../navbar/Navbar'
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import UserService from '../../userService/UserService';


function SignUp() {
  
  let userService = new UserService();

  const [username, setUsername] = useState<any>("")
  const [email, setEmail] = useState<any>("")
  const [firstname, setFirstname] = useState<any>("")
  const [lastname, setLastname] = useState<any>("")
  const [password, setPassword] = useState<any>("")

  const [register, setRegister] = useState<any>({
    username : "",
    email : "",
    firstname : "",
    lastname : "",
    password : ""
  })


   function reigsterNewUser (e : any){
    e.preventDefault();
    userService.registerUsers(register);
  }

  function registrationHanlder(e : any){
    setRegister({
      ...register,
      [e.target.name] : e.target.value
    })
  }

  
  //Add error message for improver field validation
  // async function reigsterNewUser (e : any){
  //   e.preventDefault()
  //   await userService.registerUsers(username, email, firstname, lastname, password).then(response => {
  //     // adding username and email validation
  //     // let usernameTrim = e.target.username.value.trim();  
  //     // let emailTrim = e.target.email.value.trim();
  //     // let firstnameTrim = e.target.firstname.value.trim();
  //     // let lastnameTrim = e.target.lastname.value.trim();
  //     // let passwordTrim = e.target.password.value.trim();

  //       console.log(username)
  //       console.log(email)
  //       console.log(firstname)
  //       console.log(lastname)
  //       console.log(password)



  //     // Add the email and feild validation with error handling here

  //     // setUsername(response.data.username);
  //     // setEmail(response.data.email);
  //     // setFirstname(response.data.firstname)
  //     // setLastname(response.data.lastname)
  //     // setPassword(response.data.package)

  //     setUsername(response.data.username);
  //     setEmail(response.data.email);
  //     setFirstname(response.data.firstname)
  //     setLastname(response.data.lastname)
  //     setPassword(response.data.password)
      

  //   }).catch(error => {
  //     console.log("Register Userfailed");
  //   });

    // setUsername("");
    // setEmail("");
    // setFirstname("")
    // setLastname("")
    // setPassword("")

    
  // }

  return (
    <div className='root'>
      <Container>
        <Navbar/>
        <h1 className='center'>Let's Sign up Now! </h1>

          <Form onSubmit = {reigsterNewUser}>
            <FormGroup>
              <FormLabel>Username </FormLabel>
              <FormControl 
                  type="text" 
                  placeholder="Username"
                  name = "username"
                  value = {register.username}
                  onChange = {registrationHanlder}
                  />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email </FormLabel>
              <FormControl 
                  type="text" 
                  placeholder="Email"
                  name = "email"
                  value = {register.email}
                  onChange = {registrationHanlder}
                  />      
              </FormGroup>
              <FormGroup>
              <FormLabel>Firstname </FormLabel>
              <FormControl 
                  type="text" 
                  placeholder="First name"
                  name = "firstname"
                  value = {register.firstname}
                  onChange = {registrationHanlder}
                  />
            </FormGroup>
              <FormGroup>
              <FormLabel>Lastname </FormLabel>
              <FormControl 
                  type="text" 
                  placeholder="last name"
                  name = "lastname"
                  value = {register.lastname}
                  onChange = {registrationHanlder}
                  />
            </FormGroup>
              <FormGroup>
              <FormLabel> Password :  </FormLabel>
              <FormControl 
                  type="password" 
                  placeholder="Password"
                  name = "password"
                  value = {register.password}
                  onChange = {registrationHanlder}
                  />      
              </FormGroup> 
            <Button 
              type="submit"
            > 
            Submit
            </Button>
          </Form>
        </Container>
    </div>

  )
}

export default SignUp