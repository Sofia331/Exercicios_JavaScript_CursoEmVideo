function contar() {
    let inicio = document.getElementById('txtI')
    let fim = document.getElementById('txtF')
    let pular = document.getElementById('txtP')
    let res = document.getElementById('res')
    
    
    if(inicio.value.length == 0 || fim.value.length == 0 || pular.value.length == 0 ){
        res.innerHTML = 'Faltam dados!! Verifique novamente.'
        //window.alert('[ERRO]Faltam dados!! Verifique novamente.')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pular.value)
        if(p <= 0){
            window.alert('Passo Invalido! Irei considerar Passo = 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c +=p){
                res.innerHTML += ` ${c}`} 
            }
            else 
            {
                for(let c = i; c >= f; c -=p)
                {
                    res.innerHTML += `${c}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
        
    }
    

}
