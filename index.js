const express = require('express');
const app = express();
const event = require('./routes/event')
const getConncetion = require('./connection/conn');
getConncetion();
app.use(express.json());
app.use(event);
app.listen(5000, ()=>console.log("server is running"));


