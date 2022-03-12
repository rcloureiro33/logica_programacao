const num1 = 10;
const num2 = 5;
const sinal = "/";

const soma = (n1,n2) => {
  var res = n1 + n2;
  console.log(res);
}

const menos = (n1,n2) => {
  var res = n1 - n2;
  console.log(res);
}

const mult = (n1,n2) => {
  var res = n1 * n2;
  console.log(res);
}

const divi = (n1,n2) => {
  var res = n1 / n2;
  console.log(res);
}

swtich (sinal) {
  case "+":
    soma(n1,n2);
    break;
  case "-":
    menos(n1,n2);
    break;
  case "/":
    divi(n1,n2);
    break;
  case "*":
    mult(n1,n2);
    break;
}
