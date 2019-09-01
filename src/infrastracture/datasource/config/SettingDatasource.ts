import SettingRepository from "../../../domain/model/config/SettingRepository";
import Settings from "../../../domain/model/config/Settings";
import TrelloSettings from "../../../domain/model/config/TrelloSettings";
import GoogleSpreadSettings from "../../../domain/model/config/GoogleSpreadSettings";
import SheetId from "../../../domain/model/googlespread/SheetId";

export default class SettingDatasource implements SettingRepository {
    public get(): Settings {
        const p = PropertiesService.getScriptProperties();
        return new Settings(
            new TrelloSettings(
                p.getProperty('TRELLO_API_KEY'),
                p.getProperty('TRELLO_API_TOKEN'),
                p.getProperty('TRELLO_BOARD_ID'),
                p.getProperty('TRELLO_TODO_LIST_NAMES'),
            ),
            new GoogleSpreadSettings(
                new SheetId(p.getProperty('GOOGLESPREAD_SHEET_ID'))
            )
        );
    }
}
