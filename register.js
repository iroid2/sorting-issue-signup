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
   
   const user={
      fullname:nameInput.value,
      email:emailInput.value,
      password:passwordInput.value
   }
   
localStorage.setItem("user",JSON.stringify(user))
   console.log(user)
})