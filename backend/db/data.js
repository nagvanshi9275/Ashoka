



import mongoose from "mongoose";

import { db_Name } from "../constant.js";

import express from "express";

import dotenv from 'dotenv';


dotenv.config();

const connect_db = async () => {

    try {

     const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${db_Name}`)

        console.log(`\n mongodbconnected ${connectioninstance.connection.host}`)


        
    } catch (error) {

        console.log(error)
        
    }



}




export default connect_db





