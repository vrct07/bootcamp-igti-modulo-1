var fs = require ("fs");
var arquivo = "funcionarios.json";


fs.readFile(arquivo,"utf-8", function(err, data) {
    if(err){
        console.log(err);

    } else {
        var obj = JSON.parse(data);
        //console.log(obj);
        /* function maiorSalario(){
            var maior = 0;
            var nomeFuncionario;
            for(var i = 0; i < obj.funcionarios.length; i++){
                if(obj.funcionarios[i].salario > maior){
                    maior = obj.funcionarios[i].salario;
                    nomeFuncionario = obj.funcionarios[i].nome;
                }
            }
        
            console.log(maior + nomeFuncionario);
        } */

        function menorSalario(){
            var menor = 0;
            var nomeFuncionario;
            for(var i = 0; i < obj.funcionarios.length; i++){
                if(obj.funcionarios[i].salario < menor){
                    menor = obj.funcionarios[i].salario;
                    nomeFuncionario = obj.funcionarios[i].nome;
                }
            }
        
            console.log(menor + nomeFuncionario);
        }
    }
    menorSalario();
});


