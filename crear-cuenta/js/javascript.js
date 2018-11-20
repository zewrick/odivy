

function validation() {
 let user = document.getElementById('user').value
 let psw = document.getElementById('psw').value
 let conPsw = document.getElementById('con-psw').value
   
 if (user == "") {
     document.getElementById('userSpan').innerHTML= "* Escribe un usuario"
  }
 
 if (psw== "") {
     document.getElementById('pswSpan').innerHTML= "* Escribe una contraseña"
  }
 if (conPsw == "") {
     document.getElementById('conPswSpan').innerHTML= "* Confirma tu constraseña"
  }
 
 
}



