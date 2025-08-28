document.addEventListener("DOMContentLoaded", () => {
  // ============================
  // Criar corações flutuantes
  // ============================
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // posição horizontal aleatória
    heart.style.left = Math.random() * 100 + "vw";
    // tamanho aleatório
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    // remover coração depois da animação
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }

  // criar corações a cada 500ms
  setInterval(createHeart, 500);

  // ============================
  // Contador de tempo juntos
  // ============================
  function atualizarContador() {
    const dataInicio = new Date("2024-10-01T00:00:00");
    const agora = new Date();
    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("tempoJuntos").innerText =
      `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
  }

  atualizarContador(); // atualizar imediatamente ao carregar
  setInterval(atualizarContador, 1000); // atualizar a cada segundo

  // ============================
  // Mensagem de amor aleatória na cartinha
  // ============================
  const mensagens = [
    "Amor, eu te amo mais a cada dia! 💖",
    "Você é a razão do meu sorriso todos os dias 😍",
    "Meu coração é seu para sempre ❤️",
    "Cada momento contigo é um presente 🎁",
    "Você é minha felicidade e meu lar 🏡",
    "Amar você é a melhor coisa que existe 💘",
    "Obrigado por existir na minha vida 🌹"
  ];

  const mensagemCartinha = document.getElementById("mensagemCartinha");
  mensagemCartinha.innerText = mensagens[Math.floor(Math.random() * mensagens.length)];

  // ============================
  // Fechar cartinha automaticamente após 20s
  // ============================
  const cartinha = document.getElementById("cartinha");
  setTimeout(() => {
    cartinha.style.display = "none";
  }, 20000);

  // também fecha ao clicar
  cartinha.addEventListener("click", () => {
    cartinha.style.display = "none";
  });
});
