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

    // 2. Regular Expression to validate proper email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // 3. Test the email against the pattern
    if (emailPattern.test(emailValue)) {
        // If correct: Success message (Green)
        title.textContent = "Success! Email is valid.";
        title.style.color = "green";
    } else {
        // If incorrect: Error message (Red)
        title.textContent = "Error: Invalid Email Format.";
        title.style.color = "red";
    }
});

/*

මෙන්න ඔබ ලබාදුන් JavaScript කේතය (code) එකින් එක පැහැදිලි කිරීම:

1. Element හඳුනාගැනීම (Selecting Elements)
JavaScript
const title = document.getElementById("title");
පැහැදිලි කිරීම: HTML ගොනුවේ (file) id="title" ලෙස නම් කර ඇති element එක (මෙහිදී <h1> ටැගය) සොයාගෙන, එය title නමැති නියතය (constant) තුල ගබඩා කරයි.

JavaScript
const button = document.getElementById("changebtn");
පැහැදිලි කිරීම: HTML ගොනුවේ id="changebtn" ලෙස ඇති Submit button එක සොයාගෙන, එය button නමැති නියතය තුල ගබඩා කරයි.

JavaScript
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
පැහැදිලි කිරීම: පරිශීලකයා (user) නම සහ ඊමේල් ඇතුලත් කරන input field දෙක, ඒවායේ ID (name සහ email) මඟින් හඳුනාගෙන පිළිවෙලින් nameInput සහ emailInput තුලට ලබාගනී.

2. Button එක Click කිරීම හසුරුවීම (Event Listener)
JavaScript
button.addEventListener("click", function() {
පැහැදිලි කිරීම: button එකට Click එකක් ලැබෙනවාදැයි බලා සිටීමට JavaScript ක්‍රියාත්මක කරයි (Listen කරයි). පරිශීලකයා බටන් එක ක්ලික් කල සැනින් මෙහි ඇති function() එක ඇතුලත තිබෙන කේත ක්‍රියාත්මක වීම ආරම්භ වේ.

3. අගයන් ලබාගැනීම (Getting Values)
JavaScript
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
පැහැදිලි කිරීම: පරිශීලකයා input කොටු තුල ටයිප් කර ඇති දත්ත .value මඟින් ලබාගනී. .trim() මඟින් එම දත්තයන්හි මුලට හෝ අගට වැරදීමකින් එකතු වී ඇති හිස්තැන් (Spaces) ඉවත් කරයි.

4. හිස්තැන් පරීක්ෂා කිරීම (Empty Field Validation)
JavaScript
    if (nameValue === "" || emailValue === "") {
        title.textContent = "Please fill in all fields.";
        title.style.color = "orange";
        return; 
    }
පැහැදිලි කිරීම: if කොන්දේසියෙන් පරිශීලකයා නම හෝ ( || කියන්නේ "හෝ" යන්නයි) ඊමේල් කොටුව හිස්ව තබා ඇත්දැයි බලයි.

හිස් නම්, title එකේ ඇති ලේඛනය "Please fill in all fields." ලෙස වෙනස් කර, එහි වර්ණය තැඹිලි (orange) කරයි.

return; මඟින් කේතය එතනින් නවත්වා දමයි (පහල තියෙන ඊමේල් පරීක්ෂාවට යන්න දෙන්නේ නැත).

5. Email ආකෘතිය පරීක්ෂා කිරීම (Email Format Validation)
JavaScript
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
පැහැදිලි කිරීම: මෙයට Regular Expression (Regex) එකක් යැයි කියනු ලැබේ. මෙයින් කරන්නේ නිවැරදි ඊමේල් එකක තිබිය යුතු සාමාන්‍ය ආකෘතිය (උදා: text + @ + text + .text) මෙන්න මේ වගේ එකක්දැයි හඳුනාගැනීමට රටාවක් (pattern) සකස් කිරීමයි.

JavaScript
    if (emailPattern.test(emailValue)) {
පැහැදිලි කිරීම: පරිශීලකයා ඇතුලත් කල ඊමේල් එක (emailValue), අප ඉහත සාදාගත් රටාවට (emailPattern) ගැලපේදැයි .test() මඟින් පරීක්ෂා කරයි.

6. ප්‍රතිඵලය පෙන්වීම (Displaying the Result)
JavaScript
        title.textContent = "Success! Email is valid.";
        title.style.color = "green";
පැහැදිලි කිරීම: ඊමේල් ආකෘතිය නිවැරදි නම් (if එක සත්‍ය නම්), title එකේ ලේඛනය "Success! Email is valid." ලෙස වෙනස් කර, අකුරු වල වර්ණය කොළ පාට (green) කරයි.

JavaScript
    } else {
        title.textContent = "Error: Invalid Email Format.";
        title.style.color = "red";
    }
});
පැහැදිලි කිරීම: ඊමේල් ආකෘතිය වැරදි නම් (else කොටස ක්‍රියාත්මක වේ), title එකේ ලේඛනය "Error: Invalid Email Format." ලෙස වෙනස් කර, අකුරු වල වර්ණය රතු පාට (red) කරයි. අවසානයේ බටන් එකේ function එක වසා දමයි (});).
*/