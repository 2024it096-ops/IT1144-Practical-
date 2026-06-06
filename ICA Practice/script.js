const title=document.getElementById("title");
const button=document.getElementById("logbtn");
const nameInput=document.getElementById("name");
const passwordInput=document.getElementById("psw");

button.addEventListener("click",function(){
	const namevalue=nameInput.value.trim();
	const passwordvalue=passwordInput.value.trim();
	
	if(namevalue===""|| passwordvalue===""){
		title.textContent="Please Fill All the Fields";
		title.style.color="orange";
		
	}
	else if(passwordvalue==="123"){
		alert("Login Successfull!");

		
	}
	else{
		title.textContent="Invalid Password!";
		title.style.color="red";
	}
		
	
});