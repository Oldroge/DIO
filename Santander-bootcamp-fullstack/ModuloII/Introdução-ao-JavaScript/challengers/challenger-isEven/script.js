function isEven(array) {
  let zeroAndOdd = [];

  if (array.length === 0) {
    console.log(-1)
  } else {
    for (let index = 0; index < array.length; index ++) {
      if (array[index] % 2 === 0) {
        zeroAndOdd.push(parseInt(array[index].toString().replace(array[index], 0)));
      } else {
        zeroAndOdd.push(array[index]);
      };
    };
    console.log(zeroAndOdd);
  }

};

isEven([1, 3, 4, 6, 80, 33, 23, 90])
isEven([])
