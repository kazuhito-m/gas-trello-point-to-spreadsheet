import PointOfWeek from "./PointOfWeek";

export default class BarndownChart {
    constructor(
        public readonly points: PointOfWeek[],
        public readonly sheetId: string
    ) { }

    public rewirteOf(point: PointOfWeek): BarndownChart {
        const modifiedPoints = this.points
            .map(current => current.equals(point) ? point : current);
        return new BarndownChart(modifiedPoints, this.sheetId);
    }
}