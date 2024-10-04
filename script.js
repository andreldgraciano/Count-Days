function contarDias() {
    const dataInicial = new Date("2023-11-26"); // Data inicial
    const dataAtual = new Date(); // Data atual

    // Cálculo da diferença em milissegundos
    const diferencaTempo = dataAtual - dataInicial;

    // Converter de milissegundos para dias
    const diasPassados = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

    // Inserir o valor no h1 com id "days"
    document.getElementById("days").textContent = diasPassados + ' dias';
}