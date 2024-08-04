const db = require("../routes/connection")
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
    // const { email, password: Npassword } = req.body
    const { email, phone, password } = req.body

    if (!email || !password) return res.json({ status: "error", error: "please Enter your Username Or Password" });
    else {
        db.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
            if (err) throw err;
            if (result[0]) return res.json({ status: "error", error: "Email has already been registered" })
            else {
                const hpassword = await bcrypt.hash(password, 8);
                // const hconpass=await bcrypt.hash(conpass,8);

                db.query('INSERT INTO users SET ?', { email: email, phone: phone, password: hpassword }, (eror, results) => {
                    if (eror) throw eror;
                    else {
                        // db.query('SELECT password AND conpass FROM users WHERE password AND conpass=?',[conpass],async(err,result)=>{
                        //     // if(err) throw err;
                        //     if(password!==conpass) return res.json({status:"error",error:"password doesn't match"})
                        // else{
                        return res.json({ status: "success", success: "User has been registered" })
                    }
                })
            }
        })
    }
}
    



module.exports = register;