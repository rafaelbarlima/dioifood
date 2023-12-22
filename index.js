function calculoRank(vitoria, derrota){
    let saldo = vitoria - derrota;
    return saldo;
}


let total = calculoRank(15, 8);
let rank = "";

if(total <= 10){
    rank = "Ferro";
}else if(total > 10 && total <= 20){
    rank = "Bronze";
}else if(total > 20 && total <= 50){
    rank = "Prata";
}else if(total > 50 && total <= 80){
    rank = "Ouro";
}else if(total > 80 && total <= 90){
    rank = "Diamante";
}else if(total > 90 && total <= 100){
    rank = "Lendário";
}else {
    rank = "Imortal";
}

console.log(`O Herói tem o saldo de vítorias de ${total} e está no nível de ${rank}`);