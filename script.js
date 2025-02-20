document.addEventListener("DOMContentLoaded", function () {
    const clickSound = document.getElementById("click-sound");
    const hoverSound = document.getElementById("hover-sound");

    const links = document.querySelectorAll("nav a");

    // Sonido al hacer clic
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Detiene la redirección inmediata

            clickSound.currentTime = 0; // Reinicia el sonido si ya se ha reproducido
            clickSound.play().then(() => {
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300); // Ajusta el tiempo según la duración del sonido
            }).catch(error => {
                console.error("Error al reproducir el sonido:", error);
                window.location.href = link.href;
            });
        });

        // Sonido al pasar el mouse por encima
        link.addEventListener("mouseenter", function () {
            hoverSound.currentTime = 0; // Reinicia el sonido si ya se ha reproducido
            hoverSound.play().catch(error => console.error("Error al reproducir hover sound:", error));
        });
    });
});