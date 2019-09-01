import TrelloPointToSpreadSheetServcie from './application/service/TrelloPointToSpreadSheetServcie';
import BoardDatasource from './infrastracture/datasource/trello/BoardDatasource';
import SettingDatasource from './infrastracture/datasource/config/SettingDatasource';

export default class GasApplication {
    public run() {
        const service = new TrelloPointToSpreadSheetServcie(
            new SettingDatasource(),
            new BoardDatasource()
        );
        service.writePoint();
    }
}
