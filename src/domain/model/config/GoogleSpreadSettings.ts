import SheetId from "../googlespread/SheetId";

export default class GoogleSpreadSettings {
    constructor(
        public readonly sheetId: SheetId
    ) { }
}
