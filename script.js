// Función para activar confeti y sonidos
function activateCelebration() {
    // Reproducir sonido de confeti
    const confettiSound = document.getElementById('confetti-sound');
    confettiSound.play();

    // Lanzar confeti usando Canvas Confetti
    launchConfetti();

    // Mostrar las palabras emotivas
    showEmotiveWords();

    // Opcional: Deshabilitar el botón después de clic para evitar múltiples activaciones
    const touchButton = document.querySelector('.touch-button');
    touchButton.disabled = true;
    touchButton.style.cursor = 'default';
    touchButton.style.opacity = '0.5';
}

// Función para lanzar confeti
function launchConfetti() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#DA70D6'] // Colores lila y complementarios
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#DA70D6']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Función para mostrar las palabras emotivas
function showEmotiveWords() {
    const words = document.querySelectorAll('.word');
    words.forEach(word => {
        word.classList.add('aos-animate');
    });
}
