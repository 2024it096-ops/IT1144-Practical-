const title = document.getElementById("title");
const button = document.getElementById("changebtn");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

button.addEventListener("click", function() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    // 1. Check if both fields are filled out
    if (nameValue === "" || emailValue === "") {
        title.textContent = "Please fill in all fields.";
        title.style.color = "orange";
        return; // Stop execution here
    }
	else if(!emailValue.includes('@')||!emailValue.includes('.')){
		title.textContent = "Error: Invalid Email Format.";
        title.style.color = "red";

	}
	else{
		title.textContent = "Success! Email is valid.";
        title.style.color = "green"
	
}




});
