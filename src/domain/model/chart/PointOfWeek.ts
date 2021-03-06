import CellPosition from '../googlespread/CellPosition';
import Point from '../trello/card/Point';

export default class PointOfWeek {
    constructor(
        public readonly cellPosition: CellPosition,
        public readonly weekEndDay: Date,
        public readonly point: Point,
        public readonly edited: boolean,
    ) { }

    public modify(point: Point): PointOfWeek {
        return new PointOfWeek(
            this.cellPosition,
            this.weekEndDay,
            point,
            true,
        );
    }

    public equals(point: PointOfWeek): boolean {
        return this.weekEndDay === point.weekEndDay;
    }
}
