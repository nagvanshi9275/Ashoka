

// controllers/userController.js

// Function to handle user registration
//exports.registerUser = (req, res) => {
    //const { username, email, password } = req.body;

    // For now, we'll just send back the received data
  //  res.json({ username, email, password });
//};













// controllers/userController.js

// Function to handle user registration
//const registerUser = (req, res) => {
   // const { username, email, password } = req.body;

    // For now, we'll just send back the received data
   // res.json({ username, email, password });
//};

//export default registerUser;

export default function registerUser(req, res) {


       const {username, email, password} = req.body

       res.json({username, email, password})


    
}



