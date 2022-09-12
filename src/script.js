var nome = "Kézia";
var elementoResultado = document.getElementById("resultado");

var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 5.5;
var notaDoTerceiroBimestre = 2;
var notaDoQuartoBimestre = 6;

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) /4;

var notaFixada = notaFinal.toFixed(1)

if(notaFixada >= 7){
  elementoResultado.innerHTML =  "Bem vindo, " + nome + "!" + "<br>" +" Sua média final é " + notaFixada + "<br>" + " Parabéns!!! você passou de ano!"
} else {
  elementoResultado.innerHTML = "Bem vindo, " + nome + "!" + "<br>" +" Sua média final é " + notaFixada + "<br>" + " Infelizmente você reprovou de ano!"
}








//toFixed ajusta as casas decimais 
//se aluno passou ou não
//console.log imprimir 