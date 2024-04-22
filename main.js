const botoes = documen.querySelectorALL(".botao");
const textos = documen.querySelectorALL(".aba-conteudo");

for(let i = 0;i <botoes.length; i++){
    botoes[i].onclick = function (){

        for (let j = 0; j <botoes.length;j++) {
    botoes[j]classList.remove("ativo");
    textos[j]classList.remove("ativo");
     }

     botoes[i].classList.add("ativo");
     textos[]i.classList.add("ativo");
    }
}

const contadores = ducument.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");