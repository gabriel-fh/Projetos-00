let dinheiro = (valor) =>{
    // valor = Math.ceil(valor * 100) / 100
    valor = valor.toFixed(2)
    return "R$ " + valor.replace(".", ",")
}

let gente = (pessoa) => {
    if(pessoa == 1){
        return pessoa + " pessoa"
    }
    return pessoa + " pessoas"
}

let executar = () =>{
    let suaConta = Number(document.getElementById('suaConta').value)
    let gorjetaPercent = document.getElementById("gorjetaInput").value
    let dividirPessoas = document.getElementById("dividirInput").value

    let valorGorjeta = suaConta * (gorjetaPercent / 100)
    let totalConta = suaConta + valorGorjeta
    let cobrarCada = totalConta / dividirPessoas
    console.log(cobrarCada)

    // selecionar gorjeta
    document.getElementById("gorjetaPercent").innerHTML = gorjetaPercent + "%"

    // Gorjeta
    document.getElementById("gorjetaValue").innerHTML = dinheiro(valorGorjeta)

    // Total
    document.getElementById("totalGorjeta").innerHTML = dinheiro(totalConta)

    // Dividir
    document.getElementById("dividirValue").innerHTML = gente(dividirPessoas)
    
    // Cobrar
    document.getElementById("praCada").innerHTML = dinheiro(cobrarCada)

}
