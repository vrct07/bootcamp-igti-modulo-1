var carros = ["Gol", "Palio", "Uno", "Sandero"]
//--var carro = carros.pop();
//console.log(carro);
//console.log(carros);



//________________________________________________________________________________________________//

var x = carros.push("Ford Ka");
//console.log(carros);
//console.log(x);

//________________________________________________________________________________________________//

carro = carros.shift();
//console.log(carro);
//console.log(carros);

//________________________________________________________________________________________________//

x = carros.unshift("Onix");
//console.log(carros);
//console.log(x);

//________________________________________________________________________________________________//

//atualizar elemento do indice informado
carros[2] = "Novo Uno";
//console.log(carros);

//________________________________________________________________________________________________//

//delete carros[2];
//console.log(carros);

//________________________________________________________________________________________________//

//carros.splice(2, 1, "HRV", "Creta");
//console.log(carros);

//________________________________________________________________________________________________//

var carrosAntigos = ["Brasilia", "Monza", "Fusca"];
var todosCarros = carros.concat(carrosAntigos);
console.log(todosCarros)

//________________________________________________________________________________________________//

var novoArray = todosCarros.slice(1);
//console.log(novoArray);
