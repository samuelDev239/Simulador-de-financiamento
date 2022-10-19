
var div1 = document.getElementById('emprestimo')
var div2 = document.getElementById('parcelass')
var div3 = document.getElementById('juros')
var div4 = document.getElementById('total')
var div5 = document.getElementById('parcela')
var tab = document.querySelector('.tabela')
function calcular(){
    let valor = parseInt(document.getElementById('valor').value)
    let parcelas = parseInt(document.getElementById('parcelas').value)
    var juros = 10*valor /100
    var total= valor + juros
    let resultado = valor / parcelas
    var parcela = total / parcelas
    console.log(parcela)
    tab.classList.remove("tabela");
    tab.classList.add("tabelainv");
    var p1 = document.createElement('p') 
    var p2 = document.createElement('p')
    var p3 = document.createElement('p')
    var p4 = document.createElement('p')
    var p5 = document.createElement('p')
    var p6 = document.createElement('p')
    
     valor.toLocaleString()
    
    p1.textContent =  "R$ " + valor.toLocaleString('pt-BR')
    p2.textContent = parcelas
    p3.textContent = "R$ " + juros.toLocaleString('pt-BR')
    p4.textContent = "R$ " + total.toLocaleString('pt-BR')
    p5.textContent = "R$ " + parcela.toLocaleString('pt-BR')
    
    
    div1.appendChild(p1)
        div2.appendChild(p2)
        div3.appendChild(p3)
        div4.appendChild(p4)
        div5.appendChild(p5)
        
    

}