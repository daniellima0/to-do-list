import List from "./List";

export default class Storage {
    constructor() {
        this.addInboxList();
    }

    addInboxList(): void {
        if (localStorage.getItem("0") != null) return;
        let list = new List("Inbox");
        list.id = 0;
        localStorage.setItem(list.id.toString(), JSON.stringify(list));
    }

    addList(name: string): void {
        // Todo: check if a list with this name exists, if not throw an error
        let list = new List(name);
        localStorage.setItem(list.id.toString(), JSON.stringify(list));
    }

    removeList(id: number): void {
        // Todo: check if a list with this name exists, if not throw an error
        localStorage.removeItem(id.toString());
    }

    getListById(id: number): List {
        // Todo: check if a list with this id exists, if not throw an error
        let item = localStorage.getItem(id.toString());
        if (!item) return new List("");

        let objectReturned = JSON.parse(item);

        let list = new List(objectReturned.name);
        list.id = objectReturned.id;
        list.tasks = objectReturned.tasks;

        return list;
    }

    getAllLists(): List[] {
        let lists: List[] = [];

        (Object.keys(localStorage) as (keyof typeof localStorage)[]).forEach(
            (key) => {
                let returnedString = localStorage.getItem(key.toString());
                if (returnedString != null) {
                    let returnedObject = JSON.parse(returnedString);
                    let currentList = new List(returnedObject.name);
                    currentList.id = returnedObject.id;
                    currentList.tasks = returnedObject.tasks;
                    lists.push(currentList);
                }
            }
        );
        return lists;
    }
}
