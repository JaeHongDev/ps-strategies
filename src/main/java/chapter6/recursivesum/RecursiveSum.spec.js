const {describe, it, expect} = require("@jest/globals");

/**
 * @param {number} n
 * @return {number}
 */
const sum = (n) => {
    let ret = 0;
    for (let i = 1; i <= n; i++) ret += i;
    return ret;
}

/**
 *
 * @param {number} n
 * @return {number}
 */
const recursiveSum = (n) => {
    if (n === 1) return 1;
    return n + recursiveSum(n - 1)
}

const reduceSum = (n) => new Array(n).fill(0).map((_, index) => index + 1).reduce((pre, cal) => pre + cal, 0);

describe('테스트', function () {
    it('should ', function () {
        expect(sum(10)).toBe(55);
        expect(sum(10)).toBe(recursiveSum(10));
    });


    it("재귀 성능 테스트", () => {
        console.time("recursive");
        recursiveSum(10000);
        console.timeEnd("recursive");
    })

    it("반복문 성능 테스트", () => {
        recursiveSum(10000);
    })

    it("reduce 성능 테스트", () => {
        console.time("reduce");
        reduceSum(10000);
        console.timeEnd("reduce");
    })

    // 재귀보다 reduce를 사용하는게 더 빠름
});