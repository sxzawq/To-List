//alert('Caution! Still under development!');

const inputField = document.getElementById("input-field")
const listContainer = document.getElementById("list-container");

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
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

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "todo[]";
        checkbox.value = "";

        label.appendChild(checkbox);
        label.append(inputField.value);

        li.appendChild(label);
        listContainer.appendChild(li); //this adds the above to the page so that its actually visible

        inputField.value = '';
        saveData();
    }
}


document.getElementById("addTask").addEventListener("click", addTask); // adds a listener to the add task button so when it is clicked the addTask function is run