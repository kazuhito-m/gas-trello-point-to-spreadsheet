import BoardRepository from '../../../domain/model/trello/BoardRepository';
import Board from '../../../domain/model/trello/Board';
import List from '../../../domain/model/trello/list/List';
import Lists from '../../../domain/model/trello/list/Lists';
import Cards from '../../../domain/model/trello/card/Cards';
import Card from '../../../domain/model/trello/card/Card';
import TrelloSettings from '../../../domain/model/config/TrelloSettings';

export default class BoardDatasource implements BoardRepository {
    public getOf(settings: TrelloSettings): Board {
        const boardId = settings.boardId;
        const authParam = this.makeAuthParam(settings);
        const boadsUrl = `https://api.trello.com/1/boards/${boardId}/lists?fields=name&${authParam}`;
        const lists: List[] = this.httpGetJson(boadsUrl)
            .map(i => new List(
                i.id,
                i.name,
                this.loadCards(i.id, settings),
            ));
        return new Board(new Lists(lists));
    }

    private loadCards(listId: string, settings: TrelloSettings): Cards {
        const authParam = this.makeAuthParam(settings);
        const listUrl = `https://api.trello.com/1/list/${listId}/cards?fields=name&${authParam}`;
        const cards: Card[] = this.httpGetJson(listUrl)
            .map(i => new Card(i.id, i.name));
        return new Cards(cards);
    }

    private makeAuthParam(settings: TrelloSettings): string {
        const apikey = settings.apiKey;
        const apiToken = settings.apiToken;
        return `key=${apikey}&token=${apiToken}`;
    }

    private httpGetJson(boadsUrl: string): any {
        const response = UrlFetchApp.fetch(boadsUrl);
        const jsonText = response.getContentText('UTF-8');
        return JSON.parse(jsonText);
    }
}
