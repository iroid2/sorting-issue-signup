const storedUser= JSON.parse(localStorage.getItem('user'))
const loginForm= document.getElementById("loginForm");

const emailInput=document.getElementById('emailInput')
const passInput=document.getElementById('passInput')
console.log(passInput)
loginForm.addEventListener('submit',function(event){
   event.preventDefault()
   // console.log(emailInput.value)
   // console.log(passInput.value)
   // console.log(storedUser.password)
   // console.log(storedUser.email)
   if(emailInput.value===storedUser.email && passInput.value===storedUser.password){
      window.location='dashboard.html'
   }else{
      console.log("Something Went Wrong")
   }

})
console.log(storedUser)