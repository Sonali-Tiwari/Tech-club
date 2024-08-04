const express=require("express");
const router=express.Router();
const loggedin=require("../controllers/loggedin");

router.get('/',(req,res)=> {
 res.render('index');
})


// router.get('/',loggedin,(req,res)=> {
//     if(req.users){
//         res.render('index',{status:"loggedin",users:req.users});
//     } else{
//         res.render('index',{status:"no",user:"nothing"});
//     }
//    })

router.get('/team', function (req, res) {
    return res.render('team')
})
router.get('/login', function (req, res) {
    return res.render('login')
})

router.get('/register', function (req, res) {
    return res.render('register')
})
// let email=sona;
// let title{

// }
router.get('/joinnow',loggedin, function (req, res) {
    if(req.users){
    return res.render('joinnow',{ status:"ok", users: req.users})
}
})


router.get('/register', function (req, res) {
    return res.sendFile('register.ejs',{root:"./views"})
})

router.get('/login', function (req, res) {
    return res.sendFile('login.ejs',{root:"./views"})
})


module.exports=router;