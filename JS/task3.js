const block = document.getElementById("styleBlock");
const colorButton = document.getElementById("changeColor");
const fontButton = document.getElementById("changeFont");

colorButton.addEventListener("click", function() {
    block.style.backgroundColor = "lightblue";
});

fontButton.addEventListener("click", function() {
    block.style.fontSize = "24px";
});
