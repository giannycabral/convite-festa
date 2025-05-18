// Confetti effect
function createConfetti(amount = 50) {
  const colors = [
    "#FF9AA2",
    "#FFB7B2",
    "#FFDAC1",
    "#E2F0CB",
    "#B5EAD7",
    "#C7CEEA",
  ];
  const shapes = ["●", "■", "★", "♥"];
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < amount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    // Posição aleatória
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    // Aparência aleatória
    if (Math.random() > 0.5) {
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = Math.random() * 10 + 5 + "px";
      confetti.style.height = Math.random() * 10 + 5 + "px";
    } else {
      confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
      confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.fontSize = Math.random() * 15 + 10 + "px";
    }

    // Animação
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(confetti);

    // Remove após a animação
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Música de fundo
let isPlaying = false;
const musicBtn = document.getElementById("music-btn");
const bgm = document.getElementById("bgm");

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgm.pause();
    musicBtn.textContent = "🎵 Música";
    musicBtn.classList.remove("playing");
  } else {
    bgm.play();
    musicBtn.textContent = "🔇 Pausar";
    musicBtn.classList.add("playing");
  }
  isPlaying = !isPlaying;
});

// Explosão de confetes ao carregar
function confettiExplosion() {
  createConfetti(100);
  setInterval(() => {
    createConfetti(5);
  }, 3000);
}

// RSVP button
document.getElementById("rsvp-btn").addEventListener("click", function () {
  alert(
    "Obrigado por confirmar sua presença! Estou animado para te ver na festa! 🎂🎈"
  );
  createConfetti(50);
});

// Init
window.addEventListener("load", () => {
  confettiExplosion();

  // Toca música se o usuário interagir com a página
  document.addEventListener(
    "click",
    () => {
      if (!isPlaying) {
        bgm.play();
        musicBtn.textContent = "🔇 Pausar";
        musicBtn.classList.add("playing");
        isPlaying = true;
      }
    },
    { once: true }
  );
});
