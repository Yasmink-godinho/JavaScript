function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora < 12){
        //Bom dia!
        img.src = 'dia.png'
        document.body.style.background = '#fedb65' //Altera a cor do fundo apenas nessa condição (se for de manhã, o fundo muda)
    } else if (hora >=12 && hora < 18){
        //Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#ec8c36' //Altera a cor do fundo apenas nessa condição (se for de tarde, o fundo muda)
    } else{
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.background = '#004646' //Altera a cor do fundo apenas nessa condição (se for de noite, o fundo muda)
    }

}

