

import React, { useEffect, useState } from "react";

import {Button} from "react-bootstrap";

import "./App.css";


import Form from 'react-bootstrap/Form';
 




export default  function Compnent({name, email}){


  const[content, setcontent] = useState([])

  const[manal, setmanal] = useState([])

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
                
                setcontent([...content, data]);
          

                
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

                {pre.message.map((msg, msgIndex) => (


                  <p key={msgIndex}>{msg}</p>

                ))}

              </div>

              
            ));

                 
                

           




         // let manal = content[0].message


         // useEffect(() => {

           // setmanal([content[0].message])



          //}, [content])




          function Dabao() {


            console.log(manal)

            
          }

         

          


          




       return(



        <div className="emil">


        <Form.Control aria-label="First name" />


          <Button onClick={Dabao}>DABAO</Button>





        <h1>WELCOME {name} 🏋 </h1>

      
        {renderr}          

        </div>







       )







}







