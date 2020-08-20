//desafio 1 

const nome = "carlos ";
const peso = 84;
const altura = 1.88;
const sexo = "masculino" 

const imc = ( peso /( altura * altura ) );
console.log (imc);


if  ( imc >= 30 ) {
    console.log (` ${nome} voce esta acima do ${peso} `) 
 } if ( imc < 29.9) {
    console.log (` ${nome}nao esta acima do ${peso}`)
}

