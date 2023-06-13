const getStartBtn=document.getElementById("getStartedBtn");
console.log(getStartBtn);
const storedUser= JSON.parse(localStorage.getItem('user'))
let user=storedUser?storedUser : {}
getStartBtn.addEventListener('click',function(){
   console.log(user)
   if(user.email){
      window.location='login.html'
   }else{
      window.location="register.html"
   }
})


//REGISTER DETAILS
const registerForm=document.getElementById("registerForm");
console.log(registerForm);

const nameInput=document.getElementById("nameInput")
const emailInput=document.getElementById("emailInput")
const passwordInput=document.getElementById("passwordInput")

console.log(nameInput)


registerForm.addEventListener('submit',function(event){
   event.preventDefault()
   console.log(nameInput.value)
   console.log(emailInput.value)
   console.log(passwordInput.value)
})

// console.log(user)
