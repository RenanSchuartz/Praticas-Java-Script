function transform(){
    var valor = document.getElementById("campValorTempo")
    var temp1 = document.getElementById("selTemp1")
    var temp2 = document.getElementById("selTemp2")
    var span = document.getElementById("span")
    let resultado
    temp1.style.borderColor = "black";

if(temp1.value == ""){
   alert (span = `Você tem que preencher o campo da primeira temperatura`)
    temp1.style.borderColor = "red"
    
}else if(valor.value == ""){
    alert (span = `Você tem que preencher o campo do valor da temperatura`)
    valor.style.borderColor = "red"

}else if(temp2.value == ""){
    alert (span = `Você tem que preencher o campo da segunda temperatura`)
    temp2.style.borderColor = "red"

}else if(temp1.value == "C" && temp2.value == "F"){
    resultado = (valor.value * 9/5) + 32
    span.innerHTML = `O resultado de Celsius convertido em fahrenheit é ${resultado.toFixed(1)} F°` 
}else if(temp1.value == "F" && temp2.value == "C"){
    resultado = (valor.value -32) * 5/9
    span.innerHTML = `O resultado de Fahrenheit convertido em Celsius é ${resultado.toFixed(1)} C°`
}else{
    span.innerHTML = `Não é possível converter com a mesma temperatura. Selecione outra.`

}





}
    