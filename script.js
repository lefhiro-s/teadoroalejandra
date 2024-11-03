// Función para activar confeti y mostrar palabras emotivas
function activateCelebration() {
    const touchButton = document.querySelector('.touch-button');
    const confettiSound = document.getElementById('confetti-sound');
    const pastel = document.querySelector('.pastel');
    const emotiveWords = document.querySelector('.emotive-words');

    // Deshabilitar el botón para evitar múltiples clics
    touchButton.disabled = true;

    // Reproducir sonido de confeti
    confettiSound.currentTime = 0; // Reiniciar sonido si se reproduce nuevamente
    confettiSound.play();

    // Ocultar pastel con transición
    pastel.style.opacity = '0';
    pastel.style.transform = 'scale(0.8) rotate(-10deg)'; // Reducir tamaño y rotar para ocultarlo

    // Mostrar palabras emotivas con animación
    emotiveWords.classList.add('active');

    // Lanzar confeti
    launchConfetti();

    // Opcional: Restaurar estado después de un tiempo
    setTimeout(() => {
        // Puedes elegir mantener las palabras emotivas o revertir cambios
        // touchButton.disabled = false;
        // pastel.style.opacity = '1';
        // pastel.style.transform = 'scale(1) rotate(0deg)';
        // emotiveWords.classList.remove('active');
    }, 5000); // 5 segundos
}

// Función para lanzar confeti
function launchConfetti() {
    const duration = 5 * 1000; // Duración del confeti en milisegundos
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
