const player = localStorage.getItem('winner');


window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#bigWinner').textContent = player + ' is the big winner';
});