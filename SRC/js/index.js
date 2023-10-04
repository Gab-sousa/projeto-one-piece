const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');
const logos = document.querySelectorAll('.logo');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
        document.querySelector('.personagens').classList.add("after")

    });
});

logos.forEach((logo) => {
    logo.addEventListener("click", () => {
        document.querySelector('.personagens').classList.remove("after")
        desselecionarBotao();
        desselecionarPersonagem();

        document.querySelector('.home').classList.add("selecionado");

    });
});

function desselecionarBotao() {
    const botoesSelecionados = document.querySelectorAll(".botao.selecionado");
    botoesSelecionados.forEach(botao => botao.classList.remove("selecionado"));
};
function desselecionarPersonagem() {
    const personagensSelecionados = document.querySelectorAll(".personagem.selecionado");
    personagensSelecionados.forEach(personagem => personagem.classList.remove("selecionado"));

};