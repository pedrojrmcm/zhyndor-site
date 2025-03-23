// script.js

// Efeito de digitação no texto principal
const text = "Bem-vindo a Zhyndor";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.getElementById("dynamic-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = function () {
    typeEffect();

    // Inicializa partículas mágicas
    particlesJS("particles-js", {
        particles: {
            number: { value: 80 },
            color: { value: "#f0d878" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2 }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // Efeito Parallax
    document.addEventListener("scroll", function () {
        let scrollPos = window.scrollY;
        document.getElementById("layer1").style.transform = `translateY(${scrollPos * 0.2}px)`;
        document.getElementById("layer2").style.transform = `translateY(${scrollPos * 0.4}px)`;
        document.getElementById("layer3").style.transform = `translateY(${scrollPos * 0.6}px)`;
    });
};

// Mostrar e esconder menu ao rolar
let lastScrollTop = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        header.classList.add("hidden"); // Esconde ao descer
    } else {
        header.classList.remove("hidden"); // Mostra ao subir
    }
    lastScrollTop = scrollTop;
});

// Música de fundo
const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");
let isPlaying = false;

musicToggle.addEventListener("click", function () {
    if (isPlaying) {
        music.pause();
        musicToggle.textContent = "🎵 Tocar Música";
    } else {
        music.play();
        musicToggle.textContent = "🔇 Pausar Música";
    }
    isPlaying = !isPlaying;
});

// Interação com mapa
document.querySelectorAll(".map-point").forEach(point => {
    point.addEventListener("click", function () {
        document.getElementById("map-info").textContent = this.getAttribute("data-info");
    });
});

// Efeito de sombra dinâmica com o mouse
document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    document.documentElement.style.setProperty("--shadowX", `${x}px`);
    document.documentElement.style.setProperty("--shadowY", `${y}px`);
});

function changeTheme() {
    const hour = new Date().getHours();
    const body = document.body;

    if (hour >= 6 && hour < 18) {
        // Tema dia
        body.style.background = "linear-gradient(180deg, #87CEEB, #FFD700)";
    } else {
        // Tema noite
        body.style.background = "linear-gradient(180deg, #1b2735, #090a0f)";
    }
}

changeTheme(); // chama ao carregar

setInterval(changeTheme, 300000); // atualiza a cada 5 minutos

