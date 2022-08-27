const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

//middleware

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user:"root",
    host: "localhost",
    password: "",
    database: "employee_crud_react"
})

app.post('/create', (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const salary = req.body.salary;

    db.query("insert into employees (name, age, country, position, salary) values (?, ?, ?, ?, ?)", 
    [name, age, country, position, salary],
    (err, result)=>{
        if (err){
            console.log(err)
        }else{
            res.send("values inserted")
            console.log(result)
        }
    })
})

app.get('/employees', (req, res)=>{
    db.query("Select * from employees", (err, result)=>{
        if (err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

app.listen(3001, ()=>{
    console.log("Server is running at 3001")
})