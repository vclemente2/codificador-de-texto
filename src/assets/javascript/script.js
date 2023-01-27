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
    }
}