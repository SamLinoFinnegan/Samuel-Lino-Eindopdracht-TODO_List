//---------------------------------- variables -------------------------------------------------//
const myList = document.getElementById("myMainDiv");
const myButton = document.getElementById("myB");
const myTaskInput = document.getElementById("myInput");



//---------------------------------- funtions -------------------------------------------------//

//------ write to the DOM --------------//

const addToDom = async (tasks) => {
    myList.innerHTML = "";
    // task Div
    tasks.forEach((task) => {
        const taskDiv = document.createElement('div');
        taskDiv.setAttribute("id", task._id);
        taskDiv.classList.add("myTaskList");
        // task Li 
        const taskLi = document.createElement('input');
        taskLi.setAttribute("value", task.description);
        taskLi.classList.add("myTask");
        taskDiv.appendChild(taskLi);
        // task Check
        const checkBtn = document.createElement('input');
        checkBtn.setAttribute("type", "checkbox");
        checkBtn.classList.add("check_button");
        taskDiv.appendChild(checkBtn);
        // task Delete
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("delete_button");
        deleteBtn.innerHTML = '<i id="trashIcon" class="fas fa-trash-alt"></i>';
        taskDiv.appendChild(deleteBtn);
        // task Change
        const changeBtn = document.createElement('button');
        changeBtn.classList.add("change_button");
        changeBtn.innerText = "Change"
        taskDiv.appendChild(changeBtn);
        // Append to page
        myList.appendChild(taskDiv);
        myTaskInput.value = ""
    });

};

//---------- Post new tasks -----------// 

const postTasks = () => {
    const task = document.getElementById("myInput").value;
    const theTask = { description: task, done: false };
    postData(theTask).then(() => getData().then(data => addToDom(data)));
};
//---------- Alter tasks -----------// 

const deleteCheckAndChangeTask = (e) => {
    const item = e.target;
    if (item.classList[0] === "delete_button") {
        const task = item.parentElement;
        const id = item.parentElement.id;
        task.remove();
        deleteData(id).then(() => getData().then(data => addToDom(data)));
    }
    else if (item.classList[0] === "check_button") {
        const task = item.previousSibling;
        task.classList.toggle("done");
    }
    else if (item.classList[0] === "change_button") {
        const newData = document.querySelector(".myTask").value;
        const id = item.parentElement.id;
        const status = true;
        changeData(id, newData, status).then(() => getData().then(data => addToDom(data)));
    };

};

//-------------------------------- event listerners -------------------------------------------//

myButton.addEventListener("click", postTasks);

myList.addEventListener("click", deleteCheckAndChangeTask);
