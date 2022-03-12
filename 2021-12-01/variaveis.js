const produtos =["Biscoito", "Pão", "Detergente", "Sabonete", "Farinha de Trigo" ];

/*
let cont2 = 0;
while (cont2 < produtos.length){
  console.log(produtos[cont2]);
  cont2++;
};
*/

produtos.map((item) => {
  console.log(item);
})