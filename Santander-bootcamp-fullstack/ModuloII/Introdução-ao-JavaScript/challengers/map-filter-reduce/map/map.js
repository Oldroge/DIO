const arrayNum = [1, 2, 3, 4, 5];

const mult = arrayNum.map((num, index) => `${index + 1} x 2 = ${num * 2}`);

console.log(mult)