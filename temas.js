const tema = localStorage.getItem("tema");

if (tema === "escuro") {
    document.documentElement.classList.add("dark-mode");
}

function alternarTema() {

    document.documentElement.classList.toggle("dark-mode");

    const escuro =
        document.documentElement.classList.contains("dark-mode");

    localStorage.setItem(
        "tema",
        escuro ? "escuro" : "claro"
    );

    atualizarBotao();
}

function atualizarBotao() {

    const botoes =
        document.querySelectorAll(".dark-mode-btn");

    const escuro =
        document.documentElement.classList.contains("dark-mode");

    botoes.forEach(botao => {

        botao.textContent =
            escuro
                ? "☀️ Modo claro"
                : "🌙 Modo escuro";

    });
}

document.addEventListener(
    "DOMContentLoaded",
    atualizarBotao
);
