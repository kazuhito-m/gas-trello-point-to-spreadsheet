import ListNames from "../../model/trello/list/ListNames";
import ListName from "../../model/trello/list/ListName";

export default class TrelloSettings {
    constructor(
        public readonly apiKey: string,
        public readonly apiToken: string,
        public readonly boardId: string,
        private readonly todoListNames: string
    ) { }

    public pontTargetlistNames(): ListNames {
        const names = this.todoListNames
            .split(',')
            .map(i => new ListName(i));
        return new ListNames(names);
    }
}
