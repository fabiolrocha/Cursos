const valoretanol = 3.10;
const valorgasolina = 5.60;
const gastomedioetanol = 5;
const gastomediogasolina = 8;
let distancia = 24;
const combustivel = "Gasolina";

if (combustivel === "Etanol") {
    console.log(((distancia / gastomedioetanol) * valoretanol).toFixed(2));    
} else {
    console.log(((distancia / gastomediogasolina) * valorgasolina).toFixed(2));
}

