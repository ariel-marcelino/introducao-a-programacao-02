// ****Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

const alunos = [
  {
    name: "Ariel",
    nota01: 9,
    nota02: 7,
  },
  {
    name: "Mariana",
    nota01: 8,
    nota02: 9,
  },
  {
    name: "Iracema",
    nota01: 5,
    nota02: 6,
  },
  {
    name: "Robervaldo",
    nota01: 2,
    nota02: 5,
  },
  {
    name: "Clovis",
    nota01: 3,
    nota02: 7,
  },
  {
    name: "Kleberson",
    nota01: 9,
    nota02: 10,
  },
];

function mediaNota(aluno) {
  return aluno.nota01 + aluno.nota02 / 2;
}

for (let aluno of alunos) {
  const media = mediaNota(aluno);

  if (media > 7) {
    alert(
      `${aluno.name} sua media foi de ${media}! \n Parabens ${aluno.name} Voce foi aprovado para o curso!!!`
    );
  } else {
    alert(
      `${aluno.name} sua media foi de ${media}!  \n Não foi desta vez ${aluno.name}! Tente novamente na proxima.`
    );
  }
}
