var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  tentativa--;
  console.log("Você tem " + tentativa + " tentativas");
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você Acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digitar um numero de 0 a 10";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Você Errou o numero é maior! você tem mais " + tentativa + " tentativas";
  } else {
    elementoResultado.innerHTML =
      "Você Errou o numero é menor! você tem mais " + tentativa + " tentativas";
  }
  if (tentativa <= 0) {
    resultado.innerHTML = "Suas tentativas acabaram, o numero era " + numeroSecreto + " tentar novamente? clique em resetar";
  }
  function Reset() {
    numeroSecreto = parseInt(Math.random() * 11);
    tentativa = 3;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
  }
}
