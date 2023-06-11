import createTask from "./createTask";

const createList = (id, name) => {
    let tasks = [];
    let taskId = 0;

    const addTask = (taskTitle) => {
        let newTask = createTask(taskId, taskTitle);
        console.log("createList.js - newTask", newTask);
        let currentList = JSON.parse(localStorage.getItem(id));
        console.log(
            "createList.js - currentList just fetched from the localStorage",
            currentList
        );

        if (!currentList.hasOwnProperty("tasks")) {
            currentList.tasks = [newTask];
        } else {
            currentList.tasks.push(newTask);
        }

        localStorage.setItem(id, JSON.stringify(currentList));

        incrementTaskId();
    };

    const removeTask = (selectedTask) => {
        tasks.forEach((task) => {
            if (task.id == selectedTask.id) {
                tasks.splice(indexOf(selectedTask), 0);
            }
        });
    };

    const getAllTasks = () => {
        return tasks;
    };

    const incrementTaskId = () => {
        taskId += 1;
    };

    return { id, name, tasks, addTask, removeTask, getAllTasks };
};

export default createList;
