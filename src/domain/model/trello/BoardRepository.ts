import Board from './Board';
import TrelloSettings from '../../model/config/TrelloSettings';

export default interface BoardRepository {
    getOf(settings: TrelloSettings): Board;
}
