import BarndownChart from "../chart/BarndownChart";
import SheetId from "./SheetId";

export default interface SpreadSheetRepository {
    barndwonChartOf(sheetId: SheetId): BarndownChart;
    register(barndwonChart: BarndownChart): void;
}