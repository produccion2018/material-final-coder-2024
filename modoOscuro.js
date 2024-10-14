function modoOscuro() {
    let mauro_body = document.body;
    mauro_body.classList.toggle("dark-mode");

    // compruevo si esta marcado
    if (document.getElementById('coderHouse').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }


}

