const {describe, it} = require("@jest/globals");
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");


/**
 *
 * @param n
 * @param toPick
 * @return {number[][]}
 */
function pick(n, toPick) {
    const result = [];
    const picked = []
    const recursive = (n, toPick) => {
        if (toPick === 0) {
            result.push([...picked]);
            return;
        }
        const smallest = picked.length === 0 ? 0 : picked[picked.length - 1] + 1;

        for (let next = smallest; next < n; next++) {
            picked.push(next);
            recursive(n, toPick - 1);
            picked.pop();
        }
    }
    recursive(n, toPick);
    return result;
}


describe('', function () {
    it('', function () {
        console.table(pick(7, 4));
    });
});