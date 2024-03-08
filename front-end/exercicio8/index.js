const inputNome = document.getElementById('nome')
const inputEndereco = document.getElementById('endereco')
const inputDias = document.getElementById('dias')
const inputAbertura = document.getElementById('abertura')
const inputFechamento = document.getElementById('fechamento')

form.addEventListener('submit', function (event){
    event.preventDefault()
    
    const valorNome = inputNome.value
    const valorEndereco = inputEndereco.value
    const valorDias = inputDias.value
    const valorAbertura = inputAbertura.value
    const valorFechamento = inputFechamento.value
    
    console.log("Nome da loja: " + valorNome)
    console.log("Endereço: " + valorEndereco)       
    console.log("Dias de funcionamento: " + valorDias) 
    console.log("Horário de abertura: " + valorAbertura) 
    console.log("Horário de fechamento: " + valorFechamento)

})




