var nasc = 2009;
let nome = "Jacy";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true;
        var podebeber = false;
    }else{
        menor = false;
        var podebeber = true;
    }

    alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}\nPode beber: ${podebeber}`)
    return idade;
}

calcIdade();
/* var ´vaza` a variavel dentro do escopo da mesma funçao
alert(`Pode beber: ${podebeber}`)
*/
/*
alert(`Fora da função : Idade ${idade}`); 
Erro pois a vaiavel let nao existe fora do escopo dela 
*/
alert(`Fora da função : chamando calcIdade ${calcIdade(2027)}`);