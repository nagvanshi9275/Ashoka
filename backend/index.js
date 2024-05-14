

/*import express from "express";

const app = express()

//const port = 3000;

app.get('/', (req, res) => {

     res.send('SErver is ready')


})

const port = process.env.PORT || 3000


app.listen(port, () => {

   console.log(`Server is running at http://localhost:${port}`)

})

*/

import express from "express";

const app = express();


app.get('/', (req, res) => {


 res.send('SERVER RUN HO RHA HAI')


})


const port = process.env.PORT || 3000;

app.listen(port, () => {

console.log(`Server is running at http://localhost:${port}`)


})







