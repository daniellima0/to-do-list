import storage from "./storage";
import inboxIconPath from "./assets/images/inbox.png";
import listIconPath from "./assets/images/circle.png";

const domHandler = (() => {
    const deleteLists = () => {
        const listsItemsElement =
            document.getElementsByClassName("lists__items")[0];

        while (listsItemsElement.firstChild) {
            listsItemsElement.removeChild(listsItemsElement.lastChild);
        }
    };

    const removeAllActiveStates = () => {
        const listsItemElements =
            document.getElementsByClassName("lists__item");

        for (let i = 0; i < listsItemElements.length; i++) {
            listsItemElements[i].className = "lists__item";
        }
    };

    const addActiveStateTo = (element) => {
        element.className = "lists__item lists__item--active";
    };

    const deleteListContent = () => {
        const title = document.getElementsByClassName("list-content__title")[0];
        title.textContent = "";
        const tasks = document.getElementsByClassName("list-content__tasks")[0];
        tasks.textContent = "";
    };

    const addListButtonEventListener = () => {
        const listsItemsElement =
            document.getElementsByClassName("lists__items")[0];

        const newListButton =
            document.getElementsByClassName("lists__button")[0];

        newListButton.addEventListener("click", () => {
            newListButton.className += "--hidden";
            const listInput = document.createElement("input");
            listInput.className = "lists__input";
            listInput.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    const textEntered = listInput.value;
                    listsItemsElement.removeChild(listInput);
                    storage.addList(textEntered);
                    reloadLists();
                    newListButton.className = "lists__button";
                }
            });
            listsItemsElement.append(listInput);
        });
    };

    const deleteTasks = () => {
        const listContentTasksElement = document.getElementsByClassName(
            "list-content__tasks"
        )[0];

        while (listContentTasksElement.firstChild) {
            listContentTasksElement.removeChild(
                listContentTasksElement.lastChild
            );
        }
    };

    const addCheckboxEventListener = (listId, taskId) => {
        const listContentTaskElement = document.querySelector(
            `[data-task-id='${taskId}']`
        );

        const checkbox =
            listContentTaskElement.getElementsByTagName("input")[0];

        const taskText = listContentTaskElement.getElementsByTagName("p")[0];

        checkbox.addEventListener("click", () => {
            if (storage.getAllLists()[listId].getAllTasks()[taskId].isChecked) {
                storage.getAllLists()[listId].getAllTasks()[
                    taskId
                ].isChecked = false;
                taskText.style.textDecoration = "none";
            } else {
                storage.getAllLists()[listId].getAllTasks()[
                    taskId
                ].isChecked = true;
                taskText.style.textDecoration = "line-through";
            }
        });
    };

    const reloadListContent = (listId) => {
        deleteTasks();

        const listContentTitleElement = document.getElementsByClassName(
            "list-content__title"
        )[0];

        listContentTitleElement.textContent = storage.getListById(listId).name;

        const listContentTasksElement = document.getElementsByClassName(
            "list-content__tasks"
        )[0];

        storage
            .getListById(listId)
            .getAllTasks()
            .forEach((task) => {
                const newTaskElement = document.createElement("div");
                newTaskElement.className = "list-content__task";
                newTaskElement.dataset.taskId = task.id;

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

                const date = document.createElement("div");
                date.className = "list-content__date";

                const dateIcon = document.createElement("img");
                date.className = "list-content__date-icon";

                const dateText = document.createElement("p");
                date.className = "list-content__date-text";

                date.append(dateIcon, dateText);

                newTaskElement.append(checkbox, taskText, date);
                listContentTasksElement.append(newTaskElement);

                addCheckboxEventListener(listId, task.id);
            });
    };

    const reloadLists = () => {
        deleteLists();

        const listsItemsElement =
            document.getElementsByClassName("lists__items")[0];

        storage.getAllLists().forEach((list) => {
            const listElement = document.createElement("div");
            listElement.className = "lists__item";
            listElement.dataset.id = list.id;

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
                removeAllActiveStates();
                addActiveStateTo(listElement);
                deleteListContent();
                reloadListContent(listElement.dataset.id);
            });

            listElement.append(listIcon, listText);
            listsItemsElement.append(listElement);
        });
    };

    const addTaskButtonEventListener = () => {
        const listContentTasksElement = document.getElementsByClassName(
            "list-content__tasks"
        )[0];

        const newTaskButton = document.getElementsByClassName(
            "list-content__button"
        )[0];

        newTaskButton.addEventListener("click", () => {
            newTaskButton.className += "--hidden";
            const taskInput = document.createElement("input");
            taskInput.className = "list-content__input";
            taskInput.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    const textEntered = taskInput.value;
                    listContentTasksElement.removeChild(taskInput);

                    //descobrindo qual elemento tá ativo no momento
                    let activeElement = document.getElementsByClassName(
                        "lists__item lists__item--active"
                    )[0];

                    storage
                        .getListById(activeElement.dataset.id)
                        .addTask(textEntered);
                    reloadListContent(activeElement.dataset.id);
                    newTaskButton.className = "list-content__button";
                }
            });
            listContentTasksElement.append(taskInput);
        });
    };

    const loadBasicStructure = () => {
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

        addListButtonEventListener();
        addTaskButtonEventListener();
    };

    const loadPageInitialState = () => {
        loadBasicStructure();
        storage.addDefaultList();
        reloadLists();
        reloadListContent(0);
    };

    return {
        loadPageInitialState,
    };
})();

export default domHandler;
