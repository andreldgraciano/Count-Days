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

function atualizarImagem() {
    const imgGato = document.getElementById('imgGato');

    // Esconde a imagem enquanto a nova imagem é carregada
    

    fetch("https://api.thecatapi.com/v1/images/search?api_key=live_5xYND8fOJuz5vPIl4tJKN05ABZbtWEWd035ehl7ufAczofRwawk3ktMvou1zIUmW")
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0].url;

            // Define o evento onload para mostrar a imagem quando ela for carregada
            imgGato.onload = function() {
                imgGato.classList.remove('hidden');  // Exibe a imagem quando carregada
            };

            // Atualiza o src da imagem para a nova URL
            imgGato.src = imageUrl;
        })
        .catch(error => {
            console.error("Erro ao buscar a imagem:", error);
        });
}

// Chama a função a cada 5 segundos
setInterval(atualizarImagem, 5000);

// Chama imediatamente a primeira vez para carregar uma imagem logo que a página é carregada
atualizarImagem();
