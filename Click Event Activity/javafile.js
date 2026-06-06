const title = document.getElementById("title");
const button = document.getElementById("changebtn");

// Fixed: Added correct parentheses, lowercase "function", and proper syntax
button.addEventListener("click", function() {
    title.textContent = "Button Clicked";
    title.style.color = "red";
});

/*
ඔබ ලබාදුන් මුල් JavaScript කේතය (code) එකින් එක සිංහලෙන් ඉතා සරලව පැහැදිලි කිරීම මෙන්න:

1. Element හඳුනාගැනීම (Selecting HTML Elements)
JavaScript
const title = document.getElementById("title");
සරල සිංහලෙන්: HTML පිටුවේ id="title" කියලා තියෙන Element එක (අපේ උදාහරණයේ හැටියට <h1> ටැග් එක) ජාවාස්ක්‍රිප්ට් මඟින් සොයාගෙන, එය පසුව පාවිච්චි කිරීම සඳහා title කියන නමින් මතක තබා ගන්නවා (Variable එකක් ලෙස ගබඩා කරනවා).

JavaScript
const button = document.getElementById("changebtn");
සරල සිංහලෙන්: HTML පිටුවේ id="changebtn" කියලා තියෙන Button (බොත්තම) එක සොයාගෙන, එය පසුව පාවිච්චි කිරීම සඳහා button කියන නමින් ගබඩා කර ගන්නවා.

2. බොත්තම ක්ලික් කිරීම හසුරුවීම (Event Listener)
JavaScript
button.addEventListener("click", function() {
සරල සිංහලෙන්: අපි ඉහත හඳුනාගත් බොත්තමට (button) "Event Listener" එකක් එකතු කරනවා. මෙයින් කියන්නේ: "පරිශීලකයා (User) මේ බොත්තම මත 'click' එකක් කරනකම් බලාගෙන ඉන්න" කියන එකයි.

යම් හෙයකින් පරිශීලකයා බොත්තම ක්ලික් කල සැනින්, මෙහි ඇති function() එක (එනම් මේ වරහන් ඇතුලත තියෙන කේත කොටස) ක්‍රියාත්මක වීම ආරම්භ වෙනවා.

3. ක්‍රියාව සිදුකිරීම (Executing the Action)
JavaScript
    title.textContent = "Button Clicked";
සරල සිංහලෙන්: බොත්තම ක්ලික් වූ සැනින්, අපි මුලින්ම සොයාගත් title (එනම් <h1> ටැග් එක) ඇතුලත තියෙන අකුරු/text එක "Button Clicked" ලෙස වෙනස් කරනවා.

JavaScript
    title.style.color = "red";
සරල සිංහලෙන්: එම title එකේ CSS Style එක වෙනස් කරමින්, එහි අකුරු වල වර්ණය (Color) රතු පාට (red) බවට පත් කරනවා.

JavaScript
});
සරල සිංහලෙන්: බොත්තම ක්ලික් වූ විට සිදුවිය යුතු ක්‍රියාවලිය (Function එක) මෙතනින් අවසන් වන බව දක්වනවා.
*/