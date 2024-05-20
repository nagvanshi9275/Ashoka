

import React, { useEffect, useState } from "react";

import {Button} from "react-bootstrap";

import "./App.css";


import Form from 'react-bootstrap/Form';
 




export default  function Compnent({name, email}){


  const[content, setcontent] = useState([])

     useEffect(() => {


         async function Fetch() {

              try {

           
              const response = await fetch('http://localhost:3000/api/users/getdata', {


                   method: 'POST',


                 headers:{

                  'Content-type': 'application/json',

                 },

                  body: JSON.stringify({

                   email: email








                  })









              })
              
                
               const data = await response.json()

              if (response.ok) {

                //setcontent([...content, data ])
                
                setcontent(data);
          

                
              }

             // console.log(data)



                

                
              } catch (error) {

                console.log(error.message);
                
              }




          
         }



       Fetch()



     }, [email]) 


     
            useEffect(() => {

            console.log(content)

            }, [content])
         

          const renderr = content.map((pre, index) => (

             <div key={index}>

              <h1>{pre.message}</h1>

                 
                

           





             </div>





          ))




       return(



        <div className="emil">


        <Form.Control aria-label="First name" />


          <Button>DABAO</Button>





        <h1>WELCOME {name} 🏋 </h1>

      
        {renderr}          

        </div>







       )







}







