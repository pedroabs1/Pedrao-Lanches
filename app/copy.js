function pixCopiaeCola() {
    // Get the text field
    var copyText = "00020126330014BR.GOV.BCB.PIX0111728406921045204000053039865802BR5925Pedro Augusto Barbosa De 6009SAO PAULO610805409000622405209gtNLy2n0vqvdLpjtkmy6304C8C9";

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("Pix Copiado!: abra seu app de banco selecione o valor pague e aguarde seu lanche chegar!");
  }