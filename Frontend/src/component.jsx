

import React, { useEffect, useState } from "react";

import {Button} from "react-bootstrap";

import "./App.css";


import Form from 'react-bootstrap/Form';
 




export default  function Compnent({name, email}){


    const[collection, setcollection] = useState([])


         async function  Click() {

          try {

            const response = await fetch('http://localhost:3000/api/users/adddata', {


            method: 'POST',

            headers: {

              'Content-Type': 'application/json',


            },

            body: JSON.stringify({

             email: email,

             message: "DABAO"

            })

           






            })

            const data = await response.json()

            if(response.ok){

              console.log("data added", data)

              alert("data database me add ho gya")



            } else {

             console.log(data.message)

            }


            
          } catch (error) {

            console.log(error.message)
            
          }



            
          }

        



        



             useEffect(() => {


               async function Fetch() {

                    try {


                       
               const response = await fetch('http://localhost:3000/api/users/adddata')

               const data = await response.json()

               setcollection(data)




                      
                    } catch (error) {

                      console.log(error.message)
                      
                    }





                
               }

             
              Fetch()
             
             
             
             
             
             }, [] )







      const renderr =  collection.map((pre, index) => (


            <div key={index}>

             <h1>{pre.username}</h1>




            </div>





        ))





       return(



        <div className="emil">


        <Form.Control aria-label="First name" />


          <Button onClick={Click}>DABAO</Button>





        <h1>WELCOME {name} 🏋 </h1>

        {renderr}


        </div>







       )







}







