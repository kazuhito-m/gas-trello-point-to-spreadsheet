import Card from "../../../../../src/domain/model/trello/card/Card";

describe('Card のテスト.', () => {
  it('カードのタイトルから括弧付きの文字列をポイントとして取得できる。', () => {
    expect(1).toEqual(new Card('id', '(1)aabcdefg').point().value);
  });

  it('カードのタイトル中度の位置に括弧月数字があってもポイント取得できる。', () => {
    expect(999).toEqual(new Card('id', 'aabcd(999)efg').point().value);
    expect(234).toEqual(new Card('id', 'aabcdefg(234)').point().value);
  });

  it('カードのタイトル中、ポイントパートが2つ以上あっても、最初のものをポイントとして取得できる。', () => {
    expect(1).toEqual(new Card('id', '(1)aabcdefg(234)').point().value);
    expect(123).toEqual(new Card('id', '(123)aabcd(10)efg(1)').point().value);
  });
});
