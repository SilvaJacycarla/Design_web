/* Processamento/Armazenamento */
let hoje = new Date();
/* Entradas */
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc
/*Saidas*/ 
const saudacao = document.getElementById("saudacao")
const aniversario = document.getElementById("aniversario")

/*Passo a passo*/
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let data_nasc = new Date(nasc.value);
    let data_aniv = new Date(2026, nasc.value.getMonth(), nasc.value.getDate());
    let data_formatada = `${hoje.getDate()}/${hoje.getMonth()+1}/${hoje.getFullYear()}`;
    saudacao.innerHTML = `Olá, ${nome.value}! Hoje é ${data_formatada}`;
    if (data_aniv > hoje){
        aniversario
    }
    aniversario.innerHTML = `Diferença de hoje para aniv ${hoje - data_nasc}`
    cadastro.reset()
})

