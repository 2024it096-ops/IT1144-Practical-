
const title = document.getElementById("title");
const button = document.getElementById("logbtn");
const nameInput = document.getElementById("name");
const passwordInput = document.getElementById("psw");

if (button) {
	button.addEventListener("click", function(){
		const namevalue = nameInput.value.trim();
		const passwordvalue = passwordInput.value.trim();
		
		if(namevalue === "" || passwordvalue === ""){
			if(title) {
				title.textContent = "Please Fill All the Fields";
				title.style.color = "orange";
			}
		}
		else if(passwordvalue === "123"){
			alert("Login Successful!");
		}
		else{
			if(title) {
				title.textContent = "Invalid Password!";
				title.style.color = "red";
			}
		}
	});
}

function startSlider(cardSelector) {
	const slides = document.querySelectorAll(`${cardSelector} .slide`);
	let currentIndex = 0;

	if (slides.length > 0) {
		setInterval(() => {
			slides[currentIndex].classList.remove('active');
			currentIndex = (currentIndex + 1) % slides.length;
			slides[currentIndex].classList.add('active');
		}, 3000); 
	}
}

startSlider('.card1');
startSlider('.card2');


function validateSignup(event) {
	event.preventDefault(); 

	const name = document.getElementById("name").value.trim();
	const nic = document.getElementById("nic").value.trim();
	const address = document.getElementById("address").value.trim();
	const mno = document.getElementById("mno").value.trim();
	const email = document.getElementById("email").value.trim();
	const course = document.getElementById("course").value;
	
	const genderRadio = document.querySelector('input[name="gen"]:checked');
	const gender = genderRadio ? genderRadio.value : "Not Specified";

	if (name === "" || nic === "" || address === "" || mno === "" || email === "") {
		alert("Please fill in all fields!");
		return false;
	}

	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	if (!emailPattern.test(email)) {
		alert("Please enter a valid E-mail address! (e.g. example@gmail.com)");
		return false;
	}

	const successMessage = 
		"Registration Successful!\n\n" +
		"--- Entered Data ---\n" +
		"Name: " + name + "\n" +
		"NIC No: " + nic + "\n" +
		"Address: " + address + "\n" +
		"Gender: " + gender + "\n" +
		"Mobile No: " + mno + "\n" +
		"E-mail: " + email + "\n" +
		"Course: " + course;

	alert(successMessage);
	
	document.getElementById("signupForm").reset();
	return true;
}


function handleContactSubmit(event) {
	event.preventDefault();

	const nameEl = document.getElementById("cfname");
	const emailEl = document.getElementById("cfemail");
	const courseEl = document.getElementById("cfcourse");
	const messageEl = document.getElementById("textarea");

	if (nameEl && emailEl && courseEl && messageEl) {
		const name = nameEl.value.trim();
		const email = emailEl.value.trim();
		const course = courseEl.value.trim();
		const message = messageEl.value.trim();


		if (name === "" || email === "" || course === "" || message === "") {
			alert("Please fill out all the fields in the form!");
			return false;
		}

		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!emailPattern.test(email)) {
			alert("Please enter a valid E-mail address!");
			return false;
		}

		const alertMessage = 
			"Message Sent Successfully!\n\n" +
			"--- Contact Details ---\n" +
			"Name: " + name + "\n" +
			"Email: " + email + "\n" +
			"Course: " + course + "\n" +
			"Message/Problem: " + message;


		alert(alertMessage);

		document.getElementById("contactForm").reset();
		return true;
	}
	return false;
}