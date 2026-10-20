const paragraph = document.getElementById("message");
const button = document.getElementById("changeText");

button.addEventListener("click", function() {
    paragraph.textContent = "The paragraph text has changed!";
});
