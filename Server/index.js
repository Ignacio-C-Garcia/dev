const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req,res)=>{
db.query("select * from marked", (err,result)=>{
    if(err) {
    console.log(err)
    }
    console.log("holis") 
res.send(result)
});   });

// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM host_summary WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})