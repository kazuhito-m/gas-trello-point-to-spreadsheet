import PointOfWeek from './PointOfWeek';
import SheetId from '../googlespread/SheetId';

export default class BarndownChart {
    constructor(
        public readonly points: PointOfWeek[],
        public readonly sheetId: SheetId,
    ) { }

    public nowWeekPoint(): PointOfWeek {
        const now = new Date();
        let lastOneDayPoint = null;
        for (const point of this.points) {
            if (point.weekEndDay > now) return lastOneDayPoint;
            lastOneDayPoint = point;
        }
        return lastOneDayPoint;
    }

    public rewirteOf(point: PointOfWeek): BarndownChart {
        const modifiedPoints = this.points
            .map(current => current.equals(point) ? point : current);
        return new BarndownChart(modifiedPoints, this.sheetId);
    }
}
