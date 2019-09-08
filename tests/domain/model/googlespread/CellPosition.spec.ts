import CellPosition from "../../../../src/domain/model/googlespread/CellPosition";

describe('CellPosition のテスト.', () => {
  it('SpreadSheetのcolumn,rowから、絶対参照方式の文字列(A1 など)に変換できる。', () => {
    expect('A1').toEqual(new CellPosition(0, 0).adderssKey());
    expect('E4').toEqual(new CellPosition(3, 4).adderssKey());
  });
});
