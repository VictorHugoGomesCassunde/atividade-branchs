function mudarFundo() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f0f0f0' : 'lightblue';
}
function mostrarDataHora() {
    const dataHora = new Date();
    document.getElementById("data-hora").innerHTML = "Data e Hora Atual: " + dataHora.toLocaleString();
}
function mudarTexto() {
    document.getElementById("texto").innerHTML = "O texto foi alterado! Agora, você pode interagir novamente.";
}
function mostrarAlerta() {
    alert("Mensagem de Alerta: Você clicou no botão!");
}
function mudarCorTexto() {
    const texto = document.getElementById("texto");
    texto.style.color = texto.style.color === 'red' ? 'black' : 'red';
}
