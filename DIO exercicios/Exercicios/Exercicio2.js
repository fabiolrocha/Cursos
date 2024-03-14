class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
    return  this.peso / (this.altura * this.altura)
    }
}

const fabio = new Pessoa ('Fábio', 87, 1.79);
console.log(fabio.calcularImc());