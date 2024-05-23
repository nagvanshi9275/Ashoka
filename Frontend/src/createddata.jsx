


import React, { useState } from "react";

import { Button } from "react-bootstrap";

export default function Created({email}){

     const[text, settext] = useState("")




        function Change(e) {

          settext(e.target.value)
          
        }

        async function Add() {


           try {

           const response = await fetch('http://localhost:3000/api/users/adddata', {


            method: 'POST',

            

            headers:{

              'Content-type': 'application/json',

             },

             body: JSON.stringify({

              email: email,

              message: text








             })





           })

           const data = await response.json()

            
           } catch (error) {

            console.log(error.message)
            
           }



          
         }



         return(

             <div>


              <input onChange={Change} type="text" />
             
             
             <Button onClick={Add}>Add+</Button>
             
             
             
             
             
             
             </div>







         )







}

















