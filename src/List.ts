// import Task from "./Task";

export default class List {
    private _id: number;
    private _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    // public addTask(title: string): void {
    //     let uniqueId: number = Math.random();
    //     let task: Task = new Task(uniqueId, title, this._name);
    //     try {
    //         localStorage.setItem(this._id.toString(), JSON.stringify(task));
    //     } catch (error) {
    //         //Local storage can be full, so we need to catch the error
    //         console.log(error);
    //     }
    // }

    // public removeTask(id: number): void {
        
    // }

    //Getters and Setters
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    // get tasks(): Task[] {
    //     return this._tasks;
    // }
}
