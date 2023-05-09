function sorteador(...numeros) {
  console.log(numeros);

  const numeroGerado = Math.floor(Math.random() * numeros.length);

  console.log(`Numero gerado foi: ${numeros[numeroGerado]}`);
}

sorteador(1, 4, 5, 15, 25, 90, 55, 34);
