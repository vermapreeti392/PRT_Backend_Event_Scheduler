const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://buggu_123:buggu123@cluster1.cixy0px.mongodb.net/recipe-book?retryWrites=true&w=majority";
async function getConncetion(){
   await mongoose.connect(DB_URL).then(()=>{
        console.log("connceted successfully");
    }).catch(e=>{
        console.log("not connected");
    })
}
 module.exports = getConncetion;