import Task from "./Task";

export default class List {
    id: number;
    name: string;
    tasks: Task[] = [];

    constructor(name: string) {
        this.id = this.generateId();
        this.name = name;
        this.tasks = [];
    }

    generateId(): number {
        return Math.floor(Math.random() * 1000000); // Adjust the multiplier as needed to get the desired range for the integer.
    }

    addTask(title: string): void {
        let task = new Task(title, this.id);
        let returnedString = localStorage.getItem(this.id.toString());
        if (returnedString != null) {
            let returnedObject = JSON.parse(returnedString);
            console.log(returnedObject);
            let currentList = new List(returnedObject.name);
            currentList.id = returnedObject.id;
            currentList.tasks = returnedObject.tasks;
            currentList.tasks.push(task);
            localStorage.setItem(
                this.id.toString(),
                JSON.stringify(currentList)
            );
        }
    }

    removeTask(taskId: number): void {
        let returnedString = localStorage.getItem(this.id.toString());
        if (returnedString != null) {
            let returnedObject = JSON.parse(returnedString);
            console.log(returnedObject);
            let currentList = new List(returnedObject.name);
            currentList.id = returnedObject.id;
            currentList.tasks = returnedObject.tasks;
            currentList.tasks.forEach((task) => {
                if (task.id == taskId) {
                    currentList.tasks.splice(
                        currentList.tasks.indexOf(task),
                        1
                    );
                }
            });
            localStorage.setItem(
                this.id.toString(),
                JSON.stringify(currentList)
            );
        }
    }

    toggleCheckOfTask(taskId: number): void {
        // Todo: get the task from localStorage and toggle the isChecked property
        let listString = localStorage.getItem(taskId.toString());

        if (!listString) return;

        let list: List = JSON.parse(listString);

        let task = list.tasks[taskId];

        if (task != undefined) {
            task.isChecked = !task.isChecked;
        }
    }

    setDateOfTask(taskId: number, newDate: string): void {
        console.log(newDate);
        let returnedString = localStorage.getItem(this.id.toString());
        if (returnedString != null) {
            let returnedObject = JSON.parse(returnedString);
            console.log(returnedObject);
            let currentList = new List(returnedObject.name);
            currentList.id = returnedObject.id;
            currentList.tasks = returnedObject.tasks;
            currentList.tasks.forEach((task) => {
                if (task.id == taskId) {
                    task.date = newDate;
                }
            });
            localStorage.setItem(
                this.id.toString(),
                JSON.stringify(currentList)
            );
        }
    }

    getAllTasks(): Task[] {
        let listString = localStorage.getItem(this.id.toString());

        if (!listString) return [];

        let list: List = JSON.parse(listString);

        return list.tasks;
    }
}
