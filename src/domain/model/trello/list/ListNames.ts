import ListName from './ListName';

export default class ListNames {
    constructor(public readonly values: ListName[]) { }

    public contains(name: string): boolean {
        return this.values
            .some(item => item.value == name);
    }
}
