//let mongoose = require('mongoose');
const express = require('express');
require('dotenv').config({path:'./config/.env'});
require('./config/dbConnection');
let PersonModel = require('./schemas&Models/PersonModel');



let app= express();



app.listen(3000,()=>{
     console.log('connexion reussie');
});



