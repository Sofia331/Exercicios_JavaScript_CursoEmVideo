function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('body')
    var letra = window.document.querySelector('footer')
    var letra1 = window.document.querySelector('header')
    var data= new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora>= 0 && hora < 12){
        //bom dia
        img.style.backgroundImage = ('url(img/manhã.jpg)')
        
    }else if (hora >= 12 && hora < 18 ) {
        //boa tarde
        img.style.backgroundImage = ('url(img/Tarde.jpg)')
    } else {
        //boa noite
        img.style.backgroundImage = ('url(img/Noite.jpg)')
    }
}
