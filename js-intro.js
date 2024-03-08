// Task 1 - sum of 3 numbers
function sumOf3(arr) {
    let sum = arr.reduce((acc, curr) => acc + parseInt(curr), 0);
    console.log(sum);
}
// sumOf3(["2", "3", "4"]);

// Task 2 - sum and VAT
function calcVAT(arr) {
    let sum = arr.reduce((acc, curr) => acc + parseFloat(curr), 0);
    let vat = (sum * 0.2).toFixed(2);
    let finalSum = (sum * 1.2).toFixed(2);

    console.log(`Sum: ${sum}`);
    console.log(`VAT: ${vat}`);
    console.log(`Final sum: ${finalSum}`);
}
// calcVAT(["2.5", "3.89", "4.99"]);

// Task 3 - char in string
function charCount(arr) {
    console.log(arr[0].split(arr[1]).length - 1);
}
// charCount(["hello", "l"]);

// Task 4 - calculate area
function calcArea(arr) {
    let area1 = parseInt(arr[0]) * parseInt(arr[1]);
    let area2 = parseInt(arr[2]) * parseInt(arr[3]);

    let diff =
        parseInt(Math.min(arr[0], arr[2])) * parseInt(Math.min(arr[1], arr[3]));
    console.log(area1 + area2 - diff);
}
// calcArea(["2", "4", "5", "3"]);

// Task 5 - leap year checker
function isLeap(year) {
    if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
// isLeap(2024);
// isLeap(2023);

// Task 6 - nums from 1 to N
function from1toN(n) {
    let output = "";
    for (let index = 1; index <= n; index++) {
        output += index;
    }
    console.log(output);
}
// from1toN(10);

// Task 7 - distance between 2 points
function distance(arr) {
    let p1 = { x: parseInt(arr[0]), y: parseInt(arr[1]) };
    let p2 = { x: parseInt(arr[2]), y: parseInt(arr[3]) };

    let dist = Math.sqrt(
        Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
    ).toFixed(2);
    console.log(dist);
}
// distance(["2", "4", "5", "3"]);

// Task 8 - boxes and bottles
function boxCount(bottles, capacity) {
    console.log(Math.ceil(bottles / capacity));
}
// boxCount(20, 5);
// boxCount(15, 7);
// boxCount(5, 10);

// Task 9 - area of a triangle
// Area = Square root of s(s - a)(s - b)(s - c)
// s=(a + b + c)/2.
function calcTriangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
    console.log(area);
}
// calcTriangleArea(20, 32, 35);

// Task 10 - volume and surface area of a cone
function calcCone(arr) {
    let r = arr[0];
    let h = arr[1];
    // Volume of a cone:
    // V = (1/3)πr2h
    let volume = ((1 / 3) * Math.PI * Math.pow(r, 2) * h).toFixed(2);
    // Lateral surface area of a cone:
    // L = πrs = πr√(r2 + h2)
    let l = (Math.PI * r * Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2))).toFixed(
        2
    );
    console.log(`Volume: ${volume}`);
    console.log(`Lateral surface are: ${l}`);
}
// calcCone(["2", "4"]);

// Task 11 - odd or even
function isOddEven(num) {
    if (num % 1 != 0) {
        console.log("invalid number");
    } else if (num % 2 == 0) {
        console.log("even number");
    } else {
        console.log("odd number");
    }
}
// isOddEven(2);
// isOddEven(1);
// isOddEven(1.23);

// Task 12 - prime number checker
function isPrime(num) {
    if (num <= 1) {
        console.log("not prime");
    } else {
        for (let index = 2; index < num; index++) {
            if (num % index == 0) {
                console.log("not prime");
                break;
            } else {
                console.log("prime");
                break;
            }
        }
    }
}
// isPrime(23);

// Task 13 - distance
function calcDistance(arr) {
    let v1 = (arr[0] * 1000) / 3600;
    let v2 = (arr[1] * 1000) / 3600;
    let time = arr[2];

    let dist1 = v1 * time;
    let dist2 = v2 * time;

    let distance = Math.abs(dist1 - dist2);

    console.log(distance.toFixed(2));
}
// calcDistance([10, 20, 3600]);

// Task 14 - create object
function createObj(arr) {
    let student = {};
    student[arr[0]] = arr[1];
    student[arr[2]] = arr[3];
    student[arr[4]] = arr[5];
    console.log(student);
}
// createObj(["name", "Pesho", "age", "23", "gender", "male"]);

// Task 15 - max of 3
function maxOf3(arr) {
    let max = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }
    console.log(max);
}
// maxOf3([1, 2, 3]);

// Task 16 - calculator
function calculator(arr) {
    let result = 0;
    let num1 = arr[0];
    let num2 = arr[1];
    let operator = arr[2];

    switch (operator) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        default:
            console.log("invalid operator");
    }
}
// calculator([1, 2, "+"]);
// calculator([1, 2, "-"]);
// calculator([1, 2, "/"]);
// calculator([1, 2, "*"]);
// calculator([1, 2, "$"]);

// Task 17 - uppercase transform
function toUppercase(str) {
    let word = str.split(" ");
    let wordUpper = word.map((word) => word.toUpperCase()).join(", ");
    console.log(wordUpper);
}
// toUppercase("Hi how are you?");
