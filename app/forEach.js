let modalkey = 0;
let quantPizzas = 0;
let cart = 0;

const seleciona = (elemento) => document.querySelector(elemento);
const selecionaTodos = (elemento) => document.querySelectorAll(elemento);

const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const formatoMonetario = (valor) => {
    if (valor) {
        return valor.toFixed(2);
    }
};

const abrirModal = () => {
    seleciona('.modal').style.opacity = 0;
    seleciona('.modal').style.display = 'flex';
    setTimeout(() => (seleciona('.modal').style.opacity = 1), 150);
};

const fecharModal = () => {
    seleciona('.modal').style.opacity = 0;
    setTimeout(() => (seleciona('.modal').style.display = 'none'), 500);
};

const botoesFechar = () => {
    selecionaTodos('.lanche--cancelButton, .lanche--cancelMobileButton').forEach((item) =>
        item.addEventListener('click', fecharModal)
    );
};

const preencheDadosPizzas = (pizzaItem, item, index) => {
    //preencher dados de cada pizza

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = formatoReal(item.price[2]);
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
};

const preencheDadosModal = (item) => {
    seleciona('.lancheBig img').src = item.img;
    seleciona('.lanche h1').innerHTML = item.name;
    seleciona('.lanche--desc').innerHTML = item.description;
    seleciona('.lanche--actualPrice').innerHTML = formatoReal(item.price[2]);
};

const pegarKey = (e) => {
    //.closest retorna o elemento mais proximo da classe selecionada
    let key = e.target.closest('.pizza-item').getAttribute('data-key');
    console.log('pizza clicada ' + key);
    console.log(cardapio[key]);

    //garantir que a quantidade inicial é 1
    quantPizzas = 1;

    //manter a informação que a pizza foi clicada
    modalKey = key;

    return key;
};

const preencheTamanhos = (key) => {
    //remover a seleçao do tamanho grande
    seleciona('.lanche--size.selected').classList.remove('selected');

    //selecionar todos os tamanhos
    selecionaTodos('.lanche--size').forEach((size, sizeIndex) => {
        //selecionar tamanho grande
        sizeIndex == 2 ? size.classList.add('selected') : '';
        size.querySelector('span').innerHTML = cardapio[key].sizes[sizeIndex];
    });
};

const escolherTamanhoPreco = (key) => {
    // Ações nos botões de tamanho
    // selecionar todos os tamanhos
    selecionaTodos('.lanche--size').forEach((size, sizeIndex) => {
        size.addEventListener('click', (e) => {
            // clicou em um item, tirar a selecao dos outros e marca o q vc clicou
            // tirar a selecao de tamanho atual e selecionar o tamanho grande
            seleciona('.lanche--size.selected').classList.remove('selected');
            // marcar o que vc clicou, ao inves de usar e.target use size, pois ele é nosso item dentro do loop
            size.classList.add('selected');

            // mudar o preço de acordo com o tamanho
            seleciona('.lanche--actualPrice').innerHTML = formatoReal(cardapio[key].price[sizeIndex]);
        });
    });
};

const mudarQuantidade = () => {
    // Ações nos botões + e - da janela modal
    seleciona('.lanche--qtmais').addEventListener('click', () => {
        quantPizzas++;
        seleciona('.lanche--qt').innerHTML = quantPizzas;
    });

    seleciona('.lanche--qtmenos').addEventListener('click', () => {
        if (quantPizzas > 1) {
            quantPizzas--;
            seleciona('.lanche--qt').innerHTML = quantPizzas;
        }
    });
};
// /aula 05

const adicionarAoCarrinho = () => {
    seleciona('.lanche--addButton').addEventListener('click', () => {
        console.log('Adicionar ao Carrinho');

        //pegar dados  da janela  modal atual
        //qual pizza ? pegue o modal key para usar cardapio[modalKey]
        console.log('pizza ' + modalKey);

        //tamanho
        let size = seleciona('.lanche--size.selected').getAttribute('data-key');
        console.log('tamanho ' + size);

        //quantidade
        console.log('quantidade ' + quantPizzas);

        //preco
        let price = seleciona('.lanche--actualPrice').innerHTML.replace('R$', '');

        //crie um identficador que junte o id e tamanho
        // concatene as duasinformações separadas por um simbolo, vc escolhe
        let identificador = cardapio[modalKey].id + 't' + size;

        //antes de adicionar verifique se ja tem aquele codigo e tamanho
        // para adicionarmod a quantidade
        let key = cart.findIndex((item) => item.identificador == identificador);
        console.log(key);

        if (key > -1) {
            //se encontrar aumente a quantidade
            cart[key].qt += quantPizzas;
        } else {
            //adicionar objeto pizza no carrinho
            let pizza = {
                identificador,
                id: cardapio[modalKey].id,
                size,
                qt: quantPizzas,
                price: parseFloat(price),
            };
            cart.push(pizza);
            console.log(pizza);
            console.log('Sub total R$ ' + (pizza.qt * pizza.price).toFixed(2));
        }
        fecharModal();
        abrirCarrinho();
        atualizarCarrinho();
    });
};
const abrirCarrinho = () => {
    console.log('qtd de itens no carrinho ' + cart.length);
    if (cart.length > 0) {
        //mostrar o carrinho
        seleciona('aside').classList.add('show');
        seleciona('header').style.display = 'flex';
    }

    //exibir a saida do carrinho no modo mobile
    seleciona('.menu-openner').addEventListener('click', () => {
        if (cart.length > 0) {
            seleciona('aside').classList.add('show');
            seleciona('aside').style.left = '0';
        }
    });
};

const fecharCarrinho = () => {
    seleciona('.menu-closer').addEventListener('click', () => {
        seleciona('aside').style.left = '100vw'; //usando 100vw ele fica fora da tela
        seleciona('aside').style.display = 'flex';
    });
};

const atualizarCarrinho = () => {
    //exibir numero de itens no carrinho
    seleciona('.menu-openner span').innerHTML = cart.length;

    //mostrar o carrinho
    if (cart.length > 0) {
        //mostra o carrinho
        seleciona('aside').classList.add('show');

        //zerar o cart para nao duplicar itens
        seleciona('.cart').innerHTML = '';

        //crie as variaveis antes do for
        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        //para preencher os itens do carrinho, calcular subtotal
        for (let i in cart) {
            //use o find para pegar o tiem por id
            let pizzaItem = cardapio.find((item) => item.id == cart[i].id);
            console.log(pizzaItem);

            //em cada item pegar o subtotal
            subtotal += cart[i].price * cart[i].qt;
            console.log(cart[i].price);

            //fazer o clone, exibir na tela e depois preencher as informações
            let cartItem = seleciona('.models .cart--item').cloneNode(true);
            seleciona('.cart').append(cartItem);

            let pizzaSizeName = cart[i].size;
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

            //preencher as informações
            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;

            //selecioanr botões + e -
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                console.log('Clicou no botão mais');

                //adicionar apenas a quantidade que esta nesse     seleciona('.lanche--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`;
                cart[i].qt++;

                //atualizar a quantidade
                atualizarCarrinho();
            });

            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                console.log('Clicou no botão menos');

                if (cart[i].qt > 1) {
                    //subtrair apenas a quantidade nesse contexto
                    cart[i].qt--;
                } else {
                    //remover caso seja zero
                    cart.splice(i, 1);
                }

                cart.length < 1 ? (seleciona('header').style.display = 'flex') : '';

                //atualizar a quantidade
                atualizarCarrinho();
            });

            seleciona('.cart').append(cartItem);
        } //fim do for

        //fora do for
        //calcule desconto 10% e total
        //desconto = subtotal * 0.1
        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        //exibir na tela os resultados
        //selecionar o ultimo span do elemento
        seleciona('.subtotal span:last-child').innerHTML = formatoReal(subtotal);
        seleciona('.desconto span:last-child').innerHTML = formatoReal(desconto);
        seleciona('.total span:last-child').innerHTML = formatoReal(total);
    } else {
        seleciona('aside').classList.remove('show');
        seleciona('aside').style.left = '100vw';
    }
};

const finalizarCompra = () => {
    seleciona('.cart--finalizar').addEventListener('click', () => {
        console.log('finalizar a compra');
        seleciona('aside').classList.remove('show');
        seleciona('aside').style.left = '100vw'; //usando 100vw ele fica fora da tela
        seleciona('header').style.display = 'flex';
    });
};

/*
███████ ██   ██ ██ ██████  ██ ██████       ██████  █████  ██████  ██████   █████  ██████  ██  ██████
██       ██ ██  ██ ██   ██ ██ ██   ██     ██      ██   ██ ██   ██ ██   ██ ██   ██ ██   ██ ██ ██    ██
█████     ███   ██ ██████  ██ ██████      ██      ███████ ██████  ██   ██ ███████ ██████  ██ ██    ██
██       ██ ██  ██ ██   ██ ██ ██   ██     ██      ██   ██ ██   ██ ██   ██ ██   ██ ██      ██ ██    ██
███████ ██   ██ ██ ██████  ██ ██   ██      ██████ ██   ██ ██   ██ ██████  ██   ██ ██      ██  ██████


*/

//inicio do map json
cardapioJson.map((item, index) => {
    // console.log(item)

    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    // console.log(pizzaItem)

    document.querySelector('.pizza-area').append(pizzaItem);

    preencheDadosPizzas(pizzaItem, item, index);

    //quando a pizza for clicada
    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault();
        console.log('clicou na pizza');

        let chave = pegarKey(e);

        abrirModal();

        preencheDadosModal(item);

        preencheTamanhos(chave);

        //definir quantidade inicial = 1
        seleciona('.lanche--qt').innerHTML = quantPizzas;

        escolherTamanhoPreco(chave);
    });

    botoesFechar();
});

mudarQuantidade();

adicionarAoCarrinho();
atualizarCarrinho();
fecharCarrinho();
finalizarCompra();
