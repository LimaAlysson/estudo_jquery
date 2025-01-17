$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown('slow');
        $('#endereco-imagem-nova').focus();
    })

    $('#bt-cancelar').click(function() {
        $('form').fadeOut();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoImagemNova = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">  
            <a href="${enderecoImagemNova}" target="_blank" title="Ver imagem em tamanho real"> Ver imagem em tamanho real</a>
            </div>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#endereco-imagem-nova').val('');
        $('#endereco-imagem-nova').focus();
    })
})