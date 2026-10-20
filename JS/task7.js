const firstInput = document.getElementById("firstNumber");
const secondInput = document.getElementById("secondNumber");
const result = document.getElementById("result");

function calculate(operation) {
    if (firstInput.value === "" || secondInput.value === "") {
        result.textContent = "Please enter both numbers.";
        return;
    }

    const a = Number(firstInput.value);
    const b = Number(secondInput.value);
    let answer;

    if (operation === "add") {
        answer = a + b;
    } else if (operation === "subtract") {
        answer = a - b;
    } else if (operation === "multiply") {
        answer = a * b;
    } else if (operation === "divide") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero.";
            return;
        }
        answer = a / b;
    }

    result.textContent = "Result: " + answer;
}

document.getElementById("add").addEventListener("click", function() {
    calculate("add");
});

document.getElementById("subtract").addEventListener("click", function() {
    calculate("subtract");
});

document.getElementById("multiply").addEventListener("click", function() {
    calculate("multiply");
});

document.getElementById("divide").addEventListener("click", function() {
    calculate("divide");
});
