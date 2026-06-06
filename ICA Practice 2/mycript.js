const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const button=document.getElementById("send");
const button=document.getElementById("ok");

button.addEventListener("click"(),function{
	namevalue=nameInput.valu.trim();
	emailvalue=emailInput.valu.trim();
	
	if(namevalue==""||  emailvalue=""){
		alert("Space");
	}
	else if(!emailvalue.includes("@")||!emailvalue.includes(".")){
		alert("Invalid email");
	}
	else{
		alert("login Success");
	}
});