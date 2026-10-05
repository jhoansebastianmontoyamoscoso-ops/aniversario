

const enlaceSpotify = "https://open.spotify.com/playlist/7GJ2SA3cqqIZv2fLgvtNUA?si=MRY75wMsSR298xQRXyJ-2w&utm_source=copy-link&pi=WHNYJJXJTPSy6";
const enlaceRegalo = "https://jhoansebastianmontoyamoscoso-ops.github.io/Regalo-2/";
const paginas = document.querySelectorAll(".pagina");

let paginaActual = 0;

function cambiarPagina(siguientePagina) {

    if (
        siguientePagina < 0 ||
        siguientePagina >= paginas.length
    ) {
        return;
    }

    paginas[paginaActual].classList.remove("activa");

    paginaActual = siguientePagina;

    paginas[paginaActual].classList.add("activa");
}

const botonAbrir =
    document.getElementById("botonAbrir");

const siguiente1 =
    document.getElementById("siguiente1");

const siguiente2 =
    document.getElementById("siguiente2");

const siguiente3 =
    document.getElementById("siguiente3");

const anterior2 =
    document.getElementById("anterior2");

const anterior3 =
    document.getElementById("anterior3");

const anterior4 =
    document.getElementById("anterior4");

const anterior5 =
    document.getElementById("anterior5");

botonAbrir.addEventListener("click", function () {
    cambiarPagina(1);
});

siguiente1.addEventListener("click", function () {
    cambiarPagina(2);
});

siguiente2.addEventListener("click", function () {
    cambiarPagina(3);
});

siguiente3.addEventListener("click", function () {
    cambiarPagina(4);
});

anterior2.addEventListener("click", function () {
    cambiarPagina(0);
});

anterior3.addEventListener("click", function () {
    cambiarPagina(1);
});

anterior4.addEventListener("click", function () {
    cambiarPagina(2);
});

anterior5.addEventListener("click", function () {
    cambiarPagina(3);
});

const botonSpotify =
    document.getElementById("botonSpotify");

botonSpotify.addEventListener("click", function () {

    if (
        enlaceSpotify === "" ||
        enlaceSpotify === "AQUI_PONGO_MI_LINK"
    ) {

        alert(
            "Primero coloca el enlace de tu playlist de Spotify en script.js"
        );

        return;
    }

    window.open(
        enlaceSpotify,
        "_blank"
    );
});

const fotos =
    document.querySelectorAll(".foto img");

const visorFoto =
    document.getElementById("visorFoto");

const imagenAmpliada =
    document.getElementById("imagenAmpliada");

const cerrarVisor =
    document.getElementById("cerrarVisor");

fotos.forEach(function (foto) {

    foto.addEventListener("click", function () {

        imagenAmpliada.src = foto.src;

        visorFoto.classList.add("activo");

    });

});

cerrarVisor.addEventListener("click", function () {

    visorFoto.classList.remove("activo");

});

visorFoto.addEventListener("click", function (evento) {

    if (evento.target === visorFoto) {

        visorFoto.classList.remove("activo");

    }

});

const contenedorParticulas =
    document.getElementById("particulas");

function crearParticula() {

    const particula =
        document.createElement("div");

    particula.classList.add("particula");

    particula.style.left =
        Math.random() * 100 + "%";

    const duracion =
        6 + Math.random() * 8;

    particula.style.animationDuration =
        duracion + "s";

    const tamaño =
        2 + Math.random() * 3;

    particula.style.width =
        tamaño + "px";

    particula.style.height =
        tamaño + "px";

    contenedorParticulas.appendChild(particula);

    setTimeout(function () {

        particula.remove();

    }, duracion * 1000);
}

setInterval(crearParticula, 500);

function crearCorazon() {

    const corazon =
        document.createElement("div");

    corazon.innerHTML = "♥";

    corazon.style.position = "fixed";

    corazon.style.left =
        Math.random() * 100 + "%";

    corazon.style.bottom = "-30px";

    corazon.style.fontSize =
        (10 + Math.random() * 15) + "px";

    corazon.style.color = "#ff4d91";

    corazon.style.opacity = "0.5";

    corazon.style.pointerEvents = "none";

    corazon.style.zIndex = "5";

    corazon.style.transition =
        "transform 7s linear, opacity 7s linear";

    document.body.appendChild(corazon);

    setTimeout(function () {

        corazon.style.transform =
            "translateY(-110vh)";

        corazon.style.opacity = "0";

    }, 100);

    setTimeout(function () {

        corazon.remove();

    }, 7200);
}

setInterval(crearCorazon, 2000);

const botonRegalo = document.getElementById("botonRegalo");

botonRegalo.addEventListener("click", function () {
    window.open(enlaceRegalo, "_blank");
});



