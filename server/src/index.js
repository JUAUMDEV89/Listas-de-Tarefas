require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./routes.js');

const app = express();

require('./config/database');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server Running at port ${process.env.PORT}`)
});

