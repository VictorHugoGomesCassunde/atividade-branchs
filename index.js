function mudarFundo() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f0f0f0' : 'lightblue';
}
function mostrarDataHora() {
    const dataHora = new Date();
    document.getElementById("data-hora").innerHTML = "Data e Hora Atual: " + dataHora.toLocaleString();
}
