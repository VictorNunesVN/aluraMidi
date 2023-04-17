/* Exemplo 1*/
document.querySelector('.tecla_pom')

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio)
    if (elemento != null && elemento.localName === 'audio'){
        //localName informa qual propriedade, onde o elemento guarda a informação do nome.
            elemento.play() 
        }
    else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

/*Referências ->> devem ser criadas com base no valor que elas vão receber e vão guardar. São declaradas com CONST*/
//const listaDeTeclas = document.querySelectorAll(".tecla")// quarda todos os botões
const listaDeTeclas = document.querySelectorAll(".tecla")
const listaDeSons = document.querySelectorAll(".som")

// Referência variável no JavaScrip ->> Uma variável que receberá um valor novo. São declaradas com LET
//let contador = 0;

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];

    // A classList retorna uma lista mostrando o id e a classe ,
    // no caso ele mostra o id que está na posição 1 da lista.  
    const instrumento = tecla.classList[1];
    
    /*Template string ->> `${variável/constante/referencias/contas/...}`*/
    /* No caso, ele concatena uma string com o referencial INSTRUMENTO para formar a string com o id do audio que será tocado. */
    const idAudio = `#som_${instrumento}`;

    /**Criando função anônima para receber a função tocaSom. Função anômima ->> function() */
    tecla.onclick = function(){
        //aqui a função tocaSom pega o id de cada audio pra tocar o som específico.
        tocaSom(idAudio)
    }
    //contador = contador + 1;
    // ONKEYDOWN ->> evento de teclado, quando a tecla estiver abaixada.
    // ONKEYUP ->> evento de teclado, quando a tecla estiver levantada
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space'){
        console.log(evento.code === 'Space')
        // .ADD vai adicionar uma classe a lista de classes do elemento.
        tecla.classList.add('ativa');
        }
        if (evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        //.REMOVE vai remover uma classe da lista de classes do elemento.
        tecla.classList.remove('ativa');
    }
}