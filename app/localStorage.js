
const formulario = document.querySelector("[data-carrinho]");

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();

    const listaRespostas = {
        ["nomeesobrenome"]: e.target.elements["nomeesobrenome"].value,
        ["cpf"]: e.target.elements["cpf"].value,
        ["telefone"]: e.target.elements["telefone"].value,
        ["endereco"]: e.target.elements["endereco"].value,
        ["numero"]: e.target.elements["numero"].value,
        ["bairro"]: e.target.elements["bairro"].value,
        ["referencia"]: e.target.elements["referencia"].value  
    }


    localStorage.setItem("Cliente", JSON.stringify(listaRespostas));
    window.location.href = './carrinho.html';
})