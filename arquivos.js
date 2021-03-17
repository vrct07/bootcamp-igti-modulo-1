var fs = require("fs");
var nomeArquivo = "meuArquivo.txt";

console.log("1")

fs.whiteFile(nomeArquivo, "um texto qualquer", function(err) {
    if (err !== null) {
        console.log(err);
    } else {
        fs.appendFile(nomeArquivo, "\nnova linha do texto", function(err) {
            if (err) {
                console.log(err);
            } else {
                fs.readFile(nomeArquivo, "utf-8", function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
});

console.log("2")