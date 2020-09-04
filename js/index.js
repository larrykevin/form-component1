let inputEmail = document.getElementById('femail'); 
let inputPassword = document.getElementById('fpassword'); 
let buttonSubmit = document.getElementById('buttonSubmit');
let messageAlert = document.getElementById('messagealert__content');
let alertContent = document.getElementById('alert__content');
let iconAlertContent = document.getElementById('error__icon');

buttonSubmit.addEventListener("click", function(){ 
   let inputLength = inputEmail.value.length;
   let passwordLength = inputPassword.value.length;
   if(inputLength < 4) {
      messageAlert.style.display = "flex";
   } else {
      messageAlert.style.display = "none";
   }
   if(passwordLength < 6) {
      alertContent.style.color = "#e20a4b";
      iconAlertContent.style.color = "#e20a4b";
   } else {
      alertContent.style.color = "#17ac44";
      iconAlertContent.style.color = "#17ac44";
   }
});
