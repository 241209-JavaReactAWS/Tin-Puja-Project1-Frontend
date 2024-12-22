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

  
  //Add error message for improver field validation
  async function reigsterNewUser (e : any){
    e.preventDefault()
    await userService.registerUsers(username, email, firstname, lastname, password).then(response => {
      // adding username and email validation
      // let username = e.target.username.value.trim();  
      // let email = e.target.email.value.trim();
      // let firstname = e.target.firstname.value.trim();
      // let lastname = e.target.lastname.value.trim();
      // let password = e.target.password.value.trim();

        console.log(e.target.username)
        console.log(email)
        console.log(firstname)
        console.log(lastname)
        console.log(password)



      // Add the email and feild validation with error handling here

      setUsername(response.data.username);
      setEmail(response.data.email);
      setFirstname(response.data.firstname)
      setLastname(response.data.lastname)
      setPassword(response.data.package)
      

    }).catch(error => {
      console.log("Register Userfailed");
    });

    // setUsername("");
    // setEmail("");
    // setFirstname("")
    // setLastname("")
    // setPassword("")

    
  }

  return (
    <>
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
              onChange = {(e) => setUsername(e.target.value)}
              />
        </FormGroup>
        <FormGroup>
          <FormLabel>Email </FormLabel>
          <FormControl 
              type="text" 
              placeholder="Email"
              name = "email"
              onChange = {(e) => setEmail(e.target.value)}
              />      
          </FormGroup>
        <FormGroup>
          <FormLabel>First Name :  </FormLabel>
          <FormControl 
              type="text" 
              placeholder="First Name"
              name = "firstname"
              onChange = {(e) => setFirstname(e.target.value)}
              />      
          </FormGroup>
        <FormGroup>
          <FormLabel>Last Name :  </FormLabel>
          <FormControl 
              type="text" 
              placeholder="Last Name"
              name = "lastname"
              onChange = {(e) => setLastname(e.target.value)}
              />      
          </FormGroup>
          <FormGroup>
          <FormLabel> Password :  </FormLabel>
          <FormControl 
              type="password" 
              placeholder="Password"
              name = "password"
              onChange = {(e) => setPassword(e.target.value)}
              />      
          </FormGroup> 
        <Button 
          type="submit"
        > 
        Submit
        </Button>
      </Form>
    </Container>
    
    </>

  )
}

export default SignUp