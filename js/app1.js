 const balu = {
    nome: "Balu Brasil",
    cor: "preto",
    altura: 0.58,
    peso: 11.5,
    raca: "vira-lata",
    latir(){
        alert("au au");
    },
    comer(kg){
        this.peso = this.peso + kg;
        alert("Comi")
    },
    cagar(kg){
        this.peso = this.peso - kg;
        alert("Me caguei")
    },
    saudar(){
        let msg = `Olá meu nome é ${this.nome}\n`;
        msg = msg+`Cor: ${this.cor} Raça:${this.raca}\n`
        msg = msg+`Peso: ${this.peso}\n`
        msg = msg+`Altura: ${this.paltura}\n`
        alert(msg)
    }
 }