


import mongoose from "mongoose";



const userdataschema = new mongoose.Schema({

     
         message: [{

         type: String,



             },
            
            
            ],

       username: {

       type: String,
       required: true,



       },






},


         {

         timestamps: true




         }







)



export const Userdata = mongoose.model("Userdata", userdataschema  )









