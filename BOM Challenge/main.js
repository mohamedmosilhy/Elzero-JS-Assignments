let divInput = document.createElement("div");
let divOutput = document.createElement("div");
let innerDivOutput = document.createElement("div");
let outBox = document.createElement("div");
let input = document.createElement("input");
let btnAdd = document.createElement("button");

divInput.className = "input-div";

divOutput.className = "output-div";

outBox.className = "container";

btnAdd.className = "add";

input.type = "text";

btnAdd.textContent = "Add";

divInput.append(input, btnAdd);

outBox.append(divInput, divOutput);

document.body.append(outBox);

// Initialize tasks array and tasksNum
let tasks = [];
let tasksNum = -1;

// Retrieve tasks from localStorage (if available)
if (tasks.length === 0) {
  divOutput.style.backgroundColor = "white";
}
if (localStorage.getItem("tasks")) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    tasks = storedTasks;
    tasksNum = tasks.length; // Update tasksNum based on the existing tasks
  }
  for (const object of tasks) {
    divOutput.style.backgroundColor = "#d2cfcf";
    let innerDivOutput = document.createElement("div");
    let outSpan = document.createElement("span");
    let btnRemove = document.createElement("button");

    innerDivOutput.classList = "task";
    btnRemove.className = "remove";

    btnRemove.textContent = "Delete";
    outSpan.textContent = `${object["title"]}`;

    innerDivOutput.append(outSpan, btnRemove);
    divOutput.append(innerDivOutput);

    btnRemove.addEventListener("click", (e) => {
      const taskTitle = innerDivOutput.children[0].textContent;
      tasks = tasks.filter((task) => task.title !== taskTitle); // Remove the task from tasks array
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      innerDivOutput.remove();
    });
  }
}

// Add event listener to the "Add" button
btnAdd.addEventListener("click", () => {
  if (input.value !== "") {
    let innerDivOutput = document.createElement("div");
    let outSpan = document.createElement("span");
    let btnRemove = document.createElement("button");

    innerDivOutput.classList = "task";
    btnRemove.className = "remove";

    btnRemove.textContent = "Delete";
    outSpan.textContent = `${input.value}`;

    innerDivOutput.append(outSpan, btnRemove);
    divOutput.append(innerDivOutput);
    divOutput.style.backgroundColor = "#d2cfcf";

    let ob = { id: `${++tasksNum}`, title: `${input.value}` };
    tasks.push(ob); // Push the new task to the tasks array

    window.localStorage.setItem("tasks", JSON.stringify(tasks));

    btnRemove.addEventListener("click", () => {
      const taskTitle = innerDivOutput.children[0].textContent;
      tasks = tasks.filter((task) => task.title !== taskTitle); // Remove the task from tasks array
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      innerDivOutput.remove();
      if (tasks.length === 0) {
        divOutput.style.backgroundColor = "white";
      }
    });

    input.value = "";
  }
});
