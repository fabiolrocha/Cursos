const peso = 52;
const altura = 1.75;

const IMC = peso / (altura * altura)

console.log("Seu IMC é:", IMC)

if(IMC < 18.5){
    console.log("Você está abaixo do peso")
}else if(IMC >= 18.5 && IMC < 25){
    console.log("Você está no peso normal")
}else if(IMC >= 25 && IMC < 30){
    console.log("Você está acima do peso")
}else if(IMC >= 30 && IMC < 40){
    console.log("Você está obeso")
}else if(IMC > 40){
    console.log("Você está com obesidade grave")
}