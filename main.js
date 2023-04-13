/* Exemplo 1*/
document.querySelector('.tecla_pom')

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}


/*Referências ->> devem ser criadas com base no valor que elas vão receber e vão guardar. São declaradas com CONST*/
//const listaDeTeclas = document.querySelectorAll(".tecla")// quarda todos os botões
const listaDeTeclas = document.querySelectorAll(".tecla")
const listaDeSons = document.querySelectorAll(".som")

// Referência variável no JavaScrip ->> Uma variável que receberá um valor novo. São declaradas com LET
let contador = 0;

while(contador < 9){
    listaDeTeclas[0].onclick = tocaSom;
    contador = contador + 1;
    console.log(contador)
}