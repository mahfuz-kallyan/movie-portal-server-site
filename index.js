const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());



app.get('/', (req, res)=>{
    res.send('Movie Portal Server Running')
})

app.listen(port, ()=>{
    console.log(`Movie Server running on port: ${port}`);
})