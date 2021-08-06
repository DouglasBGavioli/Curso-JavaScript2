class Negociacao{
    constructor(data, quantidade, valor){
        // this sempre aponta para a instancia que ta executando a operacao no momento
        this._data = new Date(data.getTime()); // Nova instancia de data para que nao receba nenhuma alteracao do index
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);//?congelado para nao poder ser alterado apos se instanciado
        //! O underline e uma convensao onde as propriedades so podem ser acessadas pelos metodos da classe
    }
    get volume(){ //metodo que realiza e retorna o calculo do volume
        return this._quantidade * this._valor;
    }
    //?sabendo que nao se deve alterar ou acessar propriedades com underline(_) entao criamos metodos (get) para assim poder acessar os mesmos sem alterar os nomes originais
    get data(){ 
        return  new Date(this._data.getTime());//?Programacao defenciva, criando um novo objeto para que assim o original nao possa ser alterado
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}