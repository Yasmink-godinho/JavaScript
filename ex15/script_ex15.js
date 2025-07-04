function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex =  document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebeM.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultoM.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idosoM.png')
            }
        } else if (fsex[1].checked){ 
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebeF.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemF.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultoF.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idosaF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}

