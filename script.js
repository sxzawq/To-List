//alert('Caution! Still under development!');

const inputField = document.getElementById("input-field")
const listContainer = document.getElementById("list-container");

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("box", checkbox.checked);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

function addTask() {
    if((inputField.value === '')) {
        alert("Input field cannot be empty!") // displays this if the "add" button has been presses while the task is empty
    } else {
        let li = document.createElement("li");
        let label = document.createElement("label")
        //li.innerHTML = inputField.value; //this puts in the value of inputField which cannot be empty

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "todo[]";
        checkbox.value = "";

        label.appendChild(checkbox);
        label.append(inputField.value);

        //delete button
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "\u00d7";
        deleteButton.classList.add("delete-btn");

        deleteButton.onclick = function() {
            li.remove();
            saveData();
        };


        li.appendChild(label);
        li.appendChild(deleteButton);

        listContainer.appendChild(li); //this adds the above to the page so that its actually visible

        inputField.value = '';
        saveData();
    }
}

function clearTasks() {
    listContainer.innerHTML = "";
    localStorage.removeItem("data");
}

document.getElementById("clear").addEventListener("click", clearTasks);
document.getElementById("addTask").addEventListener("click", addTask); // adds a listener to the add task button so when it is clicked the addTask function is run


listContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
        saveData();
    }
});
