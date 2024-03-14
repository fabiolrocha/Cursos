const nota1 = 8;
const nota2 = 8;
const nota3 = 8;

const media = ((nota1 + nota2 + nota3) / 3);

console.log("Sua média é:", media)

if (media < 5 ){
    console.log("Você foi reprovado")
}else if(media >=5 && media <= 7){
    console.log("Você está de recuperação")
}else{
    console.log("Você foi aprovado")
}