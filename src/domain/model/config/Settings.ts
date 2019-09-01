import TrelloSettings from "./TrelloSettings";
import GoogleSpreadSettings from "./GoogleSpreadSettings";

export default class Settings {
  constructor(
    public readonly trello: TrelloSettings,
    public readonly googleSpread: GoogleSpreadSettings
  ) { }
}
