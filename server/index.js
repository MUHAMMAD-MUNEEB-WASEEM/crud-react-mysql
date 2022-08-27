const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    user:"root",
    host: "localhost",
    password: "",
    database: "employeeSystem"
})

app.post('/create', (req, res)=>{
    const name = req.body.name;
    const Age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const salary = req.body.salary;

    db.query("insert into employees (name, age, country, position, salary values (?, ?, ?, ?, ?)", 
    [name, age, country, position, salary],
    (err, result)=>{
        if (err){
            console.log(err)
        }else{
            res.send("values inserted")
        }
    })
})

app.listen(3001, ()=>{
    console.log("Server is running at 3001")
})