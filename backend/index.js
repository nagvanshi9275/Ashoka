

import express from "express";

import userRoutes from "./Routes/user.route.js";

import cors from 'cors';

const app = express()

const port = process.env.PORT || 3000;

app.use(express.json());

// Use user routes
app.use('/api/users', userRoutes);


app.use(cors());

app.get('/', (req, res) => {


  res.send('EVERYTHING IS FINE FOCUS ON DESIGN')



})

app.get('/home', (req, res) => {

  res.send("WELCOME TO MOROCCO BUT IN VIRTUALLY")

})


app.get('/jokes', (req, res) => {

    const jokes = [

      {

        id: 1,
        name: 'joke1'



      },

      {

       id: 2,
       name: "joke2"

      },

      {
       
       id: 3,
       name: "joke3" 


      }




    ]

   res.send(jokes)

})


app.listen(port, () => {


  //console.log(`SERVER IS RUNNING AT http://localhost${port}`)

  console.log(`SERVER IS RUNNING AT http://localhost:${port}`)



})





