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
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

const tempos =
[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoAtualFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos /60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 14);

    segundos %= 60;
    minutos %= 60;
    horas %=24;
    if(tempoFinal >0){
        return [dias,horas,minutos,segundos];
    } else {
   return [0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0<contadores.length;i++){
        document.getElementByld("dias"+i).textContent=
    calculaTempo(tempos[i])[0];
        document.getElementByld("horas"+i).textContent =
    calculaTempo(tempos[i])[1];
        Document.getElementByld("min"+i).textContent = 
    calculaTempo(tempos[i])[2];
        document.getElementByld("seg"+i).textContent =
    calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setlnterval(atualizacronometro,1000);
}

comecaCronometro();