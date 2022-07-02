const input = document.getElementById('input') as HTMLInputElement;
// No caso aqui está sendo tipado com um alias pois se utilizando com os dois pontos como normalmente se usa, input: type; ele apresenta um erro pois o HTMLInputElement ainda é null;

input.addEventListener('input', (event) => {
  const typedInput = event.currentTarget as HTMLInputElement;
  console.log(typedInput.value);
});
