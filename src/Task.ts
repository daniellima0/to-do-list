export default class Task {
    private _id: number;
    private _title: string;
    private _list: string;
    private _isChecked: boolean;

    constructor(
        id: number,
        title: string,
        list: string,
        isChecked: boolean = false
    ) {
        this._id = id;
        this._title = title;
        this._list = list;
        this._isChecked = isChecked;
    }

    public printTask(): void {
        console.log(
            `ID: ${this._id}\nTitle: ${this._title}\nList: ${this._list}\nChecked: ${this._isChecked}`
        );
    }

    public toggleCheck(): void {
        this._isChecked = !this._isChecked;
    }

    //Getters and setters
    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get list(): string {
        return this._list;
    }

    get isChecked(): boolean {
        return this._isChecked;
    }
}
