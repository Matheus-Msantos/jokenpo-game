window.onload = function () {
    let btnSalvar = document.getElementById('btnSalvar');

    btnSalvar.onclick = salvarnome;
}

function salvarnome() {
    let inputName = document.getElementById('namePlayer');
    var name = inputName.value;

    localStorage.setItem('nomePlayer', name);
};


function mudaPagina(event) {
    event.preventDefault();
    window.location.assign("rules.html");
}


