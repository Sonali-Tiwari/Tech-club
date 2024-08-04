const express = require('express');
// import {account} from'./appwrite'
const db = require('./routes/connection');
const path = require('path');
const port = 8000;
const cookie=require('cookie-parser');

const app = express(); 
const ejs = require('ejs');



// const con=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'techknightclub'
// })

db.connect(function(err){
    if(err) throw err;
    console.log('connected');

})


app.use(express.static('assets'))
app.use(express.urlencoded());
app.use(cookie());
app.use(express.json());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

/*
app.get('/', function (req, res) {
    return res.render('index')
})

app.get('/team', function (req, res) {
    return res.render('team')
})
app.get('/login', function (req, res) {
    return res.render('login')
})

app.get('/register', function (req, res) {
    return res.render('register')
})

app.get('/joinnow', function (req, res) {
    return res.render('login')
})

*/
async function handlelogin(){
    account.createOAuth2Session(
        'google',
        'http://localhost:8000',
        'http://localhost:8000/fail'
    )
}





app.get("/join",(req,res)=>{
    //Fetching data from form
    // res.send(req.query)
    // const name=req.query.name
    const {name,email,phone,message}=req.query
    // let qury="INSERT "

    //Sanitization XSS...
    let qry="SELECT *FROM joinform WHERE  email=? OR phone=?"
    db.query(qry,[email,phone],(err,results)=>{
            if(err) throw err;
            else{
                
               if(results.length >0){
                    // res.render('index',)
                    // res.send("Email or Phone are already joined in Tech Knight")
               }
               else {
                 //Insert Query

                 let qry2= "insert into joinform values(?,?,?,?)";
            con.query(qry2,[name,email,phone,message],(err,results)=>{
                    // res.send(results);
                    // if(results.affectedRows > 0){
                    //  res.render('index',{mesg:"sonali"})
                    // res.send("message sent")

                    // }
                 })
               }
            }
    }) 

})


 

app.use("/",require("./routes/pages"))
app.use("/api",require("./controllers/auth"))


app.listen(port,function(err){
    if(err)
    console.log("Error");
else
    console.log("Server started on port ",port);
})