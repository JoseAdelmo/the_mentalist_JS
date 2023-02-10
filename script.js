var numeroSecreto = parseInt(Math.random() * 51);

while(chute != numeroSecreto) {
  var chute = prompt("Tente acertar o número secreto!\nDigite um número de 0 a 50");
  
  if (chute == numeroSecreto) {
    alert("Você acertou! :) ");
  } else if (chute > numeroSecreto) {
    alert("Errou... o numero secreto é menor");
  } else if (chute < numeroSecreto) {
    alert("Errou... o número secreto é maior");
  }

}

// O número máximo de vezes que o jogador pode errar é: 49