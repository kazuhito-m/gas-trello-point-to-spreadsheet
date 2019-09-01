import SpreadSheetRepository from "../../../domain/model/googlespread/SpreadSheetRepository";
import BarndownChart from "../../../domain/model/chart/BarndownChart";

export default class SpreadSheetDatasource implements SpreadSheetRepository {
    public barndwonChartOf(sheetId: string): BarndownChart {
    }
    
    public register(barndwonChart: BarndownChart): void {

    }
}
