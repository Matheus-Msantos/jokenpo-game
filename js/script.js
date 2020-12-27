const PEDRA = 'pedra';
const TESOURA = 'tesoura';
const PAPEL = 'papel';

const player = {
    name: 'Player',
    points: 0,
    sequence: 0,
    pickOptions(picked, options) {
        for (let i = 0; i < options.length; i++) {
            if (picked == options[i]) {
                return picked;
            }
        }
        return 'ERRO, Your picked not exist';
    }
}

const machine = {
    name: 'Machine',
    points: 0,
    sequence: 0,
    pickOptions: function (options) {
        const picked = Math.floor(Math.random() * options.length)
        return options[picked];
    }
}

const game = {
    options: [PEDRA, TESOURA, PAPEL],
    calcResult(option1, option2) {
        const option1RockWin = option1 == PEDRA && option2 == TESOURA;
        const option1ScissorsWin = option1 == TESOURA && option2 == PAPEL;
        const option1PaperWin = option1 == PAPEL && option2 == PEDRA;

        const option1Win = option1RockWin || option1ScissorsWin || option1PaperWin;

        if (option1Win) {
            return option1;
        } else if (option1 == option2) {
            return 'DRAW';
        } else {
            return option2;
        }
    },

    play(pickedPlayer) {

        const escolhaMaquina = machine.pickOptions(game.options);
        const escolhaPlayer = player.pickOptions(pickedPlayer, game.options);

        const resultadoDaJogada = game.calcResult(escolhaPlayer, escolhaMaquina);

        const draw = escolhaPlayer === escolhaMaquina;

        console.log('Escolha maquina', escolhaMaquina);
        console.log('Escolha player', escolhaPlayer);
        console.log('Resultado da jogada', resultadoDaJogada);

        if (resultadoDaJogada === escolhaPlayer) {
            this.gameWinner(player);
            this.sequenceWinner(player);
            player.points += player.sequence;

        }

        if (resultadoDaJogada === escolhaMaquina) {
            this.gameWinner(machine);
            this.sequenceWinner(machine);
            machine.points += machine.sequence;
        }

        if (draw) {
            this.gameWinner();
        }

        document.querySelector('#playerPoints').textContent = player.points;
        document.querySelector('#machinePoints').textContent = machine.points;

        document.querySelector('#sequencePlayer').textContent = player.sequence;
        document.querySelector('#sequenceMachine').textContent = machine.sequence;

        document.querySelector('#pickedPlayer').innerHTML = '';
        document.querySelector('#pickedMachine').innerHTML = '';

        const imgPlayer = document.createElement('img');
        imgPlayer.setAttribute('src', 'img/' + escolhaPlayer + '.svg');

        const imgMachine = document.createElement('img');
        imgMachine.setAttribute('src', 'img/' + escolhaMaquina + '.svg');


        document.querySelector('#pickedPlayer').appendChild(imgPlayer);
        document.querySelector('#pickedMachine').appendChild(imgMachine);
    },

    sequenceWinner(winner) {

        if (winner == player) {
            player.sequence += 1
        } else {
            player.sequence = 0;
        }

        if (winner == machine) {
            machine.sequence += 1;
        } else {
            machine.sequence = 0;
        }
    },
    gameWinner(win) {
        if (win == player) {
            document.querySelector('#result').textContent = player.name + ' WON!';

        } else {
            if (win == machine) {
                document.querySelector('#result').textContent = machine.name + ' WON!';
            } else {
                document.querySelector('#result').textContent = 'DRAW';
            }
        }
    }
}




window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#playerPoints').textContent = player.points;
    document.querySelector('#machinePoints').textContent = machine.points;

    document.querySelector('#sequencePlayer').textContent = player.sequence;
    document.querySelector('#sequenceMachine').textContent = machine.sequence;
});


