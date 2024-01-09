class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.especialidade = [
            {
                tipo: "guerreiro",
                ataque: "espada"
            },
            {
                tipo: "mago",
                ataque: "magia"
            },
            {
                tipo: "monge",
                ataque: "artes marciais"
            },
            {
                tipo: "ninja",
                ataque: "shuriken"
            }
        ]
    
        this.ataque;
    
    }

    atacar(){
        this.especialidade.forEach(element => {
            if (this.tipo === element.tipo){
                this.ataque = element.ataque;
            }
        })
        console.log(`O ${this.tipo} usou ${this.ataque}`)
    }

}

let personagem1 = new personagem("rafael", "30", "guerreiro");
let personagem2 = new personagem("Maria", "25", "mago");

personagem1.atacar();
personagem2.atacar();