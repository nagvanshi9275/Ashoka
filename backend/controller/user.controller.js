

import { User } from "../models/user.models.js"


export default async function registerUser(req, res) {

   //const {username, email, password} = req.body

   //res.json({username, email, password})

   try {

      const {username, email, password} = req.body

      const newUser = new User({username, email, password})

      await newUser.save()

      res.status(201).json(newUser)


      
   } catch (error) {

      console.error(error.message)

      res.status(500).json({message: "Server Error"})
      
   }









  
}

//export default registerUser


/*

import { User } from '../db/data.js'; // Import the User model

// Function to handle user registration
export default async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;
        // Create a new user document
        const newUser = new User({ username, email, password });
        // Save the user to the database
        await newUser.save();
        res.status(201).json(newUser); // Respond with the newly created user
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}


*/

