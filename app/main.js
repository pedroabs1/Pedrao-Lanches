let cardapio = [];

const api = 'https://pedroabs1.github.io/APIs/cardapio.json';

atualizarCardapio();

const inserirItensCardapio = document.getElementById('itens_cardapio');

async function atualizarCardapio() {
    const res = await fetch(api);
    cardapio = await res.json();
    exibirCardapio(cardapio);

    
}
// FAZER botao de comprar somar 1 item no carrinho 

//FAZER animação adicionar ao carrinho no menu

//FAZER lista e itens no carrinho/checkout 

//IMPLEMENTAR observações nos produtos

//FAZER implementar localstorage salvar ultimos pedidos (ver monibank)

//FAZER armazenar ultimos endereços no localStorage para uso futuro e enviar no whatsapp

//FAZER contar numero de acessos 

//FAZER solicitar instalar web app atalho tela inicial apos terceiro acesso

//FAZER formulario de pagamento por cartao

//FAZER conta bitcoin 

//FAZER pagseguro QR E LINK 

//FAZER mercado pago qr E link 

//FAZER link pix copia e cola

//FAZER badges play store e app store

//FAZER sistema e pagina de acompanhamento de entrega

//FAZER solicitar usar localização para completar endereço api

//FAZER api viacep 

//FAZER melhorar ux ui aparencia e funcionalidade do site