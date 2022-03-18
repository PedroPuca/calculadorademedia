function calcular() {
  var notaDoPrimeiroBimestre = document.getElementById("notaDoPrimeiroBimestre").value;
var notaDoSegundoBimestre = document.getElementById("notaDoSegundoBimestre").value;
var notaDoTerceiroBimestre = document.getElementById("notaDoTerceiroBimestre").value;
var notaDoQuartoBimestre = document.getElementById("notaDoQuartoBimestre").value;

  var notaFinal = (parseFloat(notaDoPrimeiroBimestre) + parseFloat(notaDoSegundoBimestre) + parseFloat(notaDoTerceiroBimestre) + parseFloat(notaDoQuartoBimestre)) / 4
//parseInt
var notaFixada = notaFinal.toFixed(1)

alert("Sua média é " + notaFixada)
}
// isso é um comentário

// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação