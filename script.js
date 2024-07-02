var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var oper = document.getElementsByName('calc')
var res = document.getElementById('res')

function calcular(){
var operSelecionado = false

for (var i = 0; i < oper.length; i ++){
    if(oper[i].checked){
        operSelecionado = true;
        break;
    }
}

if(n1.value.length == 0 || n2.value.length == 0 || ! operSelecionado){
    window.alert('Preencha todos os campos corretamente')
}else{
    var ini = Number(n1.value)
    var fin = Number(n2.value)
    if(oper[0].checked){
        var resultado = ini + fin
    }else if(oper[1].checked){
        var resultado = ini - fin;
    }else if(oper[2].checked){
        var resultado = ini * fin;
    }else if(oper[3].checked){
        var resultado = ini / fin;
    }
    res.innerHTML = `O resultado é ${resultado}`
}


}

