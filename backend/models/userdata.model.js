


import mongoose from "mongoose";



const userdataschema = new mongoose.Schema({

     
         message: [{

         type: String,



             },
            
            
            ],

       username: {

       type: mongoose.Schema.ObjectId,
       ref: "User",



       },






},


         {

         timestamps: true




         }







)



export const Userdata = mongoose.model("Userdata", userdataschema  )









