const codificador = {
    chaveCodificadora: ['a', 'e', 'i', 'o', 'u'],
    chaveDecodificadora: ['ai', 'enter', 'imes', 'ober', 'ufat'],
    codifica: function (texto) {
        let textoCodificado = '';
        for (let letra of texto) {
            for (let i = 0; i < this.chaveCodificadora.length; i++) {
                const elemento = this.chaveCodificadora[i];
                if (letra === elemento) {
                    letra = this.chaveDecodificadora[i];
                }
            }
            textoCodificado += letra;
        }
        return (textoCodificado);
    },
    decodifica: function (texto) {

    }
}
codificador.codifica('aeiouaeiout');