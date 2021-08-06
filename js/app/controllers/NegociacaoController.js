class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);//bind mantem a associacao com o document
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }
    adiciona(event) {
        event.preventDefault();
        //?(...)Com este spread operator, indicamos que o array será desmembrado - e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor.

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Negociacao adicionada com sucesso!";
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();
    }
    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}