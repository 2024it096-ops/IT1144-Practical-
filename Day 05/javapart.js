const title=document.getElementById("title");
const button=document.getElementById("changebtn");

button.addEventListener("click",function()
{
	title.textContent ="Button Clicked");
	title.style.color ="red";
});
