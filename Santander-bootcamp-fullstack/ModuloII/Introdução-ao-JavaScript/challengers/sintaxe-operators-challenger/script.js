function checkNumbers(num1, num2) {
  if (num1 === num2) {
    console.log(
      `Os números ${num1} e ${num2} são iguais. Sua soma é ${num1 + num2}, que é ${num1 + num2 > 10 ? 'maior que 10' : 'menor que 10'} e ${num1 + num2 > 20 ? 'maior que 20' : 'menor que 20'}`
      )
  } else {
    console.log(
      `Os números ${num1} e ${num2} não são iguais. Sua soma é ${num1 + num2}, que é ${num1 + num2 > 10 ? 'maior que 10' : 'menor que 10'} e ${num1 + num2 > 20 ? 'maior que 20' : 'menor que 20'}`
    )
  };
}
