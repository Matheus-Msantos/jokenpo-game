// TESTE DE COMPARAÇÃO

console.assert(
    game.calcResult(PEDRA, TESOURA) === PEDRA,
    'quando calculado o resultado de PEDRA versus TESOURA, deve retornar PEDRA');

console.assert(
    game.calcResult(TESOURA, PEDRA) == PEDRA,
    'quando calculado o resultado de TESOURA versus PEDRA, deve retornar PEDRA');

console.assert(
    game.calcResult(TESOURA, PAPEL) == TESOURA,
    'quando calculado o resultado de TESOURA versus PAPEL, deve retornar TESOURA');

console.assert(
    game.calcResult(PAPEL, TESOURA) == TESOURA,
    'quando calculado o resultado de PAPEL versus TESOURA, deve retornar TESOURA');

console.assert(
    game.calcResult(PAPEL, PEDRA) == PAPEL,
    'quando calculado o resultado de PAPEL versus PEDRA, deve retornar PAPEL');

console.assert(
    game.calcResult(PEDRA, PAPEL) == PAPEL,
    'quando calculado o resultado de PEDRA versus PAPEL, deve retornar PAPEL');

console.assert(
    game.calcResult(PEDRA, PEDRA) == 'DRAW',
    'quando calculado o resultado de PEDRA versus PEDRA, deve retornar mensagem de empate');

console.assert(
    game.calcResult(TESOURA, TESOURA) == 'DRAW',
    'quando calculado o resultado de TESOURA versus TESOURA, deve retornar mensagem de empate');

console.assert(
    game.calcResult(PAPEL, PAPEL) == 'DRAW',
    'quando calculado o resultado de PAPEL versus PAPEL, deve retornar mensagem de empate');

// TESTE DO PLAYER

console.assert(
    player.pickOptions(3, [1, 2, 3]) == 3,
    'quando selecionado a opção do player e essa opção existe no array de opções, deve retornar o valor da opção');

console.assert(
    player.pickOptions(8, [1, 2, 3]) == 'ERRO, Your picked not exist',
    'quando selecionado a opção do player e essa opção não existe no array de opções, deve retornar mensagem de erro');

