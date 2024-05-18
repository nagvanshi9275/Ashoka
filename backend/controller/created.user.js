


import { Userdata } from "../models/userdata.model.js";

import { User } from "../models/user.models.js";


export default async function Createddata(req, res) {


     try {

        const{username, message, email} = req.body



        // figureout user varified or not

        const user = await User.findOne({email})

        if(!user) return res.status(404).json({message: "User not found"})


       // let userdata = await Userdata.findOne({username : user.username})

       let userdata = await Userdata.findOne({ username: user.username });



         if(!userdata){

           userdata = new Userdata({

           username: user.username,

           message : [message],



           })


         }  else {

           userdata.message.push(message)


         }



        await userdata.save()

        res.status(200).json(userdata)
      


        
     } catch (error) {

        console.log(error.message)

        res.status(500).json({message: "Falied! to store the data"})
        
     }








    
}











