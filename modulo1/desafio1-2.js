

//criar um programa que calcula a media 
// das turmas  de alunos e envia a mensagem 
// do calculo  da media.  

const alunosDaTurmaA = [
  {
    nome: 'Juliano',
    nota: 5.0
  },
  {
    nome: 'Rafael',
    nota: 8.0
  },
  {
    nome: 'Carla',
    nota: 5.0
  },
]


const alunosDaTurmaB = [
  {
    nome: 'Jefferson',
    nota: 5
  },
  {
    nome: 'Rafaela',
    nota: 5
  },
  { 
    nome: 'julia',
    nota: 4

  },
  { nome: 'novo aluno',
    nota:  5
  }
]


function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
          soma = soma + alunos[i].nota
  }
  const media = soma / alunos.length
  return media
}


const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviamensagem(media,turma) {
  if (media > 5) {
    console.log(`a media da ${turma} foi de  ${media} .Parabens turma `)
  } else {

    console.log(`A media da ${turma} foi de ${media} .nao atingiu a nota minima  5`)
  }
}

enviamensagem(media1,'turmaA')
enviamensagem(media2,'turmaB')