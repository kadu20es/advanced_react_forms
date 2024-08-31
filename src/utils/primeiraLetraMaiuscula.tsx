export const primeiraLetraMaiuscula = (nome: string) => {
        // converte para que todas as palavras tenham a primeira letra maiúscula
        return nome.trim()
            .split(' ')
            .map(palavra => {
                return palavra[0]
                    .toLocaleUpperCase()
                    .concat(palavra.substring(1))
                }).join(' ')
}