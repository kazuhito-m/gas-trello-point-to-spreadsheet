import BarndownChart from "../chart/BarndownChart";

export default interface SpreadSheetRepository {
    barndwonChartOf(sheetId: string): BarndownChart;
    register(barndwonChart: BarndownChart): void;
}