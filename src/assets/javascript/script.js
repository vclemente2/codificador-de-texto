const codificador = {
    chaveCodificadora: ['a', 'e', 'i', 'o', 'u'],
    chaveDecodificadora: ['ai', 'enter', 'imes', 'ober', 'ufat'],
    codifica: function () {
        const { chaveCodificadora, chaveDecodificadora } = codificador;
        let campoEntrada = document.querySelector("#entrada");
        let campoSaida = document.querySelector("#saida");

        let texto = campoEntrada.value.toLowerCase();
        let textoCodificado = '';

        for (let letra of texto) {
            for (let i = 0; i < chaveCodificadora.length; i++) {
                const elemento = chaveCodificadora[i];
                if (letra === elemento) {
                    letra = chaveDecodificadora[i];
                }
            }
            textoCodificado += letra;
        }

        campoSaida.value = textoCodificado;
        campoEntrada.value = "";
        this.ajustaCampoSaida();
    },
    decodifica: function () {
        const { chaveCodificadora, chaveDecodificadora } = codificador;
        let campoEntrada = document.querySelector("#entrada");
        let campoSaida = document.querySelector("#saida");

        let texto = campoEntrada.value.toLowerCase();
        let textoDecodificado = texto;

        for (let i = 0; i < chaveDecodificadora.length; i++) {
            const elemento = chaveDecodificadora[i];
            while (textoDecodificado.includes(elemento)) {
                textoDecodificado = textoDecodificado.replace(elemento, chaveCodificadora[i]);
            }
        }

        campoSaida.value = textoDecodificado;
        campoEntrada.value = "";
    },
    copiaTexto: function () {
        let campoSaida = document.querySelector("#saida");
        navigator.clipboard.writeText(campoSaida.value);
        alert("Texto copiado.");
    },
    ajustaCampoSaida: function () {
        const campoSaida = document.querySelector("#saida");
        const botaoCopia = document.querySelector("#botaoCopia");

        if (campoSaida.value) {
            campoSaida.style.cssText = "background-image: none;";
            document.querySelector(".background-saida").remove();
            botaoCopia.style.display = "block";
        }
    }
}

const controladorCorIconeRodape = {
    corIcone: "222222",
    alteraCorOn: function () {
        this.corIcone = "0A3871";
    },
    alteraCorOff: function () {
        this.corIcone = "222222"
    },
    alteraUrlLinkedin: function () {
        const linkedin = document.querySelector("#linkedin");
        linkedin.src = `https://img.shields.io/badge/LinkedIn-${this.corIcone}?style=for-the-badge&logo=linkedin&logoColor=white`;
    },
    alteraUrlEmail: function () {
        const email = document.querySelector("#email");
        email.src = `https://img.shields.io/badge/Gmail-${this.corIcone}?style=for-the-badge&logo=gmail&logoColor=white`;
    },
    alteraUrlGithub: function () {
        const github = document.querySelector("#github");
        github.src = `https://img.shields.io/badge/GitHub-${this.corIcone}?style=for-the-badge&logo=github&logoColor=white`;
    }
}