const numbers = [15, 10, 140, 234, 21, 37, 34, 2, 4];
let i = 0;

function gets() {
    let increment = numbers[i];
    i += 1;
    return increment;
}

function print(text) {
    console.log(text)
}

module.exports = {
    gets,
    print,
    numbers
}