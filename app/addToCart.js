// if (document.readyState == "loading") {
//     document.addEventListener("DOMContentLoaded", pronto);
// } else {
//     pronto();
// }
pronto();

function pronto() {
    const adicionarCarrinho =
        document.getElementsByClassName("comprar--lanche");
    for (var i = 0; i < adicionarCarrinho.length; i++) {
        adicionarCarrinho[i].addEventListener("click", adicionarNoCarrinho);
    }
}

function adicionarNoCarrinho(event) {
    const butao = event.target;
    // console.log(butao);

    const containerProduto = butao.parentElement.parentElement;

    const imagemProduto =
        containerProduto.getElementsByClassName("imagem--lanche")[0].src;
    // console.log(imagemProduto);

    const tituloProduto =
        containerProduto.getElementsByClassName("titulo--lanche")[0].innerText;
    // console.log(tituloProduto);

    const precoLanche =
        containerProduto.getElementsByClassName("preco--lanche")[0].innerText;
    console.log(precoLanche);

    let novoCarrinhoProduto = (document.createElement = "tr");
    novoCarrinhoProduto.classList.add("carrinho-produto");
    novoCarrinhoProduto.innerHtml = `            
    <tr class="carrinho-produto">
        <td class="produto-identificacao">
        <img src="${imagemProduto}" alt="${tituloProduto}" class="carrinho-produto-image">
        <strong class="carrinho-produto-titulo">${tituloProduto}</strong>
        </td>
        <td>
        <span class="carrinho-produto-preco">R$${precoLanche}</span>
        </td>
        <td>
        <input type="number" value="1" min="0" class="produto-qtd-input">
        <button type="button" class="remove-produto-botao">Remover</button>
        </td>
    </tr>`;
}
