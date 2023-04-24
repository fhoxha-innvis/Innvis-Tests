const form = document.getElementById("form");
const firstname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const button = document.getElementById("enter");


function inputLength(param) {
	return param.value.length;
}

function validateInput(input){
    if (inputLength(input) == 0 || input=="") {
		 input.style.border ="1px solid red";
         return false;
	}else if(inputLength(input) > 0){
        input.style.border = "none";
        return true;

    }
}
function addBorderAfterClick() {
	validateInput(firstname)
    validateInput(email)
    validateInput(phone)
    validateInput(message)
    return validateInput(firstname) && validateInput(email) && validateInput(phone) &&  validateInput(message)
}

document.querySelectorAll("input, textarea").forEach(item => {

   item.addEventListener("keydown" ,function(){
    if(item.style.border="1px solid red" && document.querySelector("#contact-from .container .contact-from-container .success-message").style.visibility == "visible"){
        item.style.border="none"
        document.querySelector("#contact-from .container .contact-from-container .success-message").style.visibility = "hidden"
    }
   });
    
    
})

function successMessage(){
    if (addBorderAfterClick()){
        document.querySelector("#contact-from .container .contact-from-container .success-message").style.visibility = "visible";
    }
}


button.addEventListener("click", () => {
    addBorderAfterClick();
    successMessage();
});





