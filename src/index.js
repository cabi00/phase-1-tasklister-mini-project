document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
});

function addingEventListeners(){
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(event){
  event.preventDefault()
  //console.log(event)
  const task = event.target["new-task-description"].value
  //console.log(task)
  displayTask(task)
}

function displayTask(task){
  const ulTask = document.getElementById("tasks")
  //console.log(ulTask)
  const liTask = document.createElement("li")
  liTask.textContent = task
  //console.log(liTask)
  ulTask.appendChild(liTask)
}