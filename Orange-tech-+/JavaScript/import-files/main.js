const { gets, print, numbers } = require('./funcoes-auxiliares')

let biggestNumber = 0;
let lowestNumber = numbers[0];
for (let index = 0; index < numbers.length; index++) {
    const number = gets();
    if (number > biggestNumber) {
        biggestNumber = number;
    }
    if (number < lowestNumber) {
        lowestNumber = number;
    };
}
print(`Biggest Number is: ${biggestNumber} and lowest number is: ${lowestNumber}`);