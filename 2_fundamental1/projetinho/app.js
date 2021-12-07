//Pegar o input
//Se for sim, mostra as categoras disponiveis, pergunta qual categoria ela escolhe
//Se não, mostra todos os livros em ordem crescente plea quantidade de páginas

const livros = require('./database');
// console.log(livros);
const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro? S/N: ');
if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essa são as catgegorias disponiveis: ');
  console.log(
    'Produtividade',
    '/Tecnologia',
    '/Energias',
    '/Desenvolvimento',
    '/Espiritismo',
    '/Metodologias Ageis'
  );
  const entradaCategoria = readline.question('Qual categoria voce escolhe: ');

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

  console.table(retorno);
} else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
  console.log('Essas sao todos os livros disponiveis: ');
  console.table(livrosOrdenados);
}
