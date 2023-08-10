import inboxIconPath from "./assets/images/inbox.png";
import listIconPath from "./assets/images/circle.png";
import deleteButtonIconPath from "./assets/images/trash-can.svg";
import "./reset.css";
import "./index.css";
import Task from "./Task";
import List from "./List";
import Storage from "./Storage";

export default class DomHandler {
    storage = new Storage();

    constructor() {
        this.addPageInitialStructure();
    }

    addPageInitialStructure(): void {
        document.body.innerHTML = `
			<div class="lists">
				<div class="lists__items"></div>
				<button class="lists__button">+ New List</button>
			</div>
			<div class="list-content">
				<h1 class="list-content__title">Inbox</h1>
				<div class="list-content__tasks"></div>
				<button class="list-content__button">+ New Task</button>
			</div>
        `;

        this.loadLists();
        this.loadListContent(0); // Inbox list id is 0
        this.addListButtonEventListener();
        this.addTaskButtonEventListener();
        this.addDeleteButtonEventListener();
    }

    addDeleteButtonEventListener() {
        const deleteButtonElement = document.getElementsByClassName(
            "list-content__delete-button"
        )[0];
        const currentTaskElement = deleteButtonElement?.parentElement;
        const taskListElement = document.getElementsByClassName(
            "list-content__tasks"
        )[0];
        let activeElement = document.getElementsByClassName(
            "lists__item lists__item--active"
        )[0] as HTMLElement;
        deleteButtonElement?.addEventListener("click", () => {
            if (!currentTaskElement) return;
            taskListElement?.removeChild(currentTaskElement);
            this.storage
                .getListById(Number(activeElement.dataset["id"]))
                .removeTask(Number(currentTaskElement.dataset["taskId"]));
        });
    }

    deleteLists = () => {
        const listsItemsElement =
            document.getElementsByClassName("lists__items")[0];

        while (listsItemsElement?.firstChild) {
            const lastChild = listsItemsElement.lastChild;
            if (lastChild) {
                listsItemsElement.removeChild(lastChild);
            }
        }
    };

    removeAllActiveStates = () => {
        const listsItemElements =
            document.getElementsByClassName("lists__item");

        for (let i = 0; i < listsItemElements.length; i++) {
            const element = listsItemElements[i];
            element?.classList.remove("lists__item--active");
        }
    };

    addActiveStateTo = (element: Element) => {
        element.className = "lists__item lists__item--active";
    };

    deleteListContent = () => {
        const title = document.getElementsByClassName("list-content__title")[0];
        if (title) title.textContent = "";

        const tasks = document.getElementsByClassName("list-content__tasks")[0];
        if (tasks) tasks.textContent = "";
    };

    addListButtonEventListener = () => {
        const listsItemsElement =
            document.getElementsByClassName("lists__items")[0];

        const newListButton =
            document.getElementsByClassName("lists__button")[0];

        newListButton?.addEventListener("click", () => {
            newListButton.className += "--hidden";
            const listInput = document.createElement("input");
            listInput.className = "lists__input";
            listInput.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    const textEntered = listInput.value;
                    listsItemsElement?.removeChild(listInput);
                    this.storage.addList(textEntered);
                    this.loadLists();
                    newListButton.className = "lists__button";
                }
            });
            listsItemsElement?.append(listInput);
        });
    };

    deleteTasks = () => {
        const listContentTasksElement = document.getElementsByClassName(
            "list-content__tasks"
        )[0];

        while (listContentTasksElement?.firstChild) {
            const lastChild = listContentTasksElement.lastChild;
            if (lastChild) {
                listContentTasksElement.removeChild(lastChild);
            }
        }
    };

    addCheckboxEventListener = (listId: number, taskId: number) => {
        const listContentTaskElement = document.querySelector(
            `[data-task-id='${taskId}']`
        );

        const checkbox =
            listContentTaskElement?.getElementsByTagName("input")[0];

        const taskText = listContentTaskElement?.getElementsByTagName("p")[0];

        checkbox?.addEventListener("click", () => {
            const lists = this.storage.getAllLists();

            let list = lists[listId];

            let tasks: Task[] = [];

            if (list != undefined) {
                tasks = list.getAllTasks();
            }

            let task = tasks[taskId];

            if (task != undefined) {
                if (task.isChecked) {
                    task.isChecked = false;
                    if (taskText) taskText.style.textDecoration = "none";
                } else {
                    task.isChecked = true;
                    if (taskText)
                        taskText.style.textDecoration = "line-through";
                }
            }
        });
    };

    loadListContent = (listId: number) => {
        this.deleteTasks();

        const listContentTitleElement = document.getElementsByClassName(
            "list-content__title"
        )[0];

        let currentList: List | null = null;

        if (listId != undefined) {
            currentList = this.storage.getListById(listId);
        }

        if (listContentTitleElement != undefined && currentList != null) {
            listContentTitleElement.textContent = currentList?.name;

            const listContentTasksElement = document.getElementsByClassName(
                "list-content__tasks"
            )[0];

            this.storage
                .getListById(listId)
                .getAllTasks()
                .forEach((task) => {
                    const newTaskElement = document.createElement("div");
                    newTaskElement.className = "list-content__task";
                    newTaskElement.dataset["taskId"] = task.id.toString();

                    const checkbox = document.createElement("input");
                    checkbox.className = "list-content__checkbox";
                    checkbox.type = "checkbox";

                    const taskText = document.createElement("p");
                    taskText.className = "list-content__text";
                    taskText.textContent = task.title;

                    if (task.isChecked) {
                        checkbox.checked = true;
                        taskText.style.textDecoration = "line-through";
                    }

                    const date = document.createElement("input");
                    date.type = "date";
                    date.className = "list-content__date";

                    const deleteButton = document.createElement("img");
                    deleteButton.className = "list-content__delete-button";
                    deleteButton.src = deleteButtonIconPath;
                    

                    newTaskElement.append(
                        checkbox,
                        taskText,
                        date,
                        deleteButton
                    );
                    listContentTasksElement?.append(newTaskElement);

                    this.addCheckboxEventListener(listId, task.id);
                });
        }
    };

    loadLists = () => {
        this.deleteLists();

        const listsItemsElement =
            document.getElementsByClassName("lists__items")[0];

        //! hardcoding lists
        const hardcodedLists = [
            {
                id: "0",
                name: "Inbox",
            },
            {
                id: "1",
                name: "Today",
            },
        ];

        hardcodedLists.forEach((list) => {
            //! change this to lists in the storage later
            const listElement = document.createElement("div");
            listElement.className = "lists__item";
            listElement.dataset["id"] = list.id;

            const listIcon = document.createElement("img");
            if (list.name == "Inbox") {
                listIcon.src = inboxIconPath;
                listIcon.className = "lists__inbox-icon";
                listElement.className = "lists__item lists__item--active";
            } else {
                listIcon.src = listIconPath;
                listIcon.className = "lists__list-icon";
            }

            const listText = document.createElement("span");
            listText.textContent = list.name;
            listText.className = "lists__text";

            listElement.addEventListener("click", () => {
                this.removeAllActiveStates();
                this.addActiveStateTo(listElement);
                this.deleteListContent();

                if (listElement.dataset["id"]) {
                    this.loadListContent(parseInt(listElement.dataset["id"]));
                }
            });

            listElement.append(listIcon, listText);
            listsItemsElement?.append(listElement);
        });
    };

    addTaskButtonEventListener = () => {
        const listContentTasksElement = document.getElementsByClassName(
            "list-content__tasks"
        )[0];

        const newTaskButton = document.getElementsByClassName(
            "list-content__button"
        )[0];

        newTaskButton?.addEventListener("click", () => {
            newTaskButton.className += "--hidden";
            const taskInput = document.createElement("input");
            taskInput.className = "list-content__input";
            taskInput.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    const textEntered = taskInput.value;
                    listContentTasksElement?.removeChild(taskInput);

                    //descobrindo qual elemento tá ativo no momento
                    let activeElement = document.getElementsByClassName(
                        "lists__item lists__item--active"
                    )[0] as HTMLElement;

                    let activeElementId = activeElement.dataset["id"];

                    if (activeElementId != null) {
                        this.storage
                            .getListById(parseInt(activeElementId))
                            ?.addTask(textEntered);
                        this.loadListContent(parseInt(activeElementId));
                    }

                    newTaskButton.className = "list-content__button";
                }
            });
            listContentTasksElement?.append(taskInput);
        });
    };
}
