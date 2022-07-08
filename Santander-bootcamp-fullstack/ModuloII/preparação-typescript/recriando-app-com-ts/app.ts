let button = document.getElementById('button');
let input1 = document.getElementById('input-1') as HTMLInputElement;
let input2 = document.getElementById('input-2') as HTMLInputElement;

function soma(num1: number, num2: number) {
    return num1 + num2;
};

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(soma(Number(input1.value), Number(input2.value)));
        }
    });
}
