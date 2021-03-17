var numero = 10;
var numeroPrimo = true; 

if (numero != 0) {
    for (var i = 2; i < numero; i++) {
        var resto = numero % i;
        if (resto == 0) {
            console.log(numero + " não é um número primo!");
            numeroPrimo = false;
            break;
        }
    }

    if (numeroPrimo == true) {
        console.log(numero + " é um numero primo");
    }
} else {
    console.log(numero + " é um numero primo!");
}