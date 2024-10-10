function modoOscuro() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");

    // compruevo si esta marcado
    if (document.getElementById('coderHouse').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }


}

