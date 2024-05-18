

import React from "react";

import {Button} from "react-bootstrap";

import "./App.css";



 




export default function Compnent({name, email}){


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





       return(



        <div className="emil">


          <Button onClick={Click}>DABAO</Button>

        <h1>WELCOME {name} 🏋 </h1>


        </div>







       )







}







