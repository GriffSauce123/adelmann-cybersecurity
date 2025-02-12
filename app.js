const copyEmail = document.getElementById("copyEmail");
const copyPhone = document.getElementById("copyPhone");


function copyContact(text) {
  
  navigator.clipboard.writeText(text);

  //turn copy button into checkmark
  alert(`Copied: ${text}`)
} 

copyEmail.addEventListener("click", () => {copyContact("contact@griffinadelmann.com")});
copyPhone.addEventListener("click", () => {copyContact(copyPhone.innerHTML)});