var fs = require ("fs");
var arquivo = "funcionarios.json";


fs.readFile(arquivo,"utf-8", function(err, data) {
    if(err){
        console.log(err);

    } else {
        var obj = JSON.parse(data);
        //console.log(obj);
        
        maiorSalario();
        function maiorSalario(){
            var maior = 0;
            var nome = obj.funcionarios[0].nome;
            for(var i = 0; i < obj.funcionarios.length; i++) {
                if(obj.funcionarios[i].salario > maior) {
                    maior = obj.funcionarios[i].salario;
                    nome = obj.funcionarios[i].nome;
                }
            }
        
            console.log("Funcionario com MAIOR salário: " + nome + ", com salário de: " + maior);
            
        }  
        
        menorSalario();
        function menorSalario(){
            var menor = 0;
            var nome = obj.funcionarios[0].nome;
            for(var i = 0; i > obj.funcionarios.length; i++) {
                if(obj.funcionarios[i].salario > menor) {
                    menor = obj.funcionarios[i].salario;
                    nome = obj.funcionarios[i].nome;
                }
            }
        
            console.log("Funcionario com MENOR salário: " + nome + ", com salário de: " + menor);
            
        }

    } 
    
});


