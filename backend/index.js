

import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/user.route.js'; // Ensure the path is correct

import connect_db from './db/data.js';

import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = process.env.PORT || 3000;


connect_db();



const corsOptions = {
  origin: '*', // Replace with your frontend's domain if needed
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // if you need to allow cookies or authentication headers
};

app.use(cors(corsOptions));
app.use(express.json());

// Use user routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('EVERYTHING IS FINE FOCUS ON DESIGN');
});

app.get('/home', (req, res) => {
  res.send('WELCOME TO MOROCCO BUT IN VIRTUALLY');
});

app.get('/jokes', (req, res) => {
  const jokes = [
    { id: 1, name: 'joke1' },
    { id: 2, name: 'joke2' },
    { id: 3, name: 'joke3' }
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`SERVER IS RUNNING AT http://localhost:${port}`);
});







