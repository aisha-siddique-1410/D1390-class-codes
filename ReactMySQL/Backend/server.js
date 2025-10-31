const express = require('express');
const mysql = require('mysql');
const cors = require ('cors');


const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'student'
})
app.get('/', (req, res) => {
    return res.json("From Backend Side");
})

app.get('/studentable', (req, res) => {
    const sql = "select * from studentable";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })

})

app.listen(8081, () => {
    console.log("Listening from 8081")
})