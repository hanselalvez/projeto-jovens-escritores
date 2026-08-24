const capasLivros = {

    voarDaBorboleta:
        "https://thumbs.dreamstime.com/b/reflex%C3%A3o-da-borboleta-dourada-ao-p%C3%B4r-do-sol-uma-foto-de-vidro-dourado-empoleirada-em-rocha-mossita-lado-um-lago-tranquilo-no-o-398745294.jpg",

    gatinhoSolitario:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSXflDyHPEwKYjMPqcvm5d85z8UeeP2V-Tw&s",

    jardimPalido:
        "https://uploads.spiritfanfiction.com/historias/capas/201802/jardim-sem-cor-11978335-060220180744.jpg",

    marionete:
        "https://i.pinimg.com/736x/2b/86/1a/2b861af17296101241bf373e934f32f5.jpg",

    cartasNuncaEnviadas:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mSVf3PajWOQVnDIV6OJNi-Z8R6UTqg4d-sZCdcrOU3a8TjwBPiMAEvDM&s=10",

    bosqueDasPalavras:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=700&q=80",

    entreEstrelas:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=80",

    oVento:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80",

    curtaNoites:
        "https://static.vecteezy.com/ti/fotos-gratis/t2/32489511-noite-sombrio-ceu-com-cheio-lua-e-galhos-arvore-galhos-dentro-a-luar-em-uma-sombrio-fundo-generativo-ai-foto.jpg",

    caminhoDasEstrelas:
        "https://i.pinimg.com/736x/99/0b/e2/990be202e6c7182ab36fd96645fbf574.jpg",

    cartasParaNinguem:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80",

    quandoANoiteResponde:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80",

    entreCoresEEstrelas:
        "https://i.pinimg.com/originals/70/fb/bb/70fbbbc208b9100a9898f03f7cee73c3.jpg",

    lugarOndeAsFloresSorriem:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80"

};


function colocarTodasAsCapas() {

    const imagens =
        document.querySelectorAll("[data-capa]");

    imagens.forEach(imagem => {

        const nome =
            imagem.dataset.capa;

        const capa =
            capasLivros[nome];

        if (capa) {

            imagem.src = capa;

        }

    });

}


document.addEventListener(
    "DOMContentLoaded",
    colocarTodasAsCapas
);
