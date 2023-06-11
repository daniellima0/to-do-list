import createList from "./createList";

const storage = (() => {
    let lists = [];
    let listId = 0;

    const addDefaultList = () => {
        let defaultList = createList(0, "Inbox");
        localStorage.setItem(0, JSON.stringify(defaultList));
        defaultList.addTask("bbbbbbb");
        lists.push(defaultList);
        incrementListId();
    };

    const addList = (name) => {
        let newList = createList(listId, name);
        localStorage.setItem(listId, JSON.stringify(newList));
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
        addDefaultList,
        addList,
        removeList,
        getListById,
        getAllLists,
    };
})();

export default storage;
