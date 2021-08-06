var campos = [//criando uma lista campos
    document.querySelector('#data'),//selecionando para a lista campos a data/quantidade/valor
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);//mostrando a lista campos

var tbody = document.querySelector('table tbody');//atribuindo o corpo da tabela a var tbody

document.querySelector('.form').addEventListener('submit', function (event) {//selecionando o form e colocanto um evento para o botao, e atribuindo uma funcao anonima a ele a qual decorre aqui abaixo

    event.preventDefault();//nao deixa a pagina recarregar apos o envio do form
    var tr = document.createElement('tr');//criando um tr

    campos.forEach(function (campo) {//para cara elemento em campos[]...

        var td = document.createElement('td');//cria uma td
        td.textContent = campo.value;//passa para a td o valor de campo
        tr.appendChild(td);//atribui como filha de tr a td
    });

    var tdVolume = document.createElement('td');//cria uma td e atribui a volume
    tdVolume.textContent = campos[1].value * campos[2].value;//diz que o conteudo de tdVolume recebe o valor do item 1 da lista e multiplica pelo valor do item 2

    tr.appendChild(tdVolume);//coloca o resultado dento da tr como filha

    tbody.appendChild(tr);//coloca toda td como filha de tbody

    campos[0].value = '';//reseta o campo da data
    campos[1].value = 1;//seta como 1 o campo quantidade
    campos[2].value = 0;//seta como 0 o campo valor

    campos[0].focus(); //volta para o campo da data apos enviar o form

});