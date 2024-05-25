






import express from 'express';
import registerUser from '../controller/user.controller.js'; // Make sure the path is correct


import Loginuser from '../controller/user.login.js';

import Createddata from '../controller/created.user.js';

import Getdata from '../controller/getdata.user.js';


import Delete from '../controller/user.delete.js';

import Edit from '../controller/user.edit.js';


const router = express.Router();

router.post('/register', registerUser);

router.post('/login', Loginuser)

router.post('/adddata', Createddata)

router.post('/getdata', Getdata)


router.post('/delete', Delete)

router.post('/edit', Edit)

export default router;



//router.post('/delete', Delete)


//delete













