function contar() {
    let inicio= window.getElementById('inicio')
    let fim = window.getElementById('fim')
    let pular = window.getElementById('pular')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || pular.value.length == 0 ){
        window.alert("[ERRO]Faltam dados!! Verifique novamente.")
    }else{
        window.alert("Esta certinho >.<")
    }


}
