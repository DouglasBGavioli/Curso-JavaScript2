class DateHelper {
    constructor() {
        throw new Error('DateHelper não pode ser instanciada, uso os metodos estaticos')
    }

    static dataParaTexto(data) { // quando static o metodo pode ser chamado sem a classe ser instanciada
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {
        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estao no formato aaaa-mm-dd');
            
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }


}