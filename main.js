$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancel-button').click(function() {
        $('form').slideUp();
    })

    $("form").on('submit', function(event) {
        event.preventDefault();

        const enderecoImagem = $('#url-imagem').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImagem}" />`).appendTo(novoItem);
        $(`
            <div class='imagem-link'>
                <a href='${enderecoImagem}' target='_blank' title='Ver imagem em tamanho real'>
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn();
        $('#url-imagem').val('');
    })
})


