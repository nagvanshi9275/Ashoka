


import React from "react"

import { useState } from "react"

import "./App.css";

import { Button } from 'react-bootstrap';



export default function App() {

   const[name, setname] = useState("")

   const[email, setemail] = useState("")

   const[password, setpassword] = useState("")

   const[show, setshow] = useState(true)

   const[dark, setdark] = useState(false)



     




     function Name(e) {

        setname(e.target.value)


      
     }

      function Email(e) {

        setemail(e.target.value)


        
      }

      function Password(e) {

        setpassword(e.target.value)
       
        
      }

     async function Register() {

       // console.log("Name:", name, "Email:", email, "Password :", password)

       if (!name || !email || !password) {
        alert("All fields are required for registration");
        return;
      }







           try {

            const response = await fetch('http://localhost:3000/api/users/register', {

             method: 'POST',

               headers: {

                'Content-type': 'application/json',



               },


              body: JSON.stringify({

                username: name, email, password
                
                









              })

             









            })

               const data = await response.json()

               console.log("user registered", data)

                setshow(false)

                setdark(true)

            
           } catch (error) {

           console.log(error.message);


            
           }










        
      }

 


        async function Login() {

          if (!name || !email || !password) {
            alert("All fields are required for registration");
            return;
          }







         try {

         const response = await fetch('http://localhost:3000/api/users/login', {

          method: 'POST',


          headers: {

            'Content-type': 'application/json',



          },

              body: JSON.stringify({

               username: name,

               email: email,

               password: password




              })
            



         })

          const data = await response.json()

        
         
         //setshow(false)

        // setdark(true)

         if(response.ok){

          console.log("user logged in", data)   

         setshow(false)

         setdark(true)


         } else {

           alert('SAHI PASSWORD LIKHO BABY!!!')

         }


          
         } catch (error) {

           console.log(error.message)

          // setshow(true)

          // setdark(false)


          
         }
           



         }

          
       
      

   


    return(

     <>


        {show &&
     
        <div className="form">


            <input className="input3" onChange={Name} placeholder="Username" type="text" />
            
            
            
            <input className="input3" onChange={Email} placeholder="Email" type="text" />
            
          
            <input className="input3" onChange={Password} placeholder="Password" type="text" />


            <button className="don" onClick={Register}>Register!!</button>

             
             <Button className="dhoni" onClick={Login}>LOGIN</Button>

             

        </div>
     
     
     
     
     
            }
     
            {dark && <h1>SO YOUR DATA ADDED TO MONGODB</h1>}
     
     </>








    )








  
}













