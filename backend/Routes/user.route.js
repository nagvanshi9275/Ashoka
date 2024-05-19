






import express from 'express';
import registerUser from '../controller/user.controller.js'; // Make sure the path is correct


import Loginuser from '../controller/user.login.js';

import Createddata from '../controller/created.user.js';

import Getdata from '../controller/getdata.user.js';


const router = express.Router();

router.post('/register', registerUser);

router.post('/login', Loginuser)

router.post('/adddata', Createddata)

router.post('/getdata', Getdata)

export default router;



















