import Card from './Card';
import Point from './Point';

export default class Cards {
    constructor(public readonly values: Card[]) { }

    public point(): Point {
        const sum = this.values
            .map(card => card.point().value)
            .reduce((a, c) => a + c);
        return new Point(sum);
    }
}
