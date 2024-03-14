let valor = (2);

for (let i = 0; i <= 10; i++) {
    console.log(i * valor);

}

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]
    //Para só mostrar números pares//
    if (numero % 2 === 0) {
        console.log(numero)
    }
    
}