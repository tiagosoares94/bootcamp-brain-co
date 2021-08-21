const inputName = document.querySelector('[data-js="username"]')

function corrigeDado(dado) {
  const preps = ["de", "da", "do", "dos"];
  let out = dado.toLowerCase().split(' ');


  for (let i = 0; i < out.length; i++) {
    if (out[i] != '') {
      if (!preps.includes(out[i])) {
        out[i] = out[i][0].toUpperCase() + out[i].substr(1)
      }
    }
  }

  return out.join(' ')
}

function recebeDado(e) {
  const entrada = e.target.value
  const corrigido = corrigeDado(entrada)
  e.target.value = corrigido
}

inputName.addEventListener('input', recebeDado)
