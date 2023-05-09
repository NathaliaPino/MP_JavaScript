var peso;
var altura;
var imc;
var resposta;

function calcularImc(event) {
    event.preventDefault()

  peso = document.querySelector("#peso").value;
  altura = document.querySelector("#altura").value;

  imc = peso / (altura* altura)

  resposta = document.querySelector ('#resposta')

  if( imc < 17 ){
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(2)}. Cuidado, você está muito abaixo do peso`

  } else if ( imc >= 17 && imc <= 18.49) {
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(2)}. Você está abaixo do peso`

  } else if ( imc >= 18.5 && imc <= 24.99) {
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(2)}. Peso normal`

  } else if (imc >= 25 && imc <= 29.99) {
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(2)}. Acima do peso`

  } else {
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(2)}. Cuidado, obesidade`
  }

  document.querySelector("#peso").value = ''
  document.querySelector("#altura").value = ''
}




