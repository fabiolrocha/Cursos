const{ gets, print } = require('./Auxiliares');

const n = gets();

let maiorNumeroPar = 0;

for (let i = 0; i < n; i++) {
    const n = gets();
    if (n %2 === 0) {
        if (n > maiorNumeroPar) {
            maiorNumeroPar = n
        }
    }
}

print(n)