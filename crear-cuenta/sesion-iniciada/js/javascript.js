
function validate(){
    
    let missingFields = false;
    let stringFields = ""
   

	if (validateForm.user.value == "" || validateForm.psw.value  == "" || validateForm.confirmPsw.value  == "" || validateForm.email.value  == "" ) {
        missingFields = true
        stringFields  += "* Llena todos los campos" + "<br />"
	}
 
    
   
 /*
     if (userField == "elatuncar" && pswField == "chevere") {
        missingFields = false
	} */
 
    if(validateForm.user.value.length >= 1 && validateForm.user.value.length <=6 ) {
       missingFields = true
       stringFields += "* El usuario debe ser de 7 dígitos" + "<br />"
    } 
 
    if (!isNaN(parseFloat(validateForm.user.value))) {
       missingFields = true
       stringFields += "* El usuario debe contener letras" + "<br />"
    }
    if (validateForm.psw.value != validateForm.confirmPsw.value ) {
       missingFields = true
       stringFields += "* Las contraseñas no coinciden" + "<br />"
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

