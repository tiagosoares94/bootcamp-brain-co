const form = document.querySelector('[data-js="carros"]')
const table = document.querySelector('[data-js="tabela-carros"]')

function montaTabela(entrada, row) {
  const td = document.createElement('td')
  td.textContent = entrada.value
  row.appendChild(td)
}

function enviar(e) {
  e.preventDefault()
  const placa = e.target.elements['placa']
  const cor = e.target.elements['cor']
  const ano = e.target.elements['ano']
  const imagem = e.target.elements['imagem']
  const modelo = e.target.elements['modelo']


  const dados = [imagem, modelo, ano, placa, cor]
  const row = document.createElement('tr')

  dados.forEach(element => montaTabela(element, row))
  table.appendChild(row)

  e.target.reset()
  imagem.focus()
}

form.addEventListener('submit', enviar)
