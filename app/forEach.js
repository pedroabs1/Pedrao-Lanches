function exibirCardapio(cardapio) {
    inserirItensCardapio.innerHTML += ``;

    cardapio.forEach(item => {
        descricao = item.descricao;
        // console.log(descricao)
        itensDescricao = descricao.split(/\n/);
        // console.log(itensDescricao)
        const descrição_texto for (let contador = 0; contador < itensDescricao.length; contador++) {

                // console.log(itensDescricao.length)

                inserirItensCardapio.innerHTML +=`<li class="ingredientes--lanche">`

                inserirItensCardapio.innerHTML += itensDescricao[contador];

                // console.log('descricao[' + contador +']:', itensDescricao[contador])

                inserirItensCardapio.innerHTML +=`</li>`

            }

    inserirItensCardapio.innerHTML += `
        <ul class="cartao__lanche">
            <img src="${item.imagem}" alt="${item.alt}" class="imagem--lanche">
            <h3 class="titulo--lanche">${item.titulo}</h3>
            <ul class="container__descricao--lanche">`+ descrição_texto + `</ul>


<div class="container__comprar">
            <h2 class="preco--lanche">Apenas R$ ${item.preco}</h2>
            <button name="Comprar" class="comprar--lanche" id="${item.titulo}">Comprar</button>
        </div>
        </ul>`;

        descricao = ""
        itensDescricao = ""
    })
}

function forloop(){
    descricao = item.descricao;
    for (let contador = 0; contador < descricao.length; contador++) {
        return descricao[contador].split("\n");
    }

}

//FAZER habilitar e linkar botao de compra

