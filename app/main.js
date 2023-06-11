let cardapio = [];

const api = 'https://pedroabs1.github.io/APIs/cardapio.json';

atualizarCardapio();

const inserirItensCardapio = document.getElementById('itens_cardapio');

async function atualizarCardapio() {
    const res = await fetch(api);
    cardapio = await res.json();
    exibirCardapio(cardapio);

    
}

//FAZER pagina de checkout e formulario de pagamento por cartao

//FAZER QR code whatsapp

//FAZER QR code pagamento

//FAZER  pix copia e cola

//FAZER implementar localstorage salvar ultimos pedidos ver monibank

//FAZER api viacep 

//FAZER  armazenar ultimos endereços no localStorage

//FAZER badges play store e app store

//FAZER web app

//FAZER sistema e pagina de acompanhamento de entrega

//FAZER solicitar instalar web app atalho tea inicial apos terceiro acesso

//FAZER     solicitar usar localização para completar endereço

//FAZER melhorar ux ui aparencia e funcionalidade do site