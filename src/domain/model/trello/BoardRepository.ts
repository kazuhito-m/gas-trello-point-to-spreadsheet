import Board from "./Board";
import TrelloSettings from "../../config/TrelloSettings";

export default interface BoardRepository {
    getOf(settings: TrelloSettings): Board;
}