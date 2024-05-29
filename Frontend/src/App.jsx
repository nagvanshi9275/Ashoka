


import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Container, Row, Col, Form, Navbar } from 'react-bootstrap';
import Component from "./component";
import Created from "./createddata";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [dark, setDark] = useState(false);

  const[content, setcontent] = useState([])



  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function register() {
    if (!name || !email || !password) {
      alert("All fields are required for registration");
      return;
    }

    try {
      const response = await fetch('https://ashoka-6.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username: name, email, password })
      });

      const data = await response.json();
      console.log("user registered", data);
      setShow(false);
      setDark(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function login() {
    if (!name || !email || !password) {
      alert("All fields are required for registration");
      return;
    }

    try {
      const response = await fetch('https://ashoka-6.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username: name, email, password })
      });

      const data = await response.json();
      if (response.ok) {
        console.log("user logged in", data);
        setShow(false);
        setDark(true);
      } else {
        alert('Incorrect password. Please try again.');
      }
    } catch (error) {
      console.log(error.message);
    }
  }



  async  function fetchData() {

     try {

      const response = await fetch('https://ashoka-6.onrender.com/api/users/getdata', {

          method: 'POST',
    
          headers:{

            'Content-type': 'application/json',


          },

          body: JSON.stringify({


         email: email


          })





      })

      const data = await response.json()

      if(response.ok){

        setcontent([data])
    

      }




      
     } catch (error) {

      console.log(error.message)
      
     }
      



      
    }

   useEffect(() =>{

    if(email){

      fetchData()


    }


   },[email])





  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">MyApp</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-4">
        {show &&
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    onChange={handleNameChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={handleEmailChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
                <Button variant="primary" className="me-2" onClick={register}>
                  Register
                </Button>
                <Button variant="secondary" onClick={login}>
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        }
        {dark && <Created email={email} fetchData={fetchData}/>}
        {dark && <Component name={name} email={email} content={content} fetchData={fetchData} />}
      </Container>
    </>
  );
}






