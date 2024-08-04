const db=require("../routes/connection")
const jwt=require("jsonwebtoken")
const loggedin=  (req,res,next)=>{
       if(!req.cookies.userRegistered)return next();
       try {
            const decoded=jwt.verify(req.cookies.userRegistered,process.env.JWT_SECRET);
            db.query("SELECT * FROM users WHERE id=?",[decoded.id],(err,result)=>{
                if(err) return next();
                req.users=result[0];
                return next();
            })
       } catch (error) {
        if(error) return next()
        
       }
}
module.exports=loggedin;