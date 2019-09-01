import List from './List';
import ListNames from './ListNames';
import Point from '../card/Point';

export default class Lists {
    constructor(public readonly values: List[]) {}

    public findOf(listNames: ListNames): Lists {
        const found = this.values
            .filter(i => listNames.contains(i.name));
        return new Lists(found);
    }

    public point(): Point {
        const sum = this.values
            .map(list => list.point().value)
            .reduce((a, c) => a + c);
        return new Point(sum);
    }
}