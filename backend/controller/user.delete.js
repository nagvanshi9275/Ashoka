




import { Userdata } from "../models/userdata.model.js";

import { User } from "../models/user.models.js";


export default async function Delete(req, res) {


    try {

        const {email, index} = req.body

        const user = await User.findOne({email})

        if(!user) return res.status(404).json({message: "user not found"})


         let userdata = await Userdata.findOne({username: user.username})   

         
          userdata.message.splice(index, 1)

          await userdata.save()

          res.status(200).json(userdata)


        
    } catch (error) {

        console.log(error.message)
        
    }





    
}















