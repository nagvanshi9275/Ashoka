import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  //const[user, setuser]  = useState([])

  const[email, setemail] = useState("")

  const[name, setname] = useState("")

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

     function Click() {

       console.log(email, password, name)
      
     }



  return (
    <>
      
       <h1>HAPPY FULLSTACK</h1>

       <input onChange={Name} type="text" placeholder='name' />

       <input onChange={Email} type="text" placeholder='Email' />

       <input onChange={Password} type="password" placeholder='Password' />

       <button onClick={Click}>Register</button>





    </>
  )
}

export default App


