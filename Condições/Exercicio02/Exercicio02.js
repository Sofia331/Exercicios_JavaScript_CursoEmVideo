function verificar() {
    var data= new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('fano')
    var res = window.document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value > ano ){
        window.alert('[ERRO] Verifique os dados inseridos e tente novamente')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        
        var genero = ''
        if (sexo[0].checked) {
            genero = ' homem'
            if (idade >= 0 && idade < 10){
                //Criança
            } else if (idade < 23) {
                //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        } else if (sexo[1].checked) {
            genero = 'a mulher'
            if (idade >= 0 && idade < 10){
                //Criança
            } else if (idade < 23) {
                //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        
        res.innerHTML = `Você é um${genero} e tem ${idade} anos.` 
    }


}
