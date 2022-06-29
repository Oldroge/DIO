function isPalindrom(string) {
  let sentence = "";
  let reverseSentence = "";

  for (let index = 0; index < string.length; index ++) {
    sentence += string[index].replace(' ', '')
  }

  for (let index = string.length; index !== 0; index --) {
    reverseSentence += string[index - 1].replace(' ', '')
  }
  
  if (sentence === reverseSentence) {
    console.log(`${string} é um palíndromo`)
  } else {
    console.log(`${string} não é um palíndromo`)
  }
}

isPalindrom('ama')
isPalindrom('atari')
isPalindrom('socorram me subi no onibus em marrocos')