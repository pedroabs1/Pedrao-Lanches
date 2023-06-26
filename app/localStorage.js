
const formulario = document.getElementById("form-carrinho");
const dadosCliente = JSON.parse(localStorage.getItem("cliente")) || [];

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    const cliente = {
        ["nome"]: e.target.elements["nome"].value,
        ["cpf"]: e.target.elements["cpf"].value,
        ["telefone"]: e.target.elements["telefone"].value,
        ["endereco"]: e.target.elements["endereco"].value,
        ["numero"]: e.target.elements["numero"].value,
        ["bairro"]: e.target.elements["bairro"].value,
        ["referencia"]: e.target.elements["referencia"].value
    };
    
    const existe = dadosCliente.find(elemento => elemento.nome === nome.value);
    console.log(existe);

    if (existe) {
        cliente.id = existe.id;
        console.log(existe.id); 
        
        dadosCliente[cliente.findIndex(elemento => elemento.id === existe.id)] = cliente;
    }else{
        cliente.id = dadosCliente[cliente.length -1] ? cliente[cliente.length -1].id + 1 : 0;
    }

    dadosCliente.push(cliente);
    localStorage.setItem("dadosCliente", JSON.stringify(cliente));
    window.location.href = './carrinho.html';
})