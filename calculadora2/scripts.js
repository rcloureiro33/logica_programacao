var numero1 = ''
var numero2 = ''
var operacao = ''

const alteraNumero = n => {
  if (operacao !== '') {
    numero2 += n.toString()
    numero2 = parseInt(numero2)
    document.getElementById('digitos').value = numero1 + operacao + numero2
  } else {
    numero1 += n.toString()
    numero1 = parseInt(numero1)
    document.getElementById('digitos').value = numero1
  }
}

const alterarOperacao = simbolo => {
  operacao = simbolo
  document.getElementById('digitos').value = numero1 + operacao
}

const calcular = () => {
  var resultado = 0
  switch (operacao) {
    case '+':
      resultado = numero1 + numero2
      break
    case '-':
      resultado = numero1 - numero2
      break
    case 'x':
      resultado = numero1 * numero2
      break
    case '÷':
      resultado = numero1 / numero2
      break
  }
  numero1 = ''
  numero2 = ''
  operacao = ''
  document.getElementById('digitos').value = resultado
}
/*
const adicao = () => {
  var resultado = numero1 + numero2
  console.log(resultado)
}

const subtracao = () => {
  var resultado = numero1 - numero2
  console.log(resultado)
}

const multiplicacao = () => {
  var resultado = numero1 * numero2
  console.log(resultado)
}

const divisao = () => {
  var resultado = numero1 / numero2
  console.log(resultado)
}*/
