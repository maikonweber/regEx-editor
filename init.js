const fs = require('fs');
const path = require('path');
 
// open Escreva o caminho do arquivo
fs.open(path.join(__dirname, 'arquivo.txt'), 'r', (err, fd) => {

    // Ler o aquivo e salvar em uma variavel
    fs.readFile(fd, (err, data) => {
        let texto = data.toString();
        let all = texto.match(/([0-9][0-9][0-9][0-9][0-9][0-9]*)|([0-9][0-9][0-9])|([0-9]\/[0-9]*)/g);
       
        console.log(all.length / 3);
        console.log(all.length);
        
        let object = [];
        let count = all.length

        for (let i = 0; i < all.length; i++) {
            if (i % 3 == 0) {
                object.push([
                    all[i],
                    all[i + 1],
                    all[i + 2]
                ]);
                                
            }
        }

      object.map(
            (item) => {
                return item.join('-');
            }
        )

    
        // Write the result in a new file
        fs.writeFile(path.join(__dirname, 'result.txt'), object.join('\n'), (err) => {
            if (err) throw err;
            console.log('Arquivo criado com sucesso!');
        }
        );
    });
});
 

