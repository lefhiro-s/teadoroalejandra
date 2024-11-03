// script.js

// Variable para controlar si las palabras ya han aparecido
let wordsShown = false;

// Función para activar confeti y mostrar palabras emotivas
function activateCelebration() {
    if (wordsShown) return; // Evita ejecutar si ya se han mostrado las palabras

    // Desactivar el botón temporalmente
    const touchButton = document.querySelector('.touch-button');
    touchButton.disabled = true;
    touchButton.style.cursor = 'default';
    touchButton.style.opacity = '0.5';

    // Reproducir sonido de confeti
    const confettiSound = document.getElementById('confetti-sound');
    confettiSound.play();

    // Lanzar confeti
    launchConfetti();

    // Mostrar las palabras emotivas
    showEmotiveWords();

    // Tiempo para reactivar el botón (duración de la animación de confeti)
    setTimeout(() => {
        touchButton.disabled = false;
        touchButton.style.cursor = 'pointer';
        touchButton.style.opacity = '0.8';
    }, 5000); // 5 segundos
}

// Función para lanzar confeti usando Canvas Confetti
function launchConfetti() {
    const duration = 5 * 1000; // 5 segundos
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
    if (wordsShown) return; // Evita mostrar nuevamente

    const words = document.querySelectorAll('.word');
    words.forEach(word => {
        word.classList.add('aos-animate');
    });

    wordsShown = true; // Marca que las palabras ya han sido mostradas
}
