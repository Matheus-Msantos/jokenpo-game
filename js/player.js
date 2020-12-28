window.onload = function () {
    let btnSave = document.getElementById('btnSalvar');

    btnSave.onclick = saveName;
}

function saveName() {
    let inputName = document.getElementById('namePlayer');
    var name = inputName.value;

    localStorage.setItem('namePlayer', name);
};


function redirectPage(event) {
    event.preventDefault();
    window.location.assign("rules.html");
}


