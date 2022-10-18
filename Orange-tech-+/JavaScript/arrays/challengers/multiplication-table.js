function table(number) {
    let array = {};
    for (let index = 1; index <= 10; index += 1) {
        array[`${number} X ${index}`] = index * number;
    }
    return array;
}
