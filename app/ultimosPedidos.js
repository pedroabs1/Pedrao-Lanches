
const formulario = document.getElementById("form-carrinho");
const ultimosPedidos = JSON.parse(localStorage.getItem("pedido")) || [];

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    const pedido = {
        ["item"]: e.target.elements["item"].value,
        ["quantidade"]: e.target.elements["quantidade"].value,
        ["pagamento"]: e.target.elements["pagamento"].value
    };
    
    // const existe = dadosCliente.find(elemento => elemento.nome === nome.value);
    // console.log(existe);

    // if (existe) {
    //     cliente.id = existe.id;
    //     console.log(existe.id); 
        
    //     dadosCliente[cliente.findIndex(elemento => elemento.id === existe.id)] = cliente;
    // }else{
    //     cliente.id = dadosCliente[cliente.length -1] ? cliente[cliente.length -1].id + 1 : 0;
    // }

    dadosCliente.push(pedido);
    localStorage.setItem("ultimosPedidos", JSON.stringify(pedido));
    window.location.href = './carrinho.html';
})