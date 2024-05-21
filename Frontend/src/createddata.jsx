



import React, { useEffect, useState } from "react";

import { Button } from 'react-bootstrap';

export default function Created() {

    const[message, setmessage] = useState("")

    const[array, setarray] = useState([])



          function Change(e) {

            setmessage(e.target.value)
            
          }








       async function handleClick() {

       // setarray([...array, message])

       const newarr = [...array, message]

       setarray(newarr)

        try {

         const response = await fetch('http://localhost:3000/api/users/adddata', {

          method: 'POST',

          headers:{

            'Content-type': 'application/json',



          },

          body: JSON.stringify({

          message: newarr




          })




         })

          const data = await response.json()

          console.log(data)


            
        } catch (error) {

            console.log(error.message)
            
        }

            
            
        }


    
      //useEffect(() => {





     // }, [array])







    return(

          <div>

             

             <input onChange={Change} type="text"  />
          

             <Button variant="primary" onClick={handleClick}>Add data
      </Button>







          </div>








    )







    
}
























