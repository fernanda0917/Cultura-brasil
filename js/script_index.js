document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // MENÚ RESPONSIVE
    // ===============================

    const botonMenu = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    if (botonMenu && menu) {

        botonMenu.addEventListener("click", function () {

            menu.classList.toggle("active");

            const abierto = menu.classList.contains("active");

            botonMenu.setAttribute("aria-expanded", abierto);
        });
    }

    // ===============================
    // SLIDER
    // ===============================

    const slider = document.getElementById("slider-img");

    if (slider) {

        const imagenes = [
            { src: "images/brasil.jpg", alt: "Cultura brasileña" },
            { src: "images/carnaval.jpg", alt: "Carnaval de Brasil" },
            { src: "images/samba.jpg", alt: "Baile de samba" },
            { src: "images/feijoada.webp", alt: "Feijoada de Brasil" }
        ];

        let index = 0;

        function mostrarImagen() {
            slider.src = imagenes[index].src;
            slider.alt = imagenes[index].alt;
        }

        function siguienteImagen() {
            index = (index + 1) % imagenes.length;
            mostrarImagen();
        }

        function anteriorImagen() {
            index = (index - 1 + imagenes.length) % imagenes.length;
            mostrarImagen();
        }

        window.siguienteImagen = siguienteImagen;
        window.anteriorImagen = anteriorImagen;

        mostrarImagen();

        const intervalo = setInterval(siguienteImagen, 3000);
    }

    // ===============================
    // MENSAJE DINÁMICO
    // ===============================

    const mensaje = document.getElementById("mensaje");

    if (mensaje) {

        const hora = new Date().getHours();

        if (hora < 12) {

            mensaje.textContent =
                "Buenos días, bienvenido al sitio web.";

        } else if (hora < 18) {

            mensaje.textContent =
                "Buenas tardes, disfruta del contenido.";

        } else {

            mensaje.textContent =
                "Buenas noches, gracias por visitar el sitio.";
        }
    }

});
