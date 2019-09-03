import TrelloPointToSpreadSheetServcie from './application/service/TrelloPointToSpreadSheetServcie';
import BoardDatasource from './infrastracture/datasource/trello/BoardDatasource';
import SettingDatasource from './infrastracture/datasource/config/SettingDatasource';
import SpreadSheetDatasource from './infrastracture/datasource/googlespread/SpreadSheetDatasource';

export default class GasApplication {
    public run() {
        const service = new TrelloPointToSpreadSheetServcie(
            new SettingDatasource(),
            new BoardDatasource(),
            new SpreadSheetDatasource()
        );
        service.writePoint();
    }
}
