import createTask from "./createTask";

const createList = (id, name) => {
    // let tasks = [];
    let taskId = 0;

    const addTask = (taskTitle) => {
        let newTask = createTask(taskId, taskTitle);
        let currentList = JSON.parse(localStorage.getItem(id));
        currentList.tasks.push(newTask);
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
        let tasks = JSON.parse(localStorage.getItem(id)).tasks;
        return tasks;
    };

    const incrementTaskId = () => {
        taskId += 1;
    };

    return { id, name, addTask, removeTask, getAllTasks };
};

export default createList;