import Lists from './list/Lists';

export default class Board {
    constructor(private lists: Lists) {}

    public allLists(): Lists {
        return this.lists;
    }
}
