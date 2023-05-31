var parentElement = document.getElementById('pageholder');

var name_val = document.querySelector("#user");
name_val.addEventListener("click", nameDisp);

var task = document.getElementById("task");
task.addEventListener("click", taskadder);


var name_flag = "hidden";
var task_flag = "hidden";

var NameElement = document.createElement('iframe');
var TaskElement = document.createElement('iframe');

NameElement.style.width="100%";
TaskElement.style.width="100%"; 

function nameDisp() {
    if (name_flag != "hidden") {
        name_flag = "hidden";
        parentElement.removeChild(NameElement);
        console.log(name_flag)
    } else {
        name_flag = "show";
        NameElement.src = "/asset/components/vikram/index.html";
        parentElement.appendChild(NameElement);
        console.log(name_flag)
    }
}

function taskadder() {
    // Create the new element
    if (task_flag != "hidden") {
        task_flag = "hidden"
        parentElement.removeChild(TaskElement);
        return;
    } else {
        task_flag = "show";
        TaskElement.src = "/asset/components/assigned_task/index.html";
        // Get the reference to the parent element of the previously created element
        // Insert the new element as the last child of the parent element
        parentElement.appendChild(TaskElement);

    }

}

