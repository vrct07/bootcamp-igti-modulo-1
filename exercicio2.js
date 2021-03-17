var fs = require ("fs");
var arquivo = "funcionarios.json";


fs.readFile(arquivo,"utf-8", function(err, data) {
    if(err){
        console.log(err);

    } else {
        var obj = JSON.parse(data);
        //console.log(obj);
        

        //ver o MAIOR salário da empresa.
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
        
            console.log("Funcionário com MAIOR salário: " + nome + ", com salário de: " + maior);
            
        }  
        //ver o MENOR salário da empresa.
        menorSalario();
        function menorSalario(){
            var menor = obj.funcionarios[0].salario;
            var nome = obj.funcionarios[0].nome;
            for(var i = 0; i < obj.funcionarios.length; i++) {
                if(obj.funcionarios[i].salario < menor) {
                    menor = obj.funcionarios[i].salario;
                    nome = obj.funcionarios[i].nome;
                }
            }
        
            console.log("Funcionário com MENOR salário: " + nome + ", com salário de: " + menor);
            
        }

        
        mediaSalarial();
        function mediaSalarial(){
            var mediaSal;
            var somaSal = 0;
            
            for(var i = 0; i < obj.funcionarios.length; i++) {
                somaSal = somaSal + obj.funcionarios[i].salario;
            }
            mediaSal = (somaSal / obj.funcionarios.length);
            
            
            console.log("A média Salarial da empresa é: " + mediaSal);
            
        } 
        

    } 
    
});


