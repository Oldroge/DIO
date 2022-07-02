// Para selecionar um elemento HTML através do ID, utiliza o método getElementById();
document.getElementById('id');

// Para selecionar elementos HTML através de sua TAG, utiliza o método getElementsByTagName();
document.getElementsByTagName('tag');

// Para selecionar elementos HTML através de sua CLASSE, utiliza o método getElementsByClassName();
document.getElementsByClassName('class');

// O getElementById é o único seletor que retorna apenas 1 elemento que corresponde a chamada, os outrs retornam um array;


// Existem os seletores de query, nos quais podem-se selecionar classes, ids, tags ou combinados;
document.querySelector('.classe #id tag');

document.querySelectorAll('.classe #id tag');

// A diferença de ambos os métodos é que o querySelector vai retornar apenas 1, enquanto o querySelectorAll retornará um array de elementos;