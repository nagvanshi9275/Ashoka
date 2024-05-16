


import React from "react"

import { useState } from "react"

import "./App.css"

export default function App() {

   const[name, setname] = useState("")

   const[email, setemail] = useState("")

   const[password, setpassword] = useState("")


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



            
           } catch (error) {

           console.log(error.message);


            
           }










        
      }


    return(

     <>
     
        <div className="form">


            <input onChange={Name} placeholder="Username" type="text" />
            
            
            
            <input onChange={Email} placeholder="Email" type="text" />
            
          
            <input onChange={Password} placeholder="Password" type="text" />



            <button onClick={Register}>Register!!</button>






        </div>
     
     
     
     
     
     
     
     
     
     </>








    )








  
}













