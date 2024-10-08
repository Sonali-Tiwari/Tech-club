const form=document.getElementById("form");
form.addEventListener("submit",()=>{
    const register={
        // name:name.value,
        email:email.value,
        phone:phone.value,
        password:password.value,
        // conpass:conpass.value
    }
    fetch("/api/register",{
        method:"POST",
        body:JSON.stringify(register),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
         .then(data=>{
            if(data.status=="error"){
                success.style.display="none";
                error.style.display="block";
                error.innerText=data.error;
            }else{
                error.style.display="none";
                success.style.display="block";
                success.innerText=data.success;
            }
         })
})
// const pass=document.getElementById('password').value;
// const confpass=document.getElementById('conpass').value;
// if(pass!==confpass){
//     errorElement.textContent = 'Passwords do not match';
// }