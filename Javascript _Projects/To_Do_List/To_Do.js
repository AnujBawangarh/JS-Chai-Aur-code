document.getElementById("add-task-btn").addEventListener("click", function() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        taskInput.value = "";
        saveData()
    }
})

const taskList = document.getElementById("task-list");

taskList.addEventListener("click", function(e) {
if( e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
}
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");  
}
showTask();
