const inputNome = document.getElementById('nome')
const inputEndereco = document.getElementById('endereco')
const inputDias = document.getElementById('dias')
const inputAbertura = document.getElementById('abertura')
const inputFechamento = document.getElementById('fechamento')
const fomr = document.getElementById("form")

let valorNome, valorEndereco, valorDias, valorAbertura, valorFechamento
form.addEventListener('submit', function (event){
    event.preventDefault()
    
    valorNome = inputNome.value
    valorEndereco = inputEndereco.value
    valorDias = inputDias.value
    valorAbertura = inputAbertura.value
    valorFechamento = inputFechamento.value
    
    console.log("Nome da loja: " + valorNome)
    console.log("Endereço: " + valorEndereco)       
    console.log("Dias de funcionamento: " + valorDias) 
    console.log("Horário de abertura: " + valorAbertura) 
    console.log("Horário de fechamento: " + valorFechamento)

    window.localStorage.setItem('Nome da loja', valorNome)
    window.localStorage.setItem('Endereço', valorEndereco)
    window.localStorage.setItem('Dias de funcionamento', valorDias)
    window.localStorage.setItem('Horário de abertura', valorAbertura)
    window.localStorage.setItem('Horário de fechamento', valorFechamento)

})

console.log("Preparando envio...")

const dadosFormulario = {
    nome: valorNome,
    endereco: valorEndereco,
    dias: valorDias,
    abertura: valorAbertura,
    fechamento: valorFechamento
}

fetch('https://api.flit.com.br/submeterDados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosFormulario),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta do servidor:', data);
    })
    .catch((error) => {
        console.error('Erro ao enviar dados:', error);
    });








