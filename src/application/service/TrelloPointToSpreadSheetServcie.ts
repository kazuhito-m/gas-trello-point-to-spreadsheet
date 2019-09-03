import AppLogger from '../log/AppLogger';
import BoardRepository from '../../domain/model/trello/BoardRepository';
import SettingRepository from '../../domain/model/config/SettingRepository';
import SpreadSheetRepository from '../../domain/model/googlespread/SpreadSheetRepository';
import Point from '../../domain/model/trello/card/Point';

export default class TrelloPointToSpreadSheetServcie {
    private readonly logger = new AppLogger();

    constructor(
        private readonly settingRepository: SettingRepository,
        private readonly boardRepository: BoardRepository,
        private readonly spreadSheetRepository: SpreadSheetRepository
    ) { }

    public writePoint(): void {
        const settings = this.settingRepository.get();
        // const board = this.boardRepository.getOf(settings.trello);
        // const targetList = board.allLists().findOf(settings.trello.pontTargetlistNames());

        // this.log('totalpoint:' + targetList.point().value);


        const date = new Date();
        this.log(date.toString());

        const barndwonChart = this.spreadSheetRepository.barndwonChartOf(settings.googleSpread.sheetId);
        const nowWeekPoint = barndwonChart.nowWeekPoint();
        if (!nowWeekPoint) {
            this.log('バーンダウンチャート内に該当する日付がありませんでした。');
            return;
        }

        this.log('見つかったポイント')
        this.log('date:' + nowWeekPoint.weekEndDay);
        this.log('point:' + nowWeekPoint.point.value);

        const modifiedPoint = nowWeekPoint.modify(new Point(9999));
        const modifiedChart = barndwonChart.rewirteOf(modifiedPoint);

        this.spreadSheetRepository.register(modifiedChart);

        // sheet.getRange('B12').setValue(123);


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