

import { User } from "../models/user.models.js";



export default async function Loginuser(req, res) {


    // thigs is senstation use try catch

     try {

     const{username, email, password} = req.body
       
     const user = await User.findOne({email})

     if(!user ) return res.status(404).json({message: "User are not found"})



             if(user.password !== password){

                 res.status(404).json({message: "write the right password"})




             }




          res.status(200).json({message: "LOGIN SUCCESSFULLY"})







        
     } catch (error) {

        console.log(error.message)
        
     }







    
}
















