const list = document.getElementById("itemList");
const addButton = document.getElementById("addItem");
const removeButton = document.getElementById("removeItem");

addButton.addEventListener("click", function() {
    const item = document.createElement("li");
    item.textContent = "Item " + (list.children.length + 1);
    list.appendChild(item);
});

removeButton.addEventListener("click", function() {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});
