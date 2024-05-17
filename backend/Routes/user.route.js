


//import express from "express"

//import registerUser from "../controller/user.controller.js"

//const router = express.Router()


//router.post('/register', registerUser)


//export default router;


//import express from "express";

//import registerUser from "../controller/user.controller.js"



//const router = express()

//router.post('/register', registerUser)

//export default router



import express from 'express';
import registerUser from '../controller/user.controller.js'; // Make sure the path is correct


import Loginuser from '../controller/user.login.js';


const router = express.Router();

router.post('/register', registerUser);

router.post('/login', Loginuser)

export default router;



















