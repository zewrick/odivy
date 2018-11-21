

function validation() {
 let user = document.getElementById('user').value
 let psw = document.getElementById('psw').value
 let conPsw = document.getElementById('con-psw').value
   
 if (user === "" && psw === "" && conPsw=== "") {
     document.getElementById('warning-message').style.display = "block"
     
  }
 
 if (user === ""){
  document.getElementById('userSpan').innerHTML = "* Escribe un usuario"
 }
 
 if (psw=== ""){
  document.getElementById('pswSpan').innerHTML = "* Escribe tu constraseña"
 }
 
 if (conPsw === ""){
  document.getElementById('conPswSpan').innerHTML = "* Confirma tu contraseña"
  return false
 }
 
 
}



