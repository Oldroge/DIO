"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input-1');
let input2 = document.getElementById('input-2');
function soma(num1, num2) {
    console.log(Number(num1) + Number(num2));
}
;
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            soma(Number(input1), Number(input2));
        }
    });
}
