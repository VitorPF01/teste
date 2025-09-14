document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnCumprimentar');
    const saida = document.getElementById('saida');

    botao.addEventListener('click', () => {
        const nome = document.getElementById('nome').value.trim();

        if (!nome) {
            saida.textContent = "Por favor, digite seu nome.";
            return;
        }

        const hora = new Date().getHours();
        let saudacao = "";

        if (hora >= 5 && hora < 12) {
            saudacao = "Bom dia";
        } else if (hora >= 12 && hora < 18) {
            saudacao = "Boa tarde";
        } else {
            saudacao = "Boa noite";
        }

        saida.textContent = `${saudacao}, ${nome}! Seja bem-vindo à extensão.`;
    });
});
