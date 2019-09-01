import Cards from "../card/Cards";
import Point from "../card/Point";

export default class List {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly cards: Cards,
    ) { }

    public point(): Point {
        return this.cards.point();
    }  
}