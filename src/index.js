import './reset.css';
import './index.css';
import inboxIconPath from './assets/images/inbox.png';
import listIconPath from './assets/images/circle.png';

const createTask = (id, title, description, dueDate, priority, list) => {
	return { id, title, description, dueDate, priority, list };
};

const createList = (id, name) => {
	let tasks = [];
	let taskId = 0;

	const addTask = (taskTitle) => {
		let newTask = createTask(taskId, taskTitle);
		tasks.push(newTask);
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

	return { id, name, addTask, removeTask, getAllTasks };
};

const storage = (() => {
	let defaultList = createList(0, 'Inbox');
	defaultList.addTask('aaaaa');
	let lists = [defaultList];
	let listId = 1;

	const addList = (name) => {
		let newList = createList(listId, name);
		lists.push(newList);
		incrementListId();
	};

	const removeList = (selectedList) => {
		lists.forEach((list) => {
			if (list.id == selectedList.id) {
				lists.splice(indexOf(selectedList), 0);
			}
		});
	};

	const getListById = (listId) => {
		return lists[listId];
	};

	const getAllLists = () => {
		return lists;
	};

	const incrementListId = () => {
		listId += 1;
	};

	return {
		addList,
		removeList,
		getListById,
		getAllLists,
	};
})();

const domHandler = (() => {
	const renderPage = () => {
		loadPageBasicStructure();
		loadLists();
		loadListContent(0);
	};

	const loadPageBasicStructure = () => {
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
	};

	const removeAllActiveStates = () => {
		const listsItemElements =
			document.getElementsByClassName('lists__item');

		for (let i = 0; i < listsItemElements.length; i++) {
			listsItemElements[i].className = 'lists__item';
		}
	};

	const addActiveStateTo = (element) => {
		element.className = 'lists__item lists__item--active';
	};

	const deleteListContent = () => {
		const title = document.getElementsByClassName('list-content__title')[0];
		title.textContent = '';
		const tasks = document.getElementsByClassName('list-content__tasks')[0];
		tasks.textContent = '';
	};

	const loadLists = () => {
		const listsItemsElement =
			document.getElementsByClassName('lists__items')[0];

		storage.getAllLists().forEach((list) => {
			const listElement = document.createElement('div');
			listElement.className = 'lists__item';
			listElement.dataset.id = list.id;

			const listIcon = document.createElement('img');
			if (list.name == 'Inbox') {
				listIcon.src = inboxIconPath;
				listIcon.className = 'lists__inbox-icon';
				listElement.className = 'lists__item lists__item--active';
			} else {
				listIcon.src = listIconPath;
				listIcon.className = 'lists__list-icon';
			}

			const listText = document.createElement('span');
			listText.textContent = list.name;
			listText.className = 'lists__text';

			listElement.addEventListener('click', () => {
				removeAllActiveStates();
				addActiveStateTo(listElement);
				deleteListContent();
				loadListContent(listElement.dataset.id);
			});

			listElement.append(listIcon, listText);
			listsItemsElement.append(listElement);
		});
	};

	const loadListContent = (listId) => {
		const listContentTitleElement = document.getElementsByClassName(
			'list-content__title'
		)[0];

		listContentTitleElement.textContent = storage.getListById(listId).name;

		const listContentTasksElement = document.getElementsByClassName(
			'list-content__tasks'
		)[0];

		storage
			.getListById(listId)
			.getAllTasks()
			.forEach((task) => {
				const newTaskElement = document.createElement('div');
				newTaskElement.className = 'list-content__task';

				const checkbox = document.createElement('input');
				checkbox.className = 'list-content__checkbox';
				checkbox.type = 'checkbox';

				const taskText = document.createElement('p');
				taskText.className = 'list-content__text';
				taskText.textContent = task.title;

				newTaskElement.append(checkbox, taskText);
				listContentTasksElement.append(newTaskElement);
			});
	};

	const addNewList = (listId) => {
		const listsItemsElement =
			document.getElementsByClassName('lists__items')[0];

		storage.getAllLists().forEach((list) => {
			console.log('list.id: ', list.id);
			console.log('listId: ', listId);
			if (list.id < listId) {
				return;
			}

			const listElement = document.createElement('div');
			listElement.className = 'lists__item';
			listElement.dataset.id = list.id;

			const listIcon = document.createElement('img');
			if (list.name == 'Inbox') {
				listIcon.src = inboxIconPath;
				listIcon.className = 'lists__inbox-icon';
				listElement.className = 'lists__item lists__item--active';
			} else {
				listIcon.src = listIconPath;
				listIcon.className = 'lists__list-icon';
			}

			const listText = document.createElement('span');
			listText.textContent = list.name;
			listText.className = 'lists__text';

			listElement.addEventListener('click', () => {
				removeAllActiveStates();
				addActiveStateTo(listElement);
				deleteListContent();
				loadListContent(listElement.dataset.id);
			});

			listElement.append(listIcon, listText);
			listsItemsElement.append(listElement);
		});
	};

	return {
		renderPage,
		addNewList,
	};
})();

storage.addList('Personal');
storage.getListById(1).addTask('bbbb');
storage.getListById(1).addTask('bbbb');
storage.getListById(1).addTask('bbbb');
storage.addList('Work');
storage.getListById(2).addTask('cccc');

domHandler.renderPage();

const listItemsElement = document.getElementsByClassName('lists__items')[0];
const newListButton = document.getElementsByClassName('lists__button')[0];
newListButton.addEventListener('click', () => {
	newListButton.className += '--hidden';
	const input = document.createElement('input');
	input.className = 'lists__input';
	input.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			const textEntered = input.value;
			listItemsElement.removeChild(input);
			storage.addList(textEntered);
			const lastListId = storage.getAllLists().at(-1).id;
			domHandler.addNewList(lastListId);
			newListButton.className = 'lists__button';
		}
	});
	listItemsElement.append(input);
});

/*Organizando objetos:
- 

*/

//Antigos To dos
//Todo: Add event listeners to new list and new task buttons
//Todo: Put a line in the middle of a completed task
//Todo: Implement API
