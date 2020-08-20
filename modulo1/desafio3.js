// jovem tem mais de 16 anos e mulher 18 

const nome = "raquel"
const idade = 17
const sexo = "M"


if ((sexo == "H" && idade >= 16) ||
    (sexo == "M" && idade >= 18)) {
    console.log (`${nome} voce pode entrar`)
}else {
    console.log(`${nome} sua idade de ${idade} anos  nao  permite sua entrada`)
}
