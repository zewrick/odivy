
function validate(){
    let userField = document.getElementById('user').value
    let pswField = document.getElementById('psw').value
    let confirmPswField = document.getElementById('confirmPsw').value
    let emailField = document.getElementById('email').value
    let missingFields = false;
    let stringFields = ""
   

	if (userField == "") {
        missingFields = true
        stringFields  += "* Ingresa un usuario" + "<br />"
	}
    if (pswField == "") {
        missingFields = true
        stringFields  += "* Ingresa una contraseña" + "<br />"
	}
    if (confirmPswField == "") {
        missingFields = true
        stringFields  += "* Confirma la contraseña" + "<br />"
	}
    if (emailField == "") {
        missingFields = true
        stringFields  += "* Ingresa un email" + "<br />"
	}
 
     if (userField == "atuncar" && pswField == "chevere") {
        missingFields = false
	}
 
    if(userField.length >=1 || userField.length <= 6) {
       missingFields = true
       stringFields += "* El usuario debe ser de 7 dígitos" + "<br />"
    }
    if (!isNaN(userField)) {
      missingFields = true
      stringFields += "* El usuario no debe contener números" + "<br />"
    }
     

	if (missingFields) {
        document.getElementById('warning-message').style.display = "block"
        document.getElementById('error-list-1').innerHTML = stringFields
       return false
    }
 
    if (missingFields = false) {
       return false
    }
 
 return true
}

