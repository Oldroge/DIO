const meuElemento = document.getElementById("meu-elemento");

// método classList.add() adiciona uma nova classe ao elemento setado;
meuElemento.classList.add('new-style');

// método classList.remove() remove uma classe do elemento setado;
meuElemento.classList.remove('classe');

// método classList.toggle() adiciona uma classe caso ela não exista e caso ela exista remove;
meuElemento.classList.toggle('darkMode');

// utilizando o style.color através do DOM conseguimos acessar o CSS;
document.getElementsByClassName("p").style.color = "blue";
