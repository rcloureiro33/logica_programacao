let var1 = 0;
var var2 = 10;
const var3 = [15,25,35,45,55];

console.log(var3);

var arr=[10,21,32,63,74,95,26,57,28,var3];
console.log(arr);

console.log(arr[4]);

let varobj = {
  nome: "roberto",
  end: "rua mario de vasconcelos",
  num: 10,
  compl: "apto 607",
  cep: "28970-000"
  
}

console.log(varobj);
console.log(varobj.cep);

// carro é vermelho
// e carro é flex

const cor = "vermelha";
const comb = "flex";

console.log(cor == "vermelha" && comb == "flex");
console.log(cor == "azul" && comb == "flex");

// bicicleta verde ou azul
const cor2 = "azul";
console.log(cor2 == "verde" || cor2 == "azul");

// casa nao é verde 
// a casa nao é preta

const cor3 = "azul";
console.log(cor3 != "verde" && cor3 != "preta");


