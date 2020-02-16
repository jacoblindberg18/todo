const todoItems = document.getElementById("todo-items");
const todoForm = document.getElementById("todo-form");
const todoItem = document.getElementById("todo-list-item");
const removeBtns = [];

function addListItem() {
    let item = $("#todo-list-item").val();

    let li = document.createElement("li");
    let a = document.createElement("a");
    // a.href = "#";
    li.textContent = todoItem.value;
    todoItems.prepend(li);
    li.appendChild(a);
    a.classList.add("remove");
    a.textContent = "x";
    removeBtn = document.querySelector(".remove");
    console.log("list item:", item);
}

function handleOnSubmit(event) {
    event.preventDefault();
    if (todoItem.value === "") {
        return;
    }
    addListItem();
}

todoForm.onsubmit = handleOnSubmit;
