class Animal{
    constructor(n, c="desconhecido", a=0.0, p=0, r="vira-lata"){
        this.nome = n;
        this.cor = c;
        this.altura = a;
        this.peso = p;
        this.raca = r;
    }
    falar(){
        alert("oi");
    }
    comer(kg){
        this.peso = this.peso + kg;
        alert("Comi");
    }
    cagar(kg){
        this.peso = this.peso - kg;
        alert("Caguei");
    }
    saudar(){
        let msg = `Olá meu nome é ${this.nome}\n`;
        msg = msg+`Cor: ${this.cor} Raça:${this.raca}\n`
        msg = msg+`Peso: ${this.peso}\n`
        msg = msg+`Altura: ${this.altura}\n`
        return msg;
    }
}

class Cachorro extends Animal{
    constructor(n, c="desconhecido", a=0.0, p=0, r="vira-lata"){
        super(n,c,a,p,r);
        this.patas = 4;
    }
    falar(){
        alert("au!au!");
    }
    saudar(){
        let msg = super.saudar()
        msg = msg +"Sou um cachorro!";
        alert(msg);
    }
}

class Passaro extends Animal{
    constructor(n, c="desconhecido", a=0.0, p=0, r="vira-lata"){
        super(n,c,a,p,r);
    }
    falar(){
        alert("fiu!fiu!");
    }
        saudar(){
        let msg = super.saudar()
        msg = msg +"Sou um pássaro!";
        alert(msg);
    }
}


const balu = new Cachorro("Balu Brasil");
const mel = new Cachorro("Mel", "Amarelo", 1.10, 45, "Labrador");
const leleco = new Passaro("Leleco Brasil", r="Papagaio");