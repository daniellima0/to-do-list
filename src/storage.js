import createList from "./createList";

const storage = (() => {
    let listId = 0;

    const addList = (name) => {
        let newList = createList(listId, name);
        localStorage.setItem(listId, JSON.stringify(newList));
        console.log(localStorage);
        incrementListId();
    };

    const removeList = (selectedList) => {
        // Remove the list from localStorage
        localStorage.removeItem(selectedList.id);
    };

    const getListById = (listId) => {
        let listString = localStorage.getItem(listId);
        let listData = JSON.parse(listString);
        let list = createList(listData.id, listData.name);
        listData.tasks.forEach((taskData) => {
            list.addTask(taskData.title, taskData.isChecked);
        });
        return list;
    };

    const getAllLists = () => {
        let lists = [];
        for (let i = 0; i < localStorage.length; i++) {
            let listData = JSON.parse(
                localStorage.getItem(localStorage.key(i))
            );

            console.log(listData);

            let list = createList(listData.id, listData.name);
            listData.tasks.forEach((taskData) => {
                list.addTask(taskData.title, taskData.isChecked);
            });
            lists.push(list);
        }
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

export default storage;
