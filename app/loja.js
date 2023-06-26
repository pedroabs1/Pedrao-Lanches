if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", pronto);
} else {
    pronto();
}

function pronto() {
    const botaoRemoverProduto = document.getElementsByClassName(
        "remove-produto-button"
    );
    for (var i = 0; i < botaoRemoverProduto.length; i++) {
        botaoRemoverProduto[i].addEventListener("click", removerProduto);
    }

    const quantidadeInputs =
        document.getElementsByClassName("produto-qtd-input");
    for (var i = 0; i < quantidadeInputs.length; i++) {
        quantidadeInputs[i].addEventListener("change", updateTotal);
    }
}

function removerProduto(event) {
    event.target.parentElement.parentElement.remove();
    updateTotal();
}
function updateTotal() {
    let totalCarrinho = 0;
    const carrinhoProduto = document.getElementsByClassName("carrinho-produto");
    for (var i = 0; i < carrinhoProduto.length; i++) {
        // console.log(carrinhoProduto[i]);
        const produtoPreco = carrinhoProduto[i]
            .getElementsByClassName("carrinho-produto-preco")[0]
            .innerText.replace("R$", "")
            .replace(",", ".");
        console.log(produtoPreco);

        const produtoQuantidade =
            carrinhoProduto[i].getElementsByClassName("produto-qtd-input")[0]
                .value;
        console.log(produtoQuantidade);

        totalCarrinho += produtoPreco * produtoQuantidade;
    }

    console.log(totalCarrinho);

    totalCarrinho = totalCarrinho.toFixed(2);

    totalCarrinho = totalCarrinho.replace(".", ",");

    document.querySelector(".carrinho-total-container span").innerText =
        "R$" + totalCarrinho;
}
