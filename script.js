function addTask() {
    const taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const taskList = document.getElementById("taskList");
    taskList.style.padding = "20px";
    const span = document.createElement("span");
    const li = document.createElement("li");
    li.innerText = task;
    taskList.appendChild(span);
    span.appendChild(li);
    taskInput.value = "";

    const buttonContainer = document.createElement("div");
    span.appendChild(buttonContainer);


    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.className = "editbtn";
    buttonContainer.appendChild(editbtn);
    editbtn.addEventListener("click", function () {
        let newTask = prompt("Edit your task:", editbtn.parentNode.previousSibling.innerText);
        editbtn.parentNode.previousSibling.innerText = newTask;
        if (newTask === "" ) {
            alert("Task cannot be empty");
            let erroredit = prompt("Edit your task:", editbtn.parentNode.previousSibling.innerText);
            editbtn.parentNode.previousSibling.innerText = erroredit;}
        else if (newTask === null) {
            alert("Task cannot be empty");
            let erroredit = prompt("Edit your task:", editbtn.parentNode.previousSibling.innerText);
            editbtn.parentNode.previousSibling.innerText = erroredit;
        }

    })

    let completebtn = document.createElement("button");
    completebtn.innerText = "Complete";
    completebtn.className = "completebtn";
    buttonContainer.appendChild(completebtn);
    completebtn.addEventListener("click", function () {
        completebtn.parentNode.parentNode.style.opacity = "0.5";
        completebtn.parentNode.parentNode.style.backgroundColor = "#1a6308ff";
        completebtn.remove();
        editbtn.remove();
        li.style.textDecoration = "line-through";
    })


    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.className = "deletebtn";
    buttonContainer.appendChild(deletebtn);
    deletebtn.addEventListener("click", function () {
        deletebtn.parentNode.parentNode.remove();
        completebtn.remove();
        editbtn.remove();
    });

}





