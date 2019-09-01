import AppLogger from '../log/AppLogger';
import BoardRepository from '../../domain/model/trello/BoardRepository';
import SettingRepository from '../../domain/model/config/SettingRepository';

export default class TrelloPointToSpreadSheetServcie {
    private readonly logger = new AppLogger();

    constructor(
        private readonly settingRepository: SettingRepository,
        private readonly boardRepository: BoardRepository
    ) { }

    public writePoint(): void {
        const settings = this.settingRepository.get();
        // const board = this.boardRepository.getOf(settings.trello);
        // const targetList = board.allLists().findOf(settings.trello.pontTargetlistNames());

        // this.log('totalpoint:' + targetList.point().value);


        const date = new Date();
        this.log(date.toString());

        const sheetId = settings.googleSpread.sheetId;
        var sheet = SpreadsheetApp.openById(sheetId.value);
        var rows = sheet.getDataRange();
        var numRows = rows.getNumRows();
        var values = rows.getValues();
        for (var i = 0; i <= numRows - 1; i++) {
            var row = values[i];
            for (var j = 0; j < row.length; j++) {
                this.log(i + ',' + j + ',' + row[j]);
            }
        }

        sheet.getRange('B12').setValue(123);


        // board.allLists().findOf(listNames).values.forEach(list => {
        //     this.log('ID:' + list.id);
        //     this.log('name:' + list.name);
        //     this.log('pint:' + list.cards.point().value);
        //     list.cards.values.forEach(i => {
        //         this.log('    card:' + i.name);
        //         this.log('      point:' + i.point().value);
        //     });
        // });

        // this.log(this.settingRepository.get().toString());
    }

    private log(message: string) {
        this.logger.log(message);
    }
}