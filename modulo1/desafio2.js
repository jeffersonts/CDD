//desafio 2

const nome = "jefferson";
const sexo = "m";
const idade = 55;
const contribuicao = 40;
    
const total = idade + contribuicao

console.log(total)



if ((sexo == "f" && total >= 85) || (sexo == "m" && total >= 95)) {
    console.log(` ${nome}, voce pode se aposentar `)
} else {
    console.log(` ${nome}, voce  nao pode se aposentar `)
}