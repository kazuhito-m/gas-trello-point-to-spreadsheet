import SettingRepository from "../../../domain/config/SettingRepository";
import Settings from "../../../domain/config/Settings";
import TrelloSettings from "../../../domain/config/TrelloSettings";

export default class SettingDatasource implements SettingRepository {
    public get(): Settings {
        const p = PropertiesService.getScriptProperties();
        return new Settings(
            new TrelloSettings(
                p.getProperty('TRELLO_API_KEY'),
                p.getProperty('TRELLO_API_TOKEN'),
                p.getProperty('TRELLO_BOARD_ID'),
                p.getProperty('TRELLO_TODO_LIST_NAMES'),
            )
        );
    }
}
