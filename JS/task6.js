const input = document.getElementById("liveInput");
const output = document.getElementById("liveOutput");

input.addEventListener("keyup", function() {
    output.textContent = input.value;
});
