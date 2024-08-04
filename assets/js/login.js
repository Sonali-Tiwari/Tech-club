// const { link } = require("../../routes/pages");
// import {account} from'./appwrite';
const loginbtn=document.getElementById('login-btn')
const form=document.getElementById("form")
form.addEventListener("submit",()=>{
    const login={
        email:email.value,
        password:password.value
    }
    fetch("/api/login",{
        method:"POST",
        body:JSON.stringify(login),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
         .then(data=>{
            if(data.status=="error"){
                success.style.display="none";
                error.style.display="block"
                error.innerText=data.error
            }else{
                error.style.display="none";
                success.style.display="block";
                success.innerText=data.success;
                window.open('joinnow','_blank')

            }
         })
})
loginbtn.addEventListener("submit",()=>{
async function handlelogin(){
    account.CreateOAuth2Session (
        'google',
        'http://localhost:8000',
        'http://localhost:8000/fail'
    )
}})
