const todoItems = document.getElementById("todo-items");
const todoForm = document.getElementById("todo-form");
const todoItem = document.getElementById("todo-list-item");

if ("todoitems" in localStorage) {
    todoItems.innerHTML += localStorage.getItem("todoitems");
}

function addCheckbox(li) {
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.name = "done";
    checkbox.setAttribute("id", "checkbox");
    li.prepend(checkbox);
}

function createListItem() {
    let item = $("#todo-list-item").val();

    let li = document.createElement("li");
    let a = document.createElement("a");
    addCheckbox(li);
    li.innerHTML += `<span>${item}</span>`;

    todoItems.prepend(li);
    li.classList.add("list-item");
    li.appendChild(a);
    a.textContent = "x";
    a.classList.add("remove");
    localStorage.setItem("todoitems", todoItems.innerHTML);
}

function handleOnSubmit(event) {
    event.preventDefault();
    if (todoItem.value === "") {
        return;
    }
    createListItem();
    document.getElementById("todo-form").reset();
}

todoForm.onsubmit = handleOnSubmit;

todoItems.addEventListener("change", event => {
    let checkbox = event.target;
    let parent = checkbox.parentElement;
    let sibling = document.getElementById("checkbox").nextSibling;

    if (checkbox.checked === true) {
        document.getElementById("checkbox").setAttribute("checked", 0);
        sibling.classList.add("completed");
        localStorage.setItem("todoitems", todoItems.innerHTML);
    } else if (checkbox.checked === false) {
        document.getElementById("checkbox").removeAttribute("checked", 0);
        sibling.classList.remove("completed");
        localStorage.setItem("todoitems", todoItems.innerHTML);
    }
});

todoItems.addEventListener("click", event => {
    let target = event.target;
    let hasRemoveClass = target.className;

    if (hasRemoveClass === "remove") {
        let li = target.parentElement;
        todoItems.removeChild(li);
        localStorage.setItem("todoitems", todoItems.innerHTML);
    }
});
