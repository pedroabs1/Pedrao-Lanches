const popup = document.getElementById('popup__container');

function handlePopup(open) {
    if (open)
        popup.classList.add('opened');
    else
        popup.classList.remove('opened');
}

var dt = new Date();

//document.write(dt); //escreve a data no documento html

var hora = dt.getHours();

console.log(hora);

if (hora < 18){
    if (hora >= 2){
        handlePopup(open) //abre popup
        console.log("mostra popup");
    }else{
        handlePopup(close) // esconde popup
        console.log("esconde popup");
    }
}else{
    handlePopup(false) // esconde popup
    console.log("esconde popup");
}

