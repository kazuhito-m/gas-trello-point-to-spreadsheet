export default class CellPosition {
    constructor(
        public readonly row: number,
        public readonly column: number
    ) { }

    public adderssKey(): string {
        const columnAlphabet = String.fromCharCode('A'.charCodeAt(0) + this.column);
        const rowNumer = this.row + 1;
        return `${columnAlphabet}${rowNumer}`;
    }
}