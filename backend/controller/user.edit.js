


import { User } from "../models/user.models.js";

import { Userdata } from "../models/userdata.model.js";


export default async function Edit(req, res) {


   try {

     const{email, index, message} = req.body

     const user = await User.findOne({email})

     if(!user) return res.status(404).json({message: "user are not found"})

       const userdata = await Userdata.findOne({username: user.username })

       userdata.message[index] = message

        await userdata.save()

          res.status(200).json(userdata)

    
   } catch (error) {

    console.log(error.message)
    
   }






    
}




















