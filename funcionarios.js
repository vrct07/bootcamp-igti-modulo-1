var fs = require("fs");
//const { parse } = require("node:path");
var nomeArquivo = "funcionarios.json";

//1. Função que retorna o nome do funcionário que tem o MAIOR salário da empresa: 
//nomeMaiorSalario();

//2. Função que retorna o nome do funcionário que tem o MENOR salário da empresa.
//nomeMenorSalario();

//3. Função que retorna a média salarial da empresa.
//mediaSalEmpresa();


//var nomSet = "Administrativo";
//var nomSet = "Comercial";
//var nomSet = "Produção";

//4. Função que recebe um SETOR como parâmetro e retorna o funcionário de MAIOR salário do setor informado.
//nomeMaiorSalarioSetor(nomSet);

//5. Função que recebe um SETOR como parâmetro e retorna o funcionário de MENOR salário do setor informado.
//nomeMenorSalarioSetor(nomSet);

//6. Função que recebe um SETOR como parâmetro e retorna a MEDIA salarial do setor informado.
//mediaSalarialSetor(nomSet);

//7. Função que recebe um SETOR como parâmetro e retorna a SOMA salarial do setor informado.
//somaSalarialSetor (nomSet);

//8. Soma de todos os salarios da empresa:
//somaSalEmpresa();

//leituraExemplo();

function leituraExemplo(){
    fs.readFile(nomeArquivo,"utf-8",function(err,data){
        if (err){
          console.log(err);
        }else{
          var obj = JSON.parse(data);
          console.log("...Lendo o conteúdo do arquivo na posição [0]: ");
          //console.log(data);
         var tamArray = obj.funcionarios.length;
         console.log("tamanho array: " + tamArray);
         var soma = 0;
         for (var i = 0; i < obj.funcionarios.length; i++){
          soma += obj.funcionarios[i].salario;
         }
         console.log("soma dos 3 primeiros salarios: " + soma);
        }
   });
}

function nomeMaiorSalario(){
  fs.readFile(nomeArquivo,"utf-8",function(err,data){
    if (err){
      console.log(err);
    }else{
      var obj = JSON.parse(data);
      var maiorSalEmp = obj.funcionarios[0].salario;

      for (var i = 1; i < obj.funcionarios.length; i++){
        if(obj.funcionarios[i].salario > maiorSalEmp){
          maiorSalEmp = obj.funcionarios[i].salario;
          var nomeMaiorSalario = obj.funcionarios[i].nome;
        }
      }
     /* console.log("Funcionário com o MAIOR salário da Empresa: " + nomeMaiorSalario +", com salario = "+ maiorSalEmp);
      */
    }
  });
}

function nomeMenorSalario(){
  fs.readFile(nomeArquivo,"utf-8",function(err,data){
    if (err){
      console.log(err);
    }else{
      var obj = JSON.parse(data);
      var menorSalEmp = obj.funcionarios[0].salario;

      for (var i = 1; i < obj.funcionarios.length; i++){
        if(obj.funcionarios[i].salario < menorSalEmp){
          menorSalEmp = obj.funcionarios[i].salario;
          var nomeMenorSalario = obj.funcionarios[i].nome;
        }
      }
     /* console.log("Nome do funcionário que tem o MENOR salário da Empresa: " + nomeMenorSalario +", com salario = "+ menorSalEmp);
     console.log(""); */
    }
  });
}

function mediaSalEmpresa (){
  fs.readFile(nomeArquivo,"utf-8",function(err,data){
    if (err){
      console.log(err);
    }else{
      var obj = JSON.parse(data);
      var soma = 0;
      for (var i = 0; i < obj.funcionarios.length; i++){
        soma += obj.funcionarios[i].salario;
      }
      var media = soma / obj.funcionarios.length;
     /* console.log("MEDIA salarial da Empresa: " + media.toFixed(2));
     console.log(""); */
    }
  });
}


function nomeMaiorSalarioSetor(nomSetor){
  fs.readFile(nomeArquivo,"utf-8",function(err,data){
    if (err){
      console.log(err);
    }else{
      var obj = JSON.parse(data);
      var maiorSalEmpSet =0;
      for (var i = 0; i < obj.funcionarios.length; i++){
        if(obj.funcionarios[i].setor === nomSetor){
          maiorSalEmpSet = obj.funcionarios[i].salario;
          break;
        }
      }

      for (var i = 0; i < obj.funcionarios.length; i++){
        if(obj.funcionarios[i].setor === nomSetor){
            if(obj.funcionarios[i].salario > maiorSalEmpSet){
                maiorSalEmpSet = obj.funcionarios[i].salario;
                var nomeMaiorSalSetor = obj.funcionarios[i].nome;
            }
        }
      }
     /* console.log("Funcionário(a) que tem o MAIOR salário do Setor "+ nomSetor +" é: "+ nomeMaiorSalSetor +", com salario = "+ maiorSalEmpSet);
     console.log(""); */
    }
  });
}


function nomeMenorSalarioSetor(nomSetor){
      fs.readFile(nomeArquivo,"utf-8",function(err,data){
    if (err){
      console.log(err);
    }else{
      var obj = JSON.parse(data);
      var menorSalEmpSet =0;
      for (var i = 0; i < obj.funcionarios.length; i++){
        if(obj.funcionarios[i].setor === nomSetor){
          menorSalEmpSet = obj.funcionarios[i].salario;
          break;
        }
      }

      for (var i = 0; i < obj.funcionarios.length; i++){
        if(obj.funcionarios[i].setor === nomSetor){
            if(obj.funcionarios[i].salario < menorSalEmpSet){
                menorSalEmpSet = obj.funcionarios[i].salario;
                var nomeMenorSalSetor = obj.funcionarios[i].nome;
            }
        }
      }
    /*  console.log("Funcionário(a) que tem o MENOR salário do Setor "+ nomSetor +" é: "+ nomeMenorSalSetor +", com salario = "+ menorSalEmpSet);
     console.log(""); */
    }
  });
}


function mediaSalarialSetor (nomSetor){
    fs.readFile(nomeArquivo,"utf-8",function(err,data){
    if (err){
      console.log(err);
    }else{
      var obj = JSON.parse(data);
      var soma = 0;
      var contSetor = 0;
      for (var i = 0; i < obj.funcionarios.length; i++){
        if(obj.funcionarios[i].setor === nomSetor){
          soma += obj.funcionarios[i].salario;
          contSetor++;
        }
      }
      var mediaSetor = soma / contSetor;
      /* console.log("MÉDIA salarial do Setor: "+ nomSetor + " é = " + mediaSetor);
      console.log(""); */
    }
  });
}

function somaSalarialSetor (nomSetor){
  fs.readFile(nomeArquivo,"utf-8",function(err,data){
  if (err){
    console.log(err);
  }else{
    var obj = JSON.parse(data);
    var soma = 0;
    for (var i = 0; i < obj.funcionarios.length; i++){
      if(obj.funcionarios[i].setor === nomSetor){
        soma += obj.funcionarios[i].salario;
      }
    }
    /* console.log("SOMA salarial do Setor: "+ nomSetor + " é = " + soma);
    console.log(""); */
  }
});
}

function somaSalEmpresa (){
  fs.readFile(nomeArquivo,"utf-8",function(err,data){
    if (err){
      console.log(err);
    }else{
      var obj = JSON.parse(data);
      var soma = 0;
      for (var i = 0; i < obj.funcionarios.length; i++){
        soma += obj.funcionarios[i].salario;
      }
     /* console.log("SOMA salarial da Empresa: " + soma);
     console.log(""); */
    }
  });
}