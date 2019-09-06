import AppLogger from '../log/AppLogger';
import BoardRepository from '../../domain/model/trello/BoardRepository';
import SettingRepository from '../../domain/model/config/SettingRepository';
import SpreadSheetRepository from '../../domain/model/googlespread/SpreadSheetRepository';

export default class TrelloPointToSpreadSheetServcie {
    private readonly logger = new AppLogger();

    constructor(
        private readonly settingRepository: SettingRepository,
        private readonly boardRepository: BoardRepository,
        private readonly spreadSheetRepository: SpreadSheetRepository,
    ) { }

    public writePoint(): void {
        const settings = this.settingRepository.get();

        const board = this.boardRepository.getOf(settings.trello);
        const targetLists = board.allLists().findOf(settings.trello.pointTargetlistNames());
        const totalPoint = targetLists.point();

        const barndwonChart = this.spreadSheetRepository.barndwonChartOf(settings.googleSpread.sheetId);
        const nowWeekPoint = barndwonChart.nowWeekPoint();
        if (!nowWeekPoint) {
            this.log('バーンダウンチャート内に該当する日付がありませんでした。');
            return;
        }

        const modifiedPoint = nowWeekPoint.modify(totalPoint);
        const modifiedChart = barndwonChart.rewirteOf(modifiedPoint);
        this.spreadSheetRepository.register(modifiedChart);
    }

    private log(message: string) {
        this.logger.log(message);
    }
}
