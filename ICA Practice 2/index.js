const name=document.getElementById("name");
const email=document.getElementById("email");
const dlist=document.getElementById("dlist");
const radio=document.getElementById("radio");
const button=document.getElementById("send");
const colorbtn=document.getElementById("colorbtn");
const box=document.querySelector(".colorbox");

button.addEventListener("click",function(){
	namevalue=name.value.trim();
	emailvalue=email.value.trim();
	dlistvalue=dlist.value.trim();
	radiotvalue=radio.value.trim();
	
	if(namevalue===""||emailvalue===""||dlistvalue===""||radiovalue===""){
		alert("Please Fill All the Fields");
	}
	else(!emailvalue.includes("@")||!emailvalue.includes("."))
		alert("Invalid Email!");
		

	
	
});
colorbtn.addEventListener("click",function(){
	box.style.backgroundColor="green";
});


