var palavra = "arara";
var palavraInvertida = "";

for (var i = palavra.leng - 1; i >= 0; i--) {
    palavraInvertida = palavraInvertida + palavra[i];
}

if (palavra === palavraInvertida) {
   console.log(palavra + " é um palíndromo."); 
}   else {
    console.log(palavra + " não é um palíndromo.");
}