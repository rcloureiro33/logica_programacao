const produtos =[
    {nome:"Pão", valor: 1},
    {nome:"Macarrão", valor: 3},
    {nome:"Tomate", valor: 5},
    {nome:"Biscoito", valor: 4},
    {nome:"Carne", valor: 25},
    {nome:"Frango", valor: 12}
  ]
  
  produtos.map((item) => {
    console.log("O valor do "+item.nome+" custa R$ "+item.valor+",00");
  })