const valor = 700;
let numero_de_parcelas = 7;
const metodo = "Mais de 2 Vezes"

if(metodo === "Débito"){
    let preço = (valor * 0.90);
    console.log("O produto ficou por:", preço)
}else if(metodo === "A Vista"){
    let preço = (valor * 0.85);
    console.log("O produto ficou por:", preço)
}else if(metodo === "Duas Vezes"){
    let preço = (valor / 2);
    let preço_total = (preço * 2);
   console.log("Cada parcela ficou por:", preço, "e o valor total ficou", preço_total)
}else if(metodo === "Mais de 2 Vezes"){
    let preço = ((valor / numero_de_parcelas) * 1.10);
    let preço_total = (preço * numero_de_parcelas);
   console.log("Cada parcela ficou por:", preço, "E o valor total ficou", preço_total)
}