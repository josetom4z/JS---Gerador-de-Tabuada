function Calc(){
    var num = document.getElementById("txtNum")    
    var n = num.value
    let tab = document.getElementById('seltab')

    if(n == ""){
        alert('Por favor, digite um número!')
    }else{
        let resultado = 0
        tab.innerHTML = ''
        for(var i=0;i<=10;i++){
            resultado = i * n
            let item = document.createElement('option')
            item.text = `${i} x ${n} = ${resultado}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
         
    }
}