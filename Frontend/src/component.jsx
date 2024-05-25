

import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Navbar, Form } from "react-bootstrap";
import "./App.css";

//import Created from "./createddata";

export default function Component({ name, email, content, fetchData }) {
 // const [content, setContent] = useState([]);
  const [manal, setManal] = useState([]);

  let atal; // for edit

  const renderContent = content.map((pre, index) => (
    <Row key={index} className="justify-content-center mb-3">
      <Col xs={12} md={8}>
        {pre.message.map((msg, msgIndex) => (
          <div className="message-box" key={msgIndex}>
            <Row>
              <Col xs={9}>
                <p>{msg}</p>
              </Col>
              <Col xs={1} className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-square cursor-pointer"
                  viewBox="0 0 16 16"
                  id="bihar"

                  onClick={() => Edit(msgIndex)}
                  
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706l-10 10a.5.5 0 0 1-.168.11l-4 1a.5.5 0 0 1-.65-.65l1-4a.5.5 0 0 1 .11-.168l10-10a.5.5 0 0 1 .706 0zm-11.9 10.607l-.647 2.588 2.588-.647L14.354 3.354l-2.588-2.588L3.602 12.547zm1.415-9.712L11.293 8.5 7.5 12.293 2.61 7.402l2.407-2.407zm9.065-1.014a.5.5 0 0 1 .11.168l1 4a.5.5 0 0 1-.65.65l-4-1a.5.5 0 0 1-.168-.11l-9-9a.5.5 0 0 1 .65-.65l9 9z" />
                </svg>
              </Col>
              <Col xs={1} className="text-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                 
                  id="bihari"

                 onClick={() => Delete(msgIndex)}


                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
              </Col>
            </Row>
          </div>
        ))}
      </Col>
    </Row>
  ));

      

    async function Edit(msgIndex) {

         //console.log(msgIndex)

        atal = prompt('')

      






       try {

        const response =  await fetch('http://localhost:3000/api/users/edit', {


        method: 'POST', 


        headers:{

          'Content-type': 'application/json',



        },

        body: JSON.stringify({

        email: email,

        index: msgIndex,

       message: atal





        })








        })

        
        
        const data = await response.json()

        fetchData()

        
       } catch (error) {

        console.log(error.message)

        
       }






      
     }


    async function  Delete(msgIndex) {

      


      try {

        const response = await fetch('http://localhost:3000/api/users/delete', {


         method: 'POST',

         headers:{

          'Content-type': 'application/json',



         },

         body: JSON.stringify({

         email: email,

         index: msgIndex
      


         })











        })


        const data = await response.json()

        fetchData()


        
      } catch (error) {

      console.log(error.message)
        
      }

      
      
     }


  return (
    <div className="emil">
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            
            <div>{renderContent}</div>
          </Col>
        </Row>


       

      </Container>
    </div>
  );
}







