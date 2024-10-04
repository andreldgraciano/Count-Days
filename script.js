function contarDias() {
    const dataInicial = new Date("2023-11-26"); // Data inicial
    const dataAtual = new Date(); // Data atual

    const diferencaTempo = dataAtual - dataInicial;

    const diasPassados = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

    document.getElementById("days").textContent = diasPassados + ' dias';
}