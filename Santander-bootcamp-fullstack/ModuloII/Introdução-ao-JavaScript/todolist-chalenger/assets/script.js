const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

const allInputs = [];

taskList.addEventListener('click', () => {
  const allTasks = [];

  for (let index = 0; index <= allInputs.length; index++) {
    const task = document.getElementById(allInputs[index]);

    if (task) {
      const getIdValue = task.getAttribute('id');
      allTasks.push(getIdValue);

      if (task.checked) {
        task.labels[0]
        .setAttribute("style", "text-decoration: line-through;");
      } else {
        task.labels[0]
        .removeAttribute("style");
      }
    }
  }
})

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
  allInputs.push(inputField.value);
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}


