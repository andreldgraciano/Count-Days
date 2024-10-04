function contarDias() {
    const dataInicial = new Date("2023-11-26");
    const dataAtual = new Date();

    const diferencaTempo = dataAtual - dataInicial;

    const diasPassados = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

    document.getElementById("days").textContent = diasPassados + ' dias';
}