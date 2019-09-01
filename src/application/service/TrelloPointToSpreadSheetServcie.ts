import AppLogger from '../log/AppLogger';
import BoardRepository from '../../domain/model/trello/BoardRepository';
import SettingRepository from '../../domain/config/SettingRepository';

export default class TrelloPointToSpreadSheetServcie {
    private readonly logger = new AppLogger();

    constructor(
        private readonly settingRepository: SettingRepository,
        private readonly boardRepository: BoardRepository
    ) { }

    public writePoint(): void {
        const settings = this.settingRepository.get();
        const board = this.boardRepository.getOf(settings.trello);
        const targetList = board.allLists().findOf(settings.trello.pontTargetlistNames());

        this.log('totalpoint:' + targetList.point().value);



        // board.allLists().findOf(listNames).values.forEach(list => {
        //     this.log('ID:' + list.id);
        //     this.log('name:' + list.name);
        //     this.log('pint:' + list.cards.point().value);
        //     list.cards.values.forEach(i => {
        //         this.log('    card:' + i.name);
        //         this.log('      point:' + i.point().value);
        //     });
        // });

        this.log(this.settingRepository.get().toString());
    }

    private log(message: string) {
        this.logger.log(message);
    }
}