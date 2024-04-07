function sum3Numbers(arr) {
    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    let num3 = Number(arr[2]);
    let sum = num1 + num2 + num3;
    return sum;
}
// module.exports = { sum3Numbers };
function sum(arr) {
    let sum = 0;
    for (num of arr) sum += Number(num);
    return sum;
}

// module.exports = { sum };
function createCalculator() {
    let value = 0;

    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        },
    };
}
function isSymmetric(arr) {
    if (!Array.isArray(arr)) return false; // Non-arrays are non-symmetric

    let reversed = arr.slice(0).reverse(); // Clone and reverse

    let equal = JSON.stringify(arr) == JSON.stringify(reversed);

    return equal;
}
module.exports = { sum3Numbers, sum, createCalculator, isSymmetric };
