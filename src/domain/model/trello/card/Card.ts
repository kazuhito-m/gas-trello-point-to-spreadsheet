import Point from "./Point";

export default class Card {
    constructor(
        private readonly id: string,
        public readonly name: string,
    ) { }

    public point(): Point {
        const regex = new RegExp(/(\()([0-9]+)(\))/);
        const hitResult = this.name.match(regex);
        if (hitResult == null || hitResult.length < 4) return new Point(0);
        return new Point(Number(hitResult[2]));
    }
}
