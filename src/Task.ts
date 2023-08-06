export default class Task {
    id: number;
    title: string;
    listId: number;
    isChecked: boolean;

    constructor(title: string, listId: number, isChecked: boolean = false) {
        this.id = this.generateId();
        this.title = title;
        this.listId = listId;
        this.isChecked = isChecked;
    }

    generateId(): number {
        return Math.floor(Math.random() * 1000000); // Adjust the multiplier as needed to get the desired range for the integer.
    }

    printTask(): void {
        console.log(
            `ID: ${this.id}\nTitle: ${this.title}\nListId: ${this.listId}\nChecked: ${this.isChecked}`
        );
    }
}
