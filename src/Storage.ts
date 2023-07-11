export default class Storage {
    public addList(name: string): void {
        //     let uniqueId: number = Math.random();
        //     try {
        //         localStorage.setItem(uniqueId.toString(), name);
        //     } catch (error) {
        //         //Local storage can be full, so we need to catch the error
        //         console.log(error);
        //     }
    }

    public removeList(id: number): void {}

    public getListById(id: number): any {
        return {};
    }

    public getAllLists(): any[] {
        return [];
    }
}
