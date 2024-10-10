function contarDias() {
    const dataInicial = new Date("2023-11-26");
    const dataAtual = new Date();

    dataAtual.setHours(dataAtual.getHours() - 3);

    const diferencaTempo = dataAtual - dataInicial;

    const diasPassados = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

    document.getElementById("days").textContent = diasPassados + ' dias';
}

const coracao = document.getElementById('coracao');
const audioPlayer = document.getElementById('audioPlayer');

coracao.addEventListener('click', function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});