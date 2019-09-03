import SpreadSheetRepository from "../../../domain/model/googlespread/SpreadSheetRepository";
import BarndownChart from "../../../domain/model/chart/BarndownChart";
import SheetId from "../../../domain/model/googlespread/SheetId";
import PointOfWeek from "../../../domain/model/chart/PointOfWeek";
import CellPosition from "../../../domain/model/googlespread/CellPosition";
import Point from "../../../domain/model/trello/card/Point";

export default class SpreadSheetDatasource implements SpreadSheetRepository {
    public barndwonChartOf(sheetId: SheetId): BarndownChart {
        const points: PointOfWeek[] = [];

        const sheet = this.sheetOf(sheetId);
        const rows = sheet.getDataRange();
        const maxRows = rows.getNumRows();
        const values = rows.getValues();
        for (var i = 0; i < maxRows; i++) {
            const row = values[i];
            const pos = new CellPosition(i, 1);
            const pointOfWeek = new PointOfWeek(
                pos,
                row[0],
                new Point(row[1]),
                false
            );
            points.push(pointOfWeek);
        }
        return new BarndownChart(points, sheetId);
    }

    public register(barndwonChart: BarndownChart): void {
        const modifiedPoints = barndwonChart.points
            .filter(point => point.edited);
        if (modifiedPoints.length == 0) return;

        const sheet = this.sheetOf(barndwonChart.sheetId);
        for (const point of modifiedPoints) {
            const key = point.cellPosition.adderssKey();
            const pointNumber = point.point.value;
            sheet.getRange(key).setValue(pointNumber);
        }
    }

    private sheetOf(sheetId: SheetId) {
        return SpreadsheetApp.openById(sheetId.value);
    }
}
