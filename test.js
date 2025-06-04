const {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
} = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    expect(sum(14, 9)).toBe(23);
});


test("One euro should be 1.07 dollars", () => {
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBeCloseTo(expected);
});


test("One dollar should be approximately 146.26 yen", () => {
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(expected);
});


test("1000 yen should be approximately 5.56 pounds", () => {
    const expected = (1000 / 156.5) * 0.87;
    expect(fromYenToPound(1000)).toBeCloseTo(expected);
});
