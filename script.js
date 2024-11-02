// Función para encender la vela y mostrar el texto
document.addEventListener('DOMContentLoaded', () => {
    const vela = document.getElementById('vela');
    const birthdayText = document.getElementById('birthday-text');

    // Animación inicial de encendido de la vela
    setTimeout(() => {
        // Supongamos que la vela se enciende después de 1 segundo
        birthdayText.style.opacity = 1;
    }, 1000);
});

// Función para activar fuegos artificiales y sonidos
function triggerFireworks() {
    const vela = document.getElementById('vela');
    const confettiCanvas = document.getElementById('confetti-canvas');
    const fireworkSound = document.getElementById('firework-sound');

    // Apagar la vela
    vela.style.animation = 'none';
    vela.style.opacity = 0;

    // Reproducir sonido de fuegos artificiales
    fireworkSound.play();

    // Lanzar fuegos artificiales
    launchConfetti();
}

// Función para lanzar confeti usando Canvas Confetti
function launchConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, skew start velocity
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0, 1), y: Math.random() - 0.2 }
        }));
    }, 250);
}
