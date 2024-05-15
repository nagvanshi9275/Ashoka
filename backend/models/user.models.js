

import mongoose from "mongoose"





const userSchema = new mongoose.Schema({

        username:{

        required: true,
        
        type: String,




        },

        email:{

       type: String,

       required: true,

       unique: true,



        },

        password: {

        type: String,

        required: true,

        unique: true



        }




})


export const User = mongoose.model("User", userSchema)

