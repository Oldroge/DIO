const arrayNum = [1, 2, 3, 4, 5];

const objNum = {
  num1: 4,
  num2: 9
};

function mult() {
  return arrayNum.map(function (arrayNum) {
        return arrayNum * this.num1 + this.num2;
  }, objNum);
}

console.log(mult())
