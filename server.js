const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

MongoClient.connect("mongodb://localhost:27017" , (err , client) => {
    if(err) console.log("could'nt connect to Mongodb");
    console.log("successfully connected to Mongodb on port 27017");
    const db = client.db('Todos')
    // db.collection("Todos").insertOne({
    //     text: "todo one",
    //     complited: false
    // },(err , result) => {
    //     if(err) console.log('could not insert document!' , err);
    //     console.log(JSON.stringify(result.ops , undefined , 2) , "1 document added to collection")
    // })

    db.collection("Users").insertOne({
        name: "Reza",
        mail: "reza@gmail.com",
        age: 28,
        location: "Tehran", 
    } , (err , result) => {
        if(err) console.log(err);
        console.log(result.ops[0]._id.getTimestamp());
    })
    client.close();
})

app.get('/' , (req , res) => {
    res.send("Hello world!");
})
app.listen(3000 , ()=>{
    console.log('application is running on localhost: 3000')
})
module.exports.app = app;