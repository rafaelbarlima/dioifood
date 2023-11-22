let nome = "";
let xp = 0.00;

while(true){
    nome = prompt("Qual é o seu nome?");
    xp = prompt("Quanto de XP você tem?")
    if(nome != "" && xp != 0.00){
        break;
    }
}

if(xp <= 1000){
    console.log("Ferro");
}else if(xp > 1000 && xp <= 2000) {
    console.log(`${nome}, meu herói! Seu nível é Bronze`);
}else if(xp > 2000 && xp <= 5000) {
    console.log(`${nome}, meu herói! Seu nível é Prata`);
}else if(xp > 5000 && xp <= 7000){
    console.log(`${nome}, meu herói! Seu nível é Ouro`);
}else if(xp > 7000 && xp <= 8000) {
    console.log(`${nome}, meu herói! Seu nível é Platina`);
}else if(xp > 8000 && xp <= 9000) {
    console.log(`${nome}, meu herói! Seu nível é Ascendente`);
}else if(xp > 9000 && xp <= 10000) {
    console.log(`${nome}, meu herói! Seu nível é Imortal`);
}else{
    console.log(`${nome}, meu herói! Seu nível é Radiante`);
}