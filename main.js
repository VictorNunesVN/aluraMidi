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

while(contador < listaDeTeclas.length){


    const tecla = listaDeTeclas[contador];

    // A classList retorna uma lista mostrando o id e a classe ,
    // no caso ele mostra o id que está na posição 1 da lista.
    const instrumento = tecla.classList[1];
    console.log(instrumento)
    
    /*Template string ->> `${variável/constante/referencias/contas/...}`*/
    /* No caso, ele concatena uma string com o referencial INSTRUMENTO para formar a string com o id do audio que será tocado. */
    const idAudio = `#som_${instrumento}`;
    
    console.log(idAudio)
    

    /**Criando função anônima para receber a função tocaSom. Função anômima ->> function() */
    tecla.onclick = function(){
        //aqui a função tocaSom pega o id de cada audio pra tocar o som específico.
        tocaSom(idAudio)
    };
    contador = contador + 1;
    console.log(contador)
}