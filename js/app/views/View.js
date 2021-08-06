class View{
    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        throw new Error('O metodo template deva ser implementado');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}